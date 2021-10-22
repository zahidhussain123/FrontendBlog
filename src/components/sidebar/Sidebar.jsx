import "./sidebar.css";
import {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [cats, setCats] = useState([])

  useEffect( ()=>{
    const getCats = async () =>{
       const res=    await axios.get("/categories")
       setCats(res.data)
    }
    getCats()
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://media.istockphoto.com/photos/hiker-relaxes-on-mountain-ridge-at-sunrise-picture-id1256434595?b=1&k=20&m=1256434595&s=170667a&w=0&h=5qQkV2X1o9_7Tk4lB_N5H9tVRWEGfLlV7zBE04wnO4Y="
          alt=""
        />
        <p>
          It is a long established fact tha em Ipsum is that it has aolved over
          the years, sometimes by accident, sometimes on purpose.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        {cats.map((c)=>(
        <Link to={`/?cat=${c.name}`} className="link">
        <li className="sidebarListItem">{c.name}</li>
        </Link>
        ))}
          
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-f"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
