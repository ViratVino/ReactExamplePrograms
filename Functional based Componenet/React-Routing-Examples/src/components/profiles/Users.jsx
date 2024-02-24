import React from 'react'
import { Outlet ,useLocation,useParams} from 'react-router-dom';


const Users = () => {
  let location=useLocation();
  let value=useParams();
console.log(location);

  return (
    <div>{Outlet} </div>
  )
}

export default Users