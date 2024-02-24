// import React from 'react'

// const Navbar = (probs) => {
  
//   console.log(probs);
 
//   let {isLoggedIn,isSetLoggedIn}=probs.data;

//   let IsAuthendicated=()=>{};
//   let IsAnonymousUser=()=>{};


//   let changeState=()=>{
//     isSetLoggedIn(false);
//   }



//   if(isLoggedIn===false){
//     return <section id='navbar'>
//     <article className='container'>
//         <div className="logoBlock">Logo</div>
//         <div className="menuBlock">
//             <ul>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">Service</a></li>
//                 <li><a href="">Login</a></li>
//                 <li><a href="">Register</a></li>
//                 {/* <li><a href="">LogOut</a></li> */}
//             </ul>
//         </div>
//     </article>
//   </section>

//   }else{
//     return <section id='navbar'>
//     <article className='container'>
//         <div className="logoBlock">Logo</div>
//         <div className="menuBlock">
//             <ul>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">Service</a></li>
//                 {/* <li><a href="">Login</a></li>
//                 <li><a href="">Register</a></li> */}
//                 <li><button href="" onClick={changeState}>LogOut</button></li>
//             </ul>
//         </div>
//     </article>
//   </section>
//   }




//   // return <section id='navbar'>
//   //   <article className='container'>
//   //       <div className="logoBlock">Logo</div>
//   //       <div className="menuBlock">
//   //           <ul>
//   //               <li><a href="">Home</a></li>
//   //               <li><a href="">Service</a></li>
//   //               <li><a href="">Login</a></li>
//   //               <li><a href="">Register</a></li>
//   //               <li><a href="">LogOut</a></li>
//   //           </ul>
//   //       </div>
//   //   </article>
//   // </section>
// }

// export default Navbar



import React, { Fragment } from 'react'

const Navbar = ({data:{isLoggedIn,isSetLoggedIn}}) => {
  
  const IsAuthendicated =()=>{

  return (
    <Fragment>
       <button>LogOut</button>
      </Fragment>
  );
};

const IsAnonymousUser =()=>{
  return(
    <Fragment>
      <li><a href="">Login</a></li>
      <li><a href="">Register</a></li>
    </Fragment>
  )
 
}


return(
  <section id="navbar">
    <articl className="container">
      <div className="logoBlock">LOGO</div>
      <div className="MenuBlock">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          {
            isLoggedIn===true?<IsAuthendicated></IsAuthendicated>:<IsAnonymousUser></IsAnonymousUser>
          }
        </ul>
      </div>
    </articl>
  </section>
)



}

export default Navbar