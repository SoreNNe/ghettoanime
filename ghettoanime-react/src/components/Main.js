import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Main(props){
    return(
        <main>
            <div className="card">
            <Link to="/WatchingPage"><img src={props.url} className="card--image"/></Link>
                <div className="card--stats">
                    <h4>{props.title}</h4>
                    <h4>{props.episode}</h4>
                    <p>{props.name}</p>
                    <hr/>
                    <Link to="/Anime">{props.title}</Link>
                </div>
            </div>
        </main>
    )

}