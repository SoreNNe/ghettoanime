import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function Main(props){
    const [cards, setCards] = useState([]);
    useEffect(() => {
     const fetchData = async () => {
        const result = await fetch("http://localhost:8080/api/v1/series", {
          crossDomain: true,
        });
        const json = await result.json();
        //console.log(json);
        setCards(json);
      };
      fetchData();
    },[cards]);
    return(
        
        <main>
            {cards.map((card) => (
            <Main {...card} />
          ))}
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