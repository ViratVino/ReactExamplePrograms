import React from 'react'

const VideoItem = (props) => {
  let{id,name,description,contenturl,thumburl}=props.video
  return (
    <div className='videoItem' onClick={()=>props.handleClick(props.video)}> 
      <figure>
        <picture><img src={thumburl} alt={name} /></picture>
      </figure>
      <main>
        <h2>{name.slice(0,30)+"..."}</h2>
      </main>
    </div>
  )
}

export default VideoItem