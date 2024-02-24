
// import { useRef, useState } from "react";
// import VIDEO from "./video.mp4";

// const Video = () => {
//     let[play,setPlay]=useState(true);
//     let[content,setContent]=useState("play");
//     let videoRef=useRef();
//     // console.log(play());
//     let playOrPause=()=>{
//         setPlay(!play);//toggle
//         if(play===true){
//             // console.log(videoRef.current.play());
//             videoRef.current.play();
//         }else{
//             videoRef.current.pause();
//         }
//     }
   
//   return (
//     <section id="videoBlock">
//         <article>
//             <video src={VIDEO} controls ref={videoRef}></video>
//             <button onClick={playOrPause}>{play?"play":"pause"}</button>
          
//         </article>
//     </section>
//   )
// }

// export default Video




import React from 'react'

const Video = () => {
  return (
    <div>Video</div>
  )
}

export default Video