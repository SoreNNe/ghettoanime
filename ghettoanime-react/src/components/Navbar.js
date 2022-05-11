import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function(){
    return(
        <nav className="navbar">
            <Link className="navbar--links" to="/"><h1>GHETTOANIME</h1></Link>
            <div>
               <Link className="navbar--links" to="/" >HOME</Link>
               <Link className="navbar--links" to="/AnimeList">ANIME LIST</Link>
               <Link className="navbar--links" to="">MY LIST</Link>
               <Link className="navbar--links" to="/SignUp">SIGN UP</Link>
               
            </div>
        </nav>
    )
}