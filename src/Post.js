import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={'https://blog-api.onrender.com/' + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <div className="info"> {/* Replace <p> with <div> */}
          {author && <p>Author: {author.username}</p>}
          <time>{formatISO9075(new Date(createdAt))}</time>
        </div>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
