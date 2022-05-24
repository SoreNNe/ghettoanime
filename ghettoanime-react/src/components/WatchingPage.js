import React from 'react';
import {Player,ControlBar,ReplayControl,ForwardControl,CurrentTimeDisplay,TimeDivider,PlaybackRateMenuButton,VolumeMenuButton} from 'video-react';
import './VideoStyles.css'

export default props => {
  return (  
      <>
      <div className='watching-anime-info'>
        <img src='https://cdn.discordapp.com/attachments/816715668421607505/947547266154131506/shaman-king-2021.png'></img>
        <div>
        <h1>Shaman King</h1>
        <h2>Episode </h2>
        <p>episode name</p>
        </div>
      </div>
      <hr/>
        <div className='player--box'>
         <Player poster="/assets/poster.png">
           <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />

           <ControlBar>
             <ReplayControl seconds={10} order={1.1} />
             <ForwardControl seconds={10} order={1.2} />
             <CurrentTimeDisplay order={4.1} />
             <TimeDivider order={4.2} />
             <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
             <VolumeMenuButton disabled />
           </ControlBar>
         </Player>
         </div>
         <div>


         </div>
         </>  
  );
};