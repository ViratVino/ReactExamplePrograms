// import React, {useState} from 'react'
// import ClassBasedComp from './assets/components/ClassBasedComp';
// import EffectHookExample from './assets/hooks/EffectHookExample';

// const  App =()=> {

//   let [count,setCount]=useState(0);

//     return (
//       <div>
//         <ClassBasedComp></ClassBasedComp>
//         <hr />
//          {count<5 && <EffectHookExample count={{count,setCount}}></EffectHookExample>}
//       </div>
//     )
//   }


//   export default App;







// import React, { useEffect, useState } from 'react'

// const App = () => {
  
//   let[width,setWidth]=useState(window.innerWidth);




// const updateWidth=()=>{
//      setWidth(window.innerWidth);
// };

//   useEffect(()=>{
//     // console.log(width);

//     window.addEventListener("resize",updateWidth);
    
//     //remove event listner
//     // clean up function
//     return()=>{
//     window.addEventListener("resize",updateWidth);
//     };
   

//   },[width]);


//   useEffect(()=>{
//    if(width > 600){
//     window.document.body.style.background="green";
//    }else{
//     window.document.body.style.background="red";
//    }
//   },[width])


  
//   return (
//     <div>App</div>
//   )
// }


// export default App









import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
let [products,setProducts]=useState(null);
let fetchProducts=async()=>{
  // let data=await window.fetch("https://api.escuelajs.co/api/v1/products");
  // let finalProduct=await data.json();
  // setProducts(finalProduct);
  let {data}=await axios.get("https://api.escuelajs.co/api/v1/products");
  console.log(data);
  setProducts(data);
};


useEffect(()=>{
  fetchProducts();
},[])

  return (
    <div>
      {
        products===null?"Loading....":products.map(val=>{
          return(
            <Fragment>
              <img src={val.images} alt={val.title} />
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default App