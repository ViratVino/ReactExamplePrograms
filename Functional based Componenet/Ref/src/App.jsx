// import React, { createRef } from 'react'

// const App = () => {
// let uname=createRef();
// let pwd=createRef();


// let getDataFromForm=(e)=>{
//   e.preventDefault();
//   let username=uname.current.value;
//   let password=pwd.current.value;
//   console.log(username,password);
//   return <h1>{username}</h1>
// }

// let GetDataFromForm=(e)=>{
//   // // e.preventDefault();
//   // let username=uname.current.value;
//   // let password=pwd.current.value;
//   // console.log(username,password);
//   return <h1>Hello Virat</h1>
// }

//   return (
//    <form action="">
//     <input type="text"  placeholder='Enter your User Name' ref={uname}/>
//     <input type="password" placeholder='Enter Your Password' ref={pwd}/>
//     <button onClick={getDataFromForm}>Submit<GetDataFromForm></GetDataFromForm></button>
//    </form>
//   )
// }

// export default App







//? Use ref

// import React, { useRef } from 'react'

// const App = () => {
//   let inputRef=useRef();
//  let onchangeColor=()=>{
//   console.log("hello");
//     inputRef.current.placeholder="Enter SomeThing What Ever You Want";
//     inputRef.current.style.background="#efefef";
   
//   }
//   return (
//     <div>
//    <input type="text" ref={inputRef}  onClick={onchangeColor}/>
//    </div>
//   )
// }

// export default App




import React, { useState } from 'react';
import Video from './components/videos/Video';
import JSON from "./video.json"
import VideoContainer from './components/videoComp/VideoContainer';

const App = () => {
  let [state,setState]=useState(JSON);
  let [selectedVideo,setSelectedVideo]=useState(state[0].contenturl)
  console.log(state);
  let handleClick=(item)=>
  {
    return setSelectedVideo(item.contenturl)
  }
  return (
    <div>
        
            <VideoContainer state={state} selectedVideo={selectedVideo} handleClick={handleClick}/>
         
    </div>
  )
}

export default App