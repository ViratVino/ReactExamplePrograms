import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layouts = () => {
  const users=[
    {
      id:1,
      name:"Vinoth",
      company:"fireFlink"
    },
      {
      id:2,
      name:"Lavanya",
      company:"Axess Texhnology"
    },
      {
      id:3,
      name:"Nisha",
      company:"House"
    },
  ]
  return (
    
      <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/users">
                {
                  users.map(user=>{
                    return(
                      <Fragment key={user.id}>
                       <li>
                        <Link to={`/${user.name}`} key={user.id}>{user.name}</Link>
                       </li>
                      

                      </Fragment>
                    )
                  })
                }
              </Link>
            </li>
 
        </ul>
        <hr />
        {<Outlet/>}
      </div>
  )
}

export default Layouts