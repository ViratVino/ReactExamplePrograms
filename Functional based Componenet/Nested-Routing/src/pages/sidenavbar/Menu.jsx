import { Link ,NavLink} from "react-router-dom"
import Dashboard from './../../components/users/Dashboard';


const Menu = () => {
  return (
    <div className="sideMenu">
        <div className="logo">TestYantra</div>
        <div className="menu">
            <ul>
                <li>
                    <NavLink to="/" style={({isActive})=>({
                        background: isActive?"#361968":"",
                      
                    })}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/all-users" style={({isActive})=>({
                        background: isActive?"#361968":"",
                        borderBottom:isActive? "1px solid orange":"",
                    })}>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/" style={({isActive})=>({
                        background: isActive?"#361968":"",
                        borderBottom:isActive? "1px solid orange":"",
                    })}>Product</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu