import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from '../components/pages/Home';
import Login from '../components/auth/Login';
import Users from '../components/profiles/Users';
import Register from '../components/auth/Register';
import NotFound from "../components/pages/NotFound";


export const router = createBrowserRouter([
    {
        path:'/',
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
                path:"/users",
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