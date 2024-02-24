import React from 'react';
import VideoItem from './VideoItem';
import Player from './Player';

const VideoContainer = ({state,selectedVideo,handleClick}) => {
  return (
    <section id="videoBlock">
        <article>
            <aside className='left'>
              <Player state={selectedVideo}/>
            </aside>
            <aside className='right'>
              {
                state.map(video=>{
                  return <VideoItem key={video.id} video={video} handleClick={handleClick}/>
                }
                  )
              }
            </aside>
        </article>
    </section>
  )
}

export default VideoContainer