import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "./singlePost.css";
import { useEffect, useState } from "react";
import axios from "axios";


export default function SinglePost() {
  const location = useLocation();
  // console.log(location);
  // console.log(location.pathname.split("/")[2]); //63c92f132a129e890f343035
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      // console.log(res)
      setPost(res.data)
    }
    getPost();  
  }, [path]);



  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={post.photo}
            alt=""
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>

              {/* <Link className="link" to="/posts?username=Safak">
                Aghiles
              </Link> */}
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}