// // import React, { useCallback, useMemo, useState } from 'react'
// // import Count from './Count'

// // const App = () => {
  

// //    let [state,setState]=useState({
// //     count:0,
// //    });

// //     let Increment=useCallback(()=>{
// //         setState({count:state.count+1});
    
// //     },[state.count])
// //     let {count}=state;
    
// //   return (
// //     <div>
// //         <h1 >I AM PARENT COMPONENT <strong style={{color:"green"}}>{count}</strong></h1>
// //          <button onClick={Increment}>Increment</button>
// //         <hr />

// //         <Count  count={{count,Increment}}/>
// //     </div>
// //   )
// // }

// // export default App;





// import React, { useState } from 'react'
// // import Count, { MemorizedComp } from './Count'
// import MemoExample from './MemoExample';

// const App = () => {
//     const[name,setName]=useState("");
//     const [address,setAddress]=useState("");

//   return (
//     <div>
//         <h1>Parent Component</h1>
//         <label htmlFor="">
//             Name:
//         </label>
//         <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='name'/>

//         <label htmlFor="">
//             Name:
//         </label>
//         <input type="text" value={address} onChange={e=>setAddress(e.target.value)} placeholder='address'/>
//         <hr />
//         {/* <MemorizedComp name={name}/> */}
//         <MemoExample/>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// // import OneMoreMemo from './OneMoreMemo'
// import CallbackExample from './CallbackExample'

// const App = () => {
//   return (
//     // <div><OneMoreMemo></OneMoreMemo></div>
     
//     <>
//     <h1>Parent Component</h1>
//     <CallbackExample/>
//     </>
    
//   )
// }

// export default App



// import React from 'react'
// import MyComponent from './MyComponent'

// export const App = () => {
//   return (
//     <div>
//       <MyComponent/>
//     </div>
//   )
// }






import React from 'react'
import Login from './Login';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <button>Login</button>
    </div>
  )
}

export default App