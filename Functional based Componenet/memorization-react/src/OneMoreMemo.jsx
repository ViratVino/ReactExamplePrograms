// import React, { useMemo, useState } from 'react';
// const initialItem=new Array(29999999).fill(0).map((val,i)=>{
//   return{
//     id:i,
//     isSelected:i===29_999_999,
//   }
// })

// console.log(initialItem);

// const OneMoreMemo = () => {
  
//     let [count,setCount]=useState(0);
//     let [items,SetItems]=useState(initialItem);
//     const SelectedItem=useMemo(()=>{ items.find(item=>item.id===count)},[]);
//     console.log(SelectedItem);
//   return (
//     <div>
//       <h1>Use Memo Example</h1>
//       <h1>{count}</h1>
//       <hr />
//       <h2>{SelectedItem?.id}</h2>
//            <hr />
//            <button onClick={()=>setCount((prevVal)=>prevVal+1)}>Increment</button>
//     </div>
//   )
// }

// export default OneMoreMemo