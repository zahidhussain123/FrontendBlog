import "./home.css";
import Header from '../../header/Header'
// import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import Posts from "../../posts/Posts";
import axios from "axios";
import { useEffect,useState } from "react";
import { useLocation } from "react-router";
const Home = () => {
  const [posts, setPosts] = useState([])
 const {search} = useLocation();
  useEffect(()=>{
    const fetchPosts = async()=>{
     const res = await axios.get("/posts" +search)
       setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <>
      <Header/>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
