// import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
// import Login from './components/auth/Login';

// import Home from './components/pages/Home';
// import Register from './components/auth/Register';
// import Users from './components/profiles/Users';
// import NotFound from './components/pages/NotFound';


// // window.history.pushState({name:"Virat Vino"},"Push State Example");
// // console.log(window.history.state);

// // document.write(history.state.name);

// // window.history.replaceState({name:"vinoLav"},"Replace State");
// // console.log(history.state.name);


// // window.addEventListener("popstate",e=>{
// //     console.log(e);
// // })




// const App = () => {
//   return (
//     <BrowserRouter>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/register">Register</Link></li>
//         <li><Link to="/users">User</Link></li>
//       </ul>

//     <Routes>
//           <Route path="/" element={<Home/>}/>
//         <Route path="/login"  element={<Login/>}/>
//         <Route path="/register"  element={<Register/>}/>
//         <Route path="/users"  element={<Users/>}/>
//         <Route path="*" element={<NotFound/>}/>
//     </Routes>
    
//     </BrowserRouter>
//   )
// }

// export default App








               // version 6.14 







// import { createBrowserRouter,RouterProvider,Route,Link } from "react-router-dom"
// import Home from './components/pages/Home';
// import Login from './components/auth/Login';
// import Users from './components/profiles/Users';
// import Register from './components/auth/Register';
// import Layouts from "./layouts/Layouts";
// import NotFound from "./components/pages/NotFound";


// const router=createBrowserRouter([

//   {
//     path:"/",
//     element:<Layouts/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/login",
//         element:<Login/>
//       },
//       {
//         path:"/users",
//         element:<Users/>
//       },
//       {
//         path:"/register",
//         element:<Register/>
//       },
//       {
//         path:"*",
//         element:<NotFound/>
//       },
      
//     ]

//   }

// ]);
 
//  const App = () => {
//    return (
//      <RouterProvider router={router}></RouterProvider>
//    )
//  }
 
//  export default App






// import {createBrowserRouter,Route,Routes,RouterProvider,createRoutesFromElements} from 'react-router-dom'
// import Layouts from './layouts/Layouts'
// import Home from './components/pages/Home';
// import Login from './components/auth/Login';
// import Users from './components/profiles/Users';
// import NotFound from './components/pages/NotFound';
// import Register from './components/auth/Register';

// const router=createBrowserRouter(createRoutesFromElements(
// <Route path='/' element={<Layouts/>}>
// <Route path="/" element={<Home/>}/>
// <Route path="/login" element={<Login/>}/>
// <Route path="/users" element={<Users/>}/>
// <Route path="/register" element={<Register/>}/>
// <Route path="*" element={<NotFound/>}/>

// </Route> 

// ))

// const App = () => {
//   return (
//     <RouterProvider router={router}>App</RouterProvider>
//   )
// }

// export default App













// import { BrowserRouter as Router,Routes } from "react-router-dom";
// import CustomRoutes from "./routes/CustomRoutes";

// import React from 'react'
// import Navbar from "./components/navbar/Navbar";

// const App = () => {
//   return (
//    <Router>
      
//       <Navbar/>
//        <hr />
//       <CustomRoutes/>
    
//    </Router>
//   )
// }

// export default App












// import { RouterProvider } from "react-router-dom"
// import { router } from "./routes/NewRouteConfig"
// const App = () => {
//   return (
//     <RouterProvider router={router}></RouterProvider>
//   )
// }

// export default App







import Layouts from './layouts/Layouts'
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Users from './components/profiles/Users';
import NotFound from './components/pages/NotFound';
import Register from './components/auth/Register';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

let router=createBrowserRouter([

  {
        path:"/",
        element:<Layouts/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:":name",
            element:<Users/>
          },
          {
            path:"/register",
            element:<Register/>
          },
          {
            path:"*",
            element:<NotFound/>
          },
          
        ]
    
      }
    

])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  
  )
}

export default App

