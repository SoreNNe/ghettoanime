import React from 'react'

export default function AnimeList(props) {
  return (
    <div className="card">
                <img src={props.url} className="card--image"/>
                <div className="card--stats">
                    <h4>{props.title}</h4>
                    <hr/>
                    <a href={props.anime}>{props.title}</a>
                </div>
            </div>
  )
}
