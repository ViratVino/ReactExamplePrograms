import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "./components/Home"
import GetUsers from "./components/GetUsers"

const router=createBrowserRouter([
  {
  path:"/",
  element:<Home></Home>
},
{
  path:"/users",
  element:<GetUsers/>,
  loader:async ()=>{
    let data=await window.fetch("https://api.github.com/users");
    let finalData=await data.json();
    console.log(finalData);
    return finalData;
  }
}
])


const App = () => {
  return (
    <RouterProvider router={router}>App</RouterProvider>
  )
}

export default App