import React from 'react'
import { Link } from 'react-router-dom'

export default function AnimeList(props) {
  return (
    <div className="card">
                <img src={props.url} className="card--image"/>
                <div className="card--stats">
                    <h4>{props.title}</h4>
                    <hr/>
                    <Link to="/Anime">{props.title}</Link>
                </div>
            </div>
  )
}
