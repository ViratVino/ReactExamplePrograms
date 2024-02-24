import { Outlet } from "react-router-dom"
import NavbarContainer from "../pages/sidenavbar/NavbarContainer"
import Dashboard from "./users/Dashboard"

const Root = () => {
  return (
    <section id="dashboard">
     <article className="container">
        <article className="sidebar"><NavbarContainer/></article>
        <article className="content">
          <Outlet/>
          
        </article>
     </article>

    </section>
  )
}

export default Root