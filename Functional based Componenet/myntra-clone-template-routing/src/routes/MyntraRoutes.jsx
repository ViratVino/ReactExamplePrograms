import { createBrowserRouter } from "react-router-dom";
import MyntraLayout from "../pages/Root/MyntraLayout";
import Home from "../pages/Home";
import CategoryContainer from './../components/products/category/CategoryContainer';

export const router=createBrowserRouter([
    {
        path:"/",
        element:<MyntraLayout/>,
        children:[{
            path:"/",
            element:<Home/>
        },
        {
            path:"/shop/:category",
            element:<CategoryContainer/>
        }
    
    
    ]

    }
])