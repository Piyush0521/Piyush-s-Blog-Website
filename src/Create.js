import { useState } from "react";import { useNavigate } from "react-router-dom";

const Create = () => {
    const [Title, setTitle] = useState();
    const [Snippet, setSnippet] = useState();
    const [Content, setContent] = useState();
    const [Author, setAuthor] = useState('Ned');
    const [Pending, setPending] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const blog = { Title, Snippet, Content, Author };

        setPending(true);

        fetch('http://localhost:8000/leaders', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then((blog) => {
            console.log(`New Blog Added : ${blog}`);
            setPending(false);
            console.log(blog);
            navigate('/view');
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title:</label>
                <input 
                type="text"
                required
                value={Title}
                onChange= {(e) => setTitle(e.target.value)}
                />
                <label> Blog Snippet:</label>
                <input 
                type="text"
                required
                value={Snippet}
                onChange= {(e) => setSnippet(e.target.value)}
                />
                <label> Blog Content:</label>
                <textarea
                required
                value={Content}
                onChange= {(e) => setContent(e.target.value)}
                ></textarea>
                <label> Blog Author:</label>
                <select 
                value={Author}
                onChange= {(e) => setAuthor(e.target.value)}>
                    
                    <option value="Jamie">Jamie</option>
                    <option value="Stannis">Stannis</option>
                    <option value="Ned">Ned</option>
                    <option value="Robb">Robb</option>
                </select>
                <center>{!Pending && <button className="btn">Submit</button>}
                {Pending && <button className="btn disabled">Loading...</button>}
                </center>
            </form>
            
        </div>
        
    );
}
 
export default Create;