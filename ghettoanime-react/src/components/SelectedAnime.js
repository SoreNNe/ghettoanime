import React from 'react'


export default function SelectedAnime(props) {
       
  return (
    <>
        <div className='container--anime'>
         <img src={props.imageUrl} className="selected-anime-image"/>
            <div className='anime-info'>
                <h1>{props.animeTitle}</h1>                                    
                <p><h4>Description:</h4> {props.description}</p> 
            </div>
        </div>
        <hr/>
        <h2 className='episodes-text'>Episodes</h2>
        <div className='container--anime--episodes'>
            <p>{props.title}</p>
            <p>{props.episode}</p>
            <p>{props.name}</p>
        </div>    
    </>
  )
}