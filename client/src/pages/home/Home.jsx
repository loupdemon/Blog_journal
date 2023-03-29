import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  // console.log(location);
  const [posts, setPosts] = useState([]);
  const {search}= useLocation();
  // console.log(search)
 //http://localhost:3000/?user=Aghiles
 //http://localhost:3000/?cat=voyage

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      // console.log(res.data);
    }
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}