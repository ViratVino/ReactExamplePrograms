import React, { useCallback, useEffect, useMemo, useState } from 'react'

const CallbackExample = () => {
    let [state,setState]=useState(0);
    // let updatestate=()=>(useMemo(()=>{
    //      window.localStorage.setItem("cart-to",state);
    // },[state]))


    let updatestate=useCallback(()=>window.localStorage.setItem("cart-to",state),[state]);


    useEffect(()=>{
        console.log(updatestate);
        updatestate();
        console.log(state);
    },[state,updatestate])
  return (
    <div>
        <h1>Your Cart is : {state}</h1>
        <button onClick={()=>setState(state+1)}>Increment</button>
    </div>
  )
}

export default CallbackExample