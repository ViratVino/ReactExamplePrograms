// import React, { useMemo, useState } from 'react'


// let factorial=n=>{
//     let fact=1;
//     while(n>1){
     
//         fact+=fact*n;
//        n--; 
//     }
    
//     return fact;


//     }

 


// const MemoExample = () => {
//     let[count,setCount]=useState(1);
//     const[name,setName]=useState("");

//     // use Memo Example
//     let result=useMemo(()=> factorial(count),[count]);
//   return (
//     <div>
//         <h1>Memo Example</h1>
//         <strong>Please Check the value {count} along with facrorial value{result}</strong>
//         <hr />
//         <button onClick={()=>setCount(count+1)}>Increment</button>
//         <button onClick={()=>setCount(count-1)}>Decrement</button>
//         <button onClick={()=>{setCount(0)}}>reset</button>
//         <hr />
//         <input type="text" value={name} placeholder='EnterName'  onChange={e=>setName(e.target.value)}/>
//         <hr />
//         <MemorizedName name={name}></MemorizedName>


//     </div>
//   )
// }

// export default MemoExample


// const DisplayName=({name})=>{
//     return(
//       <>
//       {
//         console.log("child Component Triggered")
//       }
//       <h1>{name}</h1>
//       </>
//     )
// }


// let MemorizedName=React.memo(DisplayName);



