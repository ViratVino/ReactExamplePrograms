// import React from 'react'

// const Count = ({count:{count,Increment}}) => {
//   return (
//     <div>
//         {console.log("I am Child Component")}
//         <h1>Hi i Iam Child Component <strong  style={{color:"red"}}>{count}</strong></h1>
//         <button onClick={Increment}>Increment</button>
//     </div>
//   )
// }

// export default React.memo(Count);





import React from 'react'

const Count = ({name}) => {
  return (
    <div>
        {console.log("check Child Component is Re rendered or not")}
        <h1>{name}</h1>
    </div>
  )
}

export const MemorizedComp=React.memo(Count);