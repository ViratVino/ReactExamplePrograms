  // import React,{useRef} from 'react'


  // //uncontrolled Component
  // //react ref
  // // for The elements have to add ref attribute



  // const App = () => {
  
  //   let emailRef=useRef("");
  //   let passwordRef=useRef("");


  //   let handleSubmit=e=>{
  //     e.preventDefault();
  //     let email=emailRef.current.value;
  //     let password=emailRef.current.value;
  //     console.log(email,password);

  //   }


  //   return (
  //     <section id="form">
  //       <article>
  //         <h2>login</h2>
  //         <form >
  //           <div className="form-group">
  //             <label htmlFor="email">email</label>
  //             <input type="email" placeholder='email' id="email"  ref={emailRef}/>
  //           </div>
  //           <div className="form-group">
  //             <label htmlFor="password">password</label>
  //             <input type="password" placeholder='password' id="password" ref={passwordRef} />
  //           </div>
  //           <div className="form-group">
  //             <button onClick={handleSubmit}>Login</button>
  //           </div>
  //         </form>
  //       </article>
  //     </section>
  //   )
  // }

  // export default App











//   import React from 'react'
//   import { useState } from 'react';
// //Controlled Component
//   //Initialize the State Object
// // add Value Attribute to the input of form element
// //state mutation or state updation // add chage event to the element

  
//   const App = () => {
// let [email,setEmail]=useState("");
// let[password,setPassword]=useState("");

// let Handle=(e)=>{
// e.preventDefault();
// console.log(email,password);

// }

//     return (
//       <div>
//          <h2>login</h2>

//        <form  onSubmit={Handle}>
//        <input type="email" placeholder='email' id="email "  value={email}   onChange={(e)=>setEmail(e.target.value)}/>
//        <input type="password" placeholder='password' id="password" value={password}  onChange={(e)=>setPassword(e.target.value)}  />
//        <button>Login</button>
//   </form>
//       </div>
//     )
//   }
  
//   export default App















// import React,{useState} from 'react';

// const App = () => {
//   let [state,setState]=useState({
//     email:"",
//     password:"",
//     loading:false

//   });

//   let handleChange=(e)=>{
//     let{name,value}=e.target;
//     setState({...state,[name]:value})

//   }

//   let handleSubmit=e=>{
//     e.preventDefault();
//     console.log({email,password});
//   }

//   let x={name:"Vinoth Kumar"};
//   let y={company:"Test Yantra"};

//   // let mergeTheValues={x,y};
//   // let mergeTheValues=Object.assign(x,y);
//   let mergeTheValues={...x,...y}

//   console.log(mergeTheValues);



//   let {email,password,loading}=state;
//   return (
//     <div>
//       <h1>Login</h1>
//       <form  onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">email</label>
//           <input type="email"  id="email" name='email' placeholder='email' value={email} onChange={handleChange}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">password</label>
//           <input type="password" name='password' placeholder='password' id='password'  value={password} onChange={handleChange}/>
//           </div>
//         <div className="form-group">
         
//         <button>{loading?"Loading...":"Submit"}</button>
//           </div>
//       </form>

//     </div>
//   )
// }

// export default App






// handle text Are


import React, { Fragment } from 'react'
import { useState } from 'react';
import COUNTRY from "./country.json";

const App = () => {
  let [state,setState]=useState({
    tittle:"",
    comment:"",
    gender:"",
    // skills:"",
    js_lib:"",
    loading:false,
    country:"",
    price_range:0

  })








  let {tittle,comment,loading,gender,js_lib,country,price_range}=state;
  // console.log(!tittle);



let[skills,setSkills]=useState("");
let handleChane=(e)=>{
 
  let{name,value}=e.target;
  console.log(e.target);
  console.log(loading);
  console.log(value);
  setState({...state,[name]:value,loading:true})
}


// let handleCountryChange=(e)=>{
 
//   let{name,value}=e.target;
  
//   setCountries()
// }

let [countries,setCountries]=useState(COUNTRY)

let handleSubmit=(e)=>{
console.log({...state,skills,countries});
 e.preventDefault();
 try{

  setState({loading:false,tittle:"",comment:""})
   
 }catch(error){
  console.log(error);

 }
}


let handleCheckBox=(e)=>{
  let {value}=e.target;
 if(e.target.checked){
  setSkills(oldChange=>{
    return [...oldChange,value];
  }
  )
 }else{
  setSkills(oldChange=>{
    return oldChange;
  })
}

}

  return (
    <div className='container'>
      <form action="" onSubmit={handleSubmit}>
      <div className="form-group" name="gender" value={gender} onChange={handleChane}>
        <label htmlFor="gender">Select Gender</label>
        <input type="radio" name='gender' id='gender' value="Male"  /> Male
        <input type="radio" name='gender' id='gender' value="Fe Male"  /> FeMale
        <input type="radio" name='gender' id='gender' value="Others"  /> Others
      </div>

      <div className="form-group" >
        <label htmlFor="Choose Java Script Libraries">Choose Java Script Libraries</label>
        <select name="js_lib" id="js_lib" value={js_lib}   onChange={handleChane}>
          <option value="react">React</option>
          <option value="momentjs">Moment js</option>
          <option value="jquery">Jquery</option>
        </select>
      </div>


      {/* Price Range */}

     <div className="form-group">
      <label htmlFor="price_range">Price Range</label>
      <span>{price_range.length>0 && price_range}</span>
      <input type="range" name='price_range' min={0} max={100} value={price_range} onChange={handleChane} />
     </div>


      {/* Country Block */}
      <div className="form-group">
        <label htmlFor="countries">Select Countries</label>
        <select name="country" id="countries" onChange={handleChane} value={country}>
          {
            countries.map((country)=>{
              return <Fragment key={country.code}>
                <option value={country.code}>
                 <Fragment>
                 <span><picture>
                  <img src={country.flag} alt={country.code} />
                  </picture></span>
                  <span>
                  {country.country}
                  </span>
                 </Fragment>
                </option>
              </Fragment>
            })
          }
        </select>
        </div>


      
      <div className="form-group" onChange={handleCheckBox} name="skills" value={skills} >
        <label htmlFor="Skills">Select Skills</label>
        <input type="checkbox" name='skills' id='skills' value="Java Script" />JavaScript
        <input type="checkbox" name='skills' id='skills' value="Java" />Java
        <input type="checkbox" name='skills' id='skills' value="Node Js" />Node Js
        <input type="checkbox" name='skills' id='skills' value="React Js" />React js
      </div>
      <div className="form-group" >
        <label htmlFor="title">Title</label>
        <input type="text" name='tittle' id='title' placeholder='title' value={tittle}  onChange={handleChane}/> 
      </div>
      <div className="form-group">
        <label htmlFor="comment">Write Your Comments</label>
        <textarea name="comment" id="comment" cols="30" rows="10" value={comment}  onChange={handleChane}></textarea>
        
      </div>
      <div className="form-group">
        {/* <button disabled={tittle==="" && comment===""?true:false}>{loading?"Submit":"Loading"}</button> */}
        <button disabled={!tittle && !comment?true:false}>{loading?"Submit":"Loading"}</button>
      </div>
      </form>
    </div>
  )
}

export default App