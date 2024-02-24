import { NavLink, Outlet } from "react-router-dom";
import AllUsers from "./AllUsers";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>DASHBOARD</h1>
      {/* <AllUsers/> */}

      <main className="dashboard-content">
        <ul>
          <li>
            <NavLink
              to="/all-users"
              state={{ name: "Vinoth", age: 23 }}
              className={({isActive}) => (isActive===true ? "active" : "")}
            >
              Users
            </NavLink>
            {/* <Link to="/products" state={{name:"Nisha",age:22}}>Products</Link> */}
            <NavLink
              to="/"
              state={{ name: "Nisha", age: 22 }}
              className={({isActive}) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </main>
      <Outlet />
    </div>
  );
};

export default Dashboard;
