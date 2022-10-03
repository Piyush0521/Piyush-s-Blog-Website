import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    Data: Leaders,
    Pending,
    Error,
  } = useFetch("http://localhost:8000/leaders/" + id);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/leaders/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      // console.log(`Blog with ID ${id} has been deleted`);
      navigate("/view");
    });
  };

  return (
    <div className="blog-details">
      <div className="details">
        {Pending && (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
        {Error && (
          <div>
            <h2>Error occured : {Error}</h2>
          </div>
        )}
        {Leaders && (
          <article>
            <h2>{Leaders.Title}</h2>
            {/* <p> Written by: {Leaders.Author}</p> */}
            <p>Better called as: {Leaders.Snippet}</p>
            <p>Content: {Leaders.Content}</p>
            <button onClick={handleDelete}>Delete</button>
          </article>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
