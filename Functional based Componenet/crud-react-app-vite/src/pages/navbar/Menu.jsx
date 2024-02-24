import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContextApi } from "../../context/AuthContext";



const Menu = () => {

  let {isAuth,Logout,current_user}=useContext(AuthContextApi);
  console.log(isAuth);
  const IsAuth=()=>{
    return(
      <Fragment>
          <li>
             <NavLink to={`/user/${current_user?.id}`}>{current_user?.name}</NavLink>
            </li>
         <li>
              <figure>
                <picture>
                  <img src={current_user?.avatar} alt={current_user?.name} className="avatar" />
                </picture>
              </figure>
            </li>
       
            <li>
              <button
               className="logout"
               onClick={()=>{Logout()}}
              >
                logout
              </button>
            </li>
      </Fragment>
    )
  }
  const IsAnonymousUser=()=>{
    return<Fragment>
       <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Register
              </NavLink>
            </li>
    </Fragment>
  }
  return (
    <section className="navbar">
      <article>
        <nav>
          <ul>
           
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
              {
                isAuth===undefined||null?<IsAnonymousUser/>:<IsAuth/>
              }
          </ul>
        </nav>
      </article>
    </section>
  );
};

export default Menu;
