import React from 'react'
import Root from './components/Root';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Home from './pages/Home';
import Dashboard from './components/users/Dashboard';
import AllUsers from './components/users/AllUsers';
import Profile from './components/users/Profile';
import Products from './components/products/Products';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    children:[
     
      {
        path:"/",
        element:<Dashboard/>,
        children:[
          {
            path:"all-users",
            // index:true,
            element:<AllUsers/>,
            // children:[{
            //   path: ":profile",
            //   element:<Profile/>
            
            // }]
          },
          {
            // path:"/products",
            index:true,
            element:<Products/>
          },
          {
            path: "/all-users/:id",
           element:<Profile/>
          }
        ]
      },
    ]
  }
])

const App = () => {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App