// import React, { Fragment, useState } from 'react'
// import Navbar from './assets/components/auth/navbar/Navbar';

import { Fragment, useState } from "react"
// import Products from "./assets/components/products/products";
import Products from "./assets/components/products/products";

// const App = () => {
// let[displayText,setDisplayText]=useState(false);
// let[isLoggedIn,isSetLoggedIn]=useState(false);


// // if(displayText){
// //   return (
// //     <div>
// //       <Fragment>
// //         <h1>Welcome To FireFlink Scriptless Automation Tool</h1>
// //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo beatae necessitatibus qui sunt doloremque distinctio quaerat placeat iste omnis asperiores ullam temporibus adipisci consequuntur eos voluptatem saepe veniam, quis corrupti?</p>
// //       </Fragment>
// //     </div>
// //   )
// // }
// // else{
// //   return(<Fragment><h1>No data Found...</h1></Fragment>)
// // }

// return(<Navbar data={{isLoggedIn,isSetLoggedIn}}></Navbar>)

// }
// export default App








// import DATA from "./data.json"
// const App=()=>{


//     let list=[
//     //     {
//     //     id: 2,
//     // title: "Mens Casual Premium Slim Fit T-Shirts ",
//     // price: 22.3,
//     // description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     // category: "men's clothing",
//     // image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     // rating: {
//     // rate: 4.1,
//     // count: 259
//     // }}
// ]

//     let [state,setState]=useState(DATA);
//     // let [state,setState]=useState(list);
// return<section id="productsBlock" >
//         <article className="container">
//             <Products data={state}/>
//         </article>

//     </section>
// }

// export default App







// import React from 'react'

// const App = () => {
//     const[mode,setMode]=useState("c");
//     const[color,setColor]=useState("red");
//     switch(mode,color){
//         case 'a' && "red" :
//             return<h1 style={{color}}>You are selected A</h1>;
//         case 'b' && "green":
//             return<h1 style={{color}}>You are selected B</h1>;
//         case 'c' && "Yellow":
//             return<h1 style={{color}}>You are selected c</h1>;
//         default:
//             return<h1>No mode is selected here...</h1>;
        
//        }
  
// }

// export default App






// import React from 'react'
// import Users from "./assets/components/Users";

// const App = () => {
// let[state,setState]=useState([
//     {
//         name:"Nisha",
//         age:20,
//         company:"qsp",
//         salary:"30000",
//         role:"user"
//     },
//     {
//         name:"Vinoth",
//         age:26,
//         company:"fire Flink",
//         salary:"30000",
//         role:"admin"
//     },
// ])

//   return (
//     <div><Users state={state}></Users></div>
//   )
// }

// export default App













// import React from 'react';
// import Notification from "./assets/components/messages]/Notification";

// const App = () => {
  
//     let[state,setState]=useState([{
//         text:"Hi Vinoth You  are learning About react Router dom soon....",
//         status:"info",

//     },{
//         text:"Warning Text",
//         status:"warning",

//     },
//     {
//         text:"Error Text",
//         status:"error",

//     },
    
// ])

//   return (
//     <div>
//         <Notification state={state}/>
//     </div>
//   )
// }

// export default App




//Short Circuit And Operator



// import React from 'react';
// let data=["dixith is teaching java","Shashi is teaching React Js" ]

// const App = () => {
//     let [message,Setmessage]=useState(data);
//   return (
//     <div>
//         <div>
//             Notiifications{message.length>0 && <sup>{message.length}</sup>}
//         </div>
//     </div>
//   )
// }

// export default App







import React from 'react'

const App = () => {
  let[data,setData]=useState(null);
    (async function(){
        let res=await window.fetch("https://api.github.com/users");
        console.log(res);
        let finalVal=await res.json();
        console.log(finalVal);


        setData(finalVal);
    })()
  return (
    <div>
      {
        data===null?"Loading":data.map(user=>{
          return(
            <Fragment key={user.div}>
              <li>{user.login}</li>                
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default App