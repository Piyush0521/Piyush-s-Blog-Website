import { Link } from "react-router-dom";

const LeaderList = ({ Leaders, Title, removeLeader }) => {
  return (
    <div className="list">
      <h1>{Title}</h1>
      {Leaders.map((Leader) => (
        <div className="details">
          <Link to={`/view/${Leader.id}`}>
            <h2>{Leader.Title}</h2>
            <p> Better called as "{Leader.Snippet}"</p>
          </Link>

          {/* <button class="btn" onClick={() => removeLeader(leader.id)}>Remove</button> */}
        </div>
      ))}
    </div>
  );
};

export default LeaderList;
