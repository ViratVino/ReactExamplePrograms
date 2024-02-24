import React, { useEffect, useState } from 'react';
import { dbConnection } from '../../dbConnection';

const EffectHookExample = ({count:{count,setCount}}) => {
    // let [count,setCount]=useState(0);
    // let [count2,setCount2]=useState(0);



// // Component DidMount method in FBC
//     useEffect(()=>{
//         document.title=`this title coming from  useEffect  ${count}`;
//         console.log("Check it will be updated or not in fbc");
//       },[])



// // Component DidUpdate in FBC
//       useEffect(()=>{
//         document.title=`this title coming from  useEffect  ${count}`;
//         console.log("Check it will be updated or not in fbc");
//       },[count])



// component Will unMount feature in functional based component

useEffect(()=>{
dbConnection.connect();
return()=>{
 dbConnection.Disconnect()

}// componentwill unMount

},[])




  return (
    <div>
    <h2>Hook Based Component</h2>
    <h1>{count}</h1>
    {/* <h1>{count2}</h1> */}
    <button onClick={()=>{
        setCount((prev)=>prev+1)}}>Increment</button>
        {/* <button onClick={()=>{
        setCount2((prev)=>prev-1)}}>Decrement</button> */}

    </div>
    
  )
}

export default EffectHookExample