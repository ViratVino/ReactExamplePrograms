
// import './App.css';
// import { lazy,Suspense, useState} from 'react';


// function App() {
//   // const Login=lazy(()=>import("./Login.jsx"));

//   const Login=lazy(()=>delayforDemo(import("./Login.jsx")));
//   const Profile=lazy(()=>delayforDemo(import("./Profile.jsx")));


//   function delayforDemo(promise){
//     return new Promise((resolve,reject)=>{
//       setTimeout(resolve,5000);
//     }).then(()=>promise)
//   }

//   let [isAuth,SetAuth]=useState(true);


//   return (
//     <div className="App">
//       <header className="App-header">
//        {/* <button>Load Login Component</button> */}
//       {
//         isAuth? <Suspense fallback={<h1>Loading...</h1>}>
//         <Login/>
//        </Suspense>: <Suspense fallback={<h1>Loading...</h1>}>
//         <Profile/>
//        </Suspense>
//       }
//       </header>
//     </div>
//   );
// }

// export default App;




import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <div>
      <Form></Form>
    </div>
  )
}

export default App