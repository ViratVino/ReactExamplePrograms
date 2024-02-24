// import React from 'react'
// import Button from './components/Button'

// const App = () => {
//   return (
//     <div>
//         <button onClick={()=>alert("Hello Vinoth")}>Click me</button>
//         <Button onTest={()=>alert("Hello naming event handler")}>Audio</Button>
//         <Button onTest={()=>alert("Hello naming event handler props")}>Video</Button>
//     </div>
//   )
// }

// export default App






// import React from 'react'

// const App = () => {
//   return (
//     <section onClickCapture={(e)=>{
//         // e.stopPropagation();
//         console.log("Grand Parent Block Triggered");}} className='section'>
//         GrandParent
//         <div onClickCapture={(e)=>{
//             // e.stopPropagation();
//             console.log("Parent Block Triggered");}} className='div'>
//             Parent
//               <button onClick={(e)=>{
//                 // e.stopPropagation();
//                 console.log("Child Block Triggered");}} className='btn'>
//                 Child
//               </button>
//         </div>
       
//     </section>
//   )
// }

// export default App









// keyBord Event

import React, { useState } from 'react';

const App = () => {
    let handle=(e)=>{
        //   console.log(e);
        
        
        // if(e.key ==="Enter"){
        //     console.log(`You Have been Pressed  ${e.key} key`);
        // }
        
        
        // if(e.keyCode==13){
        //     console.log(`You are Entered The Key Code is ${e.keyCode}`);
        // } 
        
        
        if(e.key==="v"){
          setVal(e.key+ " You Pressed it")
        }else if(e.key==="n"){
            setVal(`${e.key}  is You Entered`)
        }else{
            setVal(`${e.key}  is You Entered`)
        }
        
        }


    let[val,setVal]=useState("");
  return (
    <div>
        <h1>{val}</h1>
        <input type="text" name="type AnyThing " id=""  
        value={val}
        // onKeyPress={handle}
        // onKeyDown={handle}
        onKeyUp={handle}
        
        
        
        />
    </div>
  )
}

export default App