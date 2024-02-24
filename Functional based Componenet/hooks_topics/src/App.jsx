// import React from 'react';
// import { useState } from 'react';



// const App = () => {

//   (()=>{
//     (()=>{
//       console.log("Nested Function");
//       let [val,setVal]=useState("Virat Vino");
//       console.log(val);

//     })()
//   })()
//   let [count,setCount]=useState(0);
//   return (
//     <div>
//       <h1>
//         Hello
//       </h1>
//     </div>
//   )
// }

// export default App





import {useReducer} from 'react';
let initialState={
  // name:"vinoth",
  // company:"Fire Flink",
  // salary:10000

  count:0,
  name:"Vinoth"
}


let reducer=(state,action)=>{
  console.log(state);
  console.log(action);

  switch(action.type){
    case "NAME":
      return{
        name:"Virat Vino"
      }
    case "INCREMENT":
      return{
      count:state.count+1,
      }
    // break;
    case "DECREMENT":
      return{
      count:state.count-1,
    }
    case "RESET":
      return{
        count:0
      }
    default:
      return state;
  }
}

const App = () => {
  let[state,dispatch]=useReducer(reducer,initialState);
  console.log(state);
  return (
    <div>
          <h1>{state.count} with {state.name}</h1>
          <button onClick={()=>dispatch({type:"NAME"})}>Update Name</button>
          <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
          <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
          <button onClick={()=>dispatch({type:"RESET"})}> Reset</button>
    </div>

  )
}

export default App