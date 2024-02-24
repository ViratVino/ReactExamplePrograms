import { Outlet } from "react-router-dom"
import NavbarContainer from "./navbar/NavbarContainer";
import { Toaster } from "react-hot-toast";
const Layout = () => {
  return (
    <section id="main-block">
        <article className="container">
            <NavbarContainer/>
            
            <Toaster/>
            <Outlet/>
        </article>
    </section>
  )
}

export default Layout