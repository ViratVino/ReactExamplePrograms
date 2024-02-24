import { Fragment } from "react"
import NavbarContainer from "../../components/headers/Container"
import { Outlet } from "react-router-dom"


const MyntraLayout = () => {
  return (
    <Fragment>
        <NavbarContainer/>  {/* -------static components composition in layouts component */}
        <hr />
        <Outlet/>   {/* =========Dynamic route Based on the URL======== */}
     
    </Fragment>
  )
}

export default MyntraLayout