import React from "react";

export default function Main(props){
    return(
        <main>
            <div className="card">
                <img src={props.url} className="card--image"/>
                <div className="card--stats">
                    <h4>{props.title}</h4>
                    <h4>{props.episode}</h4>
                    <p>{props.name}</p>
                    <hr/>
                    <a href={props.anime}>{props.title}</a>
                </div>
            </div>
        </main>
    )

}