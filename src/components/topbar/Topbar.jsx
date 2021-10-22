import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import {useContext} from "react";

const Topbar = () => {
    const {user,dispatch} = useContext(Context);
    const PF = "http://localhost:6000/images/"
    const handleLogOut =()=>{
   dispatch({type:"LOGOUT"});
    }
    return (
        <div className="top">
            <div className="top-left">
            <i className="topIcon fa-brands fa-facebook-f"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="top-center">
                <div className="toplist">
                    <li className="toplistitem">
                    <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="toplistitem">
                    <Link to="/" className="link">About</Link>
                    </li>
                    <li className="toplistitem">
                    <Link to="/" className="link">Contact</Link>
                    </li>
                    <li className="toplistitem">
                    <Link to="/write" className="link">Write</Link>
                    </li>
                    <li className="toplistitem" onClick={handleLogOut}>
                    {/* {user && "Logout"} */}
                    {user && <li className="toplistitem">Logout</li>}
                    </li>
                </div>
            </div>
            <div className="top-right">
            {
                user ? (
                    <Link className="link" to="/settings">
                <img
                    // src="https://media.istockphoto.com/photos/portrait-teenager-picture-id846730696?b=1&k=20&m=846730696&s=170667a&w=0&h=a8z_Ro8s8y5cAzj91XsI4yneNW98V1vNthdX8s1L_-Q="
                    src={PF + user.profilePic}
                    alt=""
                    className="topimg"
                />
                </Link>
                ) : (
                    <ul className="toplist">
                    <li className="toplistitem">
                    <Link className="link" to="/login">Login</Link>
                    </li>
                    <li className="toplistitem">
                    <Link className="link" to="/register">Register</Link>
                    </li>
                    </ul>
                )
            }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Topbar;
