import React from "react";

export default function WatchingPage(){
    return(
        <>
            <div className="videoPlayer">
                <h1>tu sa budu prehravat videa</h1>
            </div>
            <div className="episodeSwitchButton">
                <button className="next-prevPage">next</button>
                <button className="allEpisodes">all episodes</button>
                <button className="next-prevPage">previous</button>
            </div>
        </>
    )
}