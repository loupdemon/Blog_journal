import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  return (
    <div className="post">
    {post.photo && (
      <img
        className="postImg"
        src={post.photo}
        alt=""
      />
    )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">
              <Link className="link" to={`/?cat=${c.name}`}>
                {c.name}
              </Link>
            </span>
          ))}

          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span> */}

        </div>
        <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">
              {post.title}
            </span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()} </span>
      </div>
      <p className="postDesc">
        {post.desc}
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam? */}
      </p>
    </div>
  );
}