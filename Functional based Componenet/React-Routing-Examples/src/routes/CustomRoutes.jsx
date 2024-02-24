import { useRoutes } from "react-router-dom";
import Home from '../components/pages/Home';
import Login from '../components/auth/Login';
import Users from '../components/profiles/Users';
import Register from '../components/auth/Register';

import NotFound from "../components/pages/NotFound";


const CustomRoutes = () => {
const element=useRoutes([
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

])

  return element
}

export default CustomRoutes