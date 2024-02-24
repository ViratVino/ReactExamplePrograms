import React, { useRef, useState } from 'react'

const Player = ({state}) => {
  let[toggle,setToggle]=useState(true);
  let videoRef=useRef();

 let HandleVideoControls=()=>{

    setToggle(!toggle);
  
   
  if(toggle===true){
    videoRef.current.play();
    videoRef.current.autoplay=true;
  } else{
    videoRef.current.pause();
  }

 }


  return (
    <div>
      <video src={state}  ref={videoRef} autoPlay></video>
      <button onClick={HandleVideoControls}>{toggle?"Play":"Pause"}</button>
    </div>
  )
}

export default Player