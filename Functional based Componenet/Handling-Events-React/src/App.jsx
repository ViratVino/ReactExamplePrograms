// import React from 'react'

import { render } from "react-dom";

// const App = () => {
//   const handle=()=>{
//     alert("Hello React Events");
//   };

//   let handleSubmit=(e)=>{
//     console.log(e);
//     e.preventDefault();
//     console.log("Hello react");
//   }
//   return (
    
//     // <div><h1>vinoth</h1>
//     // <button >Click</button>
//     // </div>

//     <div>
      
//     <form  onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter Your Name"></input>
//         <button>Submit</button>
//     </form>
//     </div>
//   )
// }

// export default App


// import React, { Component } from 'react'

// export default class App extends Component {
//  constructor(){
//   super();
//   this.state={
//     count:0,
//   }
//   console.log(this +"this keyword coming from constructor");
//   // console.log(this);
//   this.Increment=this.Increment.bind(this); 
//  }

//  Increment(){
//   console.log(this);
//   this.setState({count:this.state.count+1});
//  }

//  Decrement=()=>{
//   this.setState({count:this.state.count-1})
//  }


//   render() {
//     console.log(this +"This Keyword Coming From Render Method");
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>Increment</button>
//         <button onClick={()=>{
//           this.setState({count:this.state.count+1})
//         }}>Increment with Inline arrow Function</button>
//         <button  onClick={this.Decrement}>Decrement With Arrow Function</button>
//         <button onClick={this.Increment.bind(this)}>Increment With Inline Bind</button>
//       </div>
//     )
//   }
// }


// import React from 'react'

// const App = () => {
  
//     let CustomEvent=()=>{
//         let yantra=new Event('yClick');
//         let body=document.body;
//         body.addEventListener("yClick",e=>{
//             e.target.style.background="red";
//             console.log(e.target);
//         })

//         body.dispatchEvent(yantra);


//     }


//   return (
//     <div>
//         <h1>Custom Event In React</h1>
//         <button onClick={CustomEvent}>Trigger Custom Event</button>
//     </div>
//   )
// }

// export default App











// On Mouse Enter And On Mouse Leave

// import React, { useState } from 'react';


// const App = () => {
//     let[show,setShow]=useState(false);
//   return (
//     <div>
//         <button onMouseEnter={()=>setShow(true)} 
//         onMouseLeave={()=>setShow(false)}>Hover On me You will Get Something...</button>
      
//             {show && <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum explicabo obcaecati voluptas dolor ducimus eius doloremque ea aliquam, facere consequatur excepturi voluptatum. Nihil ipsa, architecto quaerat veritatis incidunt aliquam culpa?</h6>}
        
//     </div>
//   )
// }

// export default App





//On Mose Over

// const App=()=>{
//     let ChangeBgColor= e =>{
//      console.log(e);
//      e.target.style.background="purple";
//      e.target.style.width="70%"
//      e.target.style.padding="10px"
//      e.target.style.innerHtml="QSP"
//      e.target.style.color="white";
//     }

//       let orginalBgColor= e =>{
//         console.log(e);
//         e.target.style.background="white";
//         e.target.style.width="inherit"
//         e.target.style.padding="0px"
//         e.target.style.innerHtml="QSP"
//         e.target.style.color="red";
//        }


//     return(
//         <div>
//             <button onMouseOver={ChangeBgColor} onMouseLeave={orginalBgColor}>Hover Me</button>
//         </div>
//     )

// }

// export default App;




//Muliple Click

import React from 'react'

const App = () => {

let Show=()=>{
    console.log("i am Show");
}

let showOneMoreTime=()=>{
    console.log("One More Time Show");
}

let showTyLogo=()=>{
    console.log("LOGO");
}

let showMenu=()=>{
    console.log("Show Menu");
}


  return (
    <div>
        <button onClick={()=>{showMenu(),Show(),showTyLogo(),showOneMoreTime()}}>
            MulipleClick
        </button>
    </div>
  )
}

export default App