import { Fragment, useState } from "react";
import User from "../../data.json";
import { useLocation,Link, Outlet } from "react-router-dom";

const AllUsers = () => {


  let [state,setState]=useState(User);
  let Location=useLocation();
  console.log(Location.state);
  
  return (


    <main>
      {/* <h1>
       {
        Location.state.name
       }
      </h1> */}
       {/* <Outlet/> */}
    <div className="users">
      
      {
        state.map.length>0 && state.map(user=>{
        
          return(
          <Fragment key={user.id}>
            <div className="container">
              <figure>
                <picture>
                 
                  <img src={user.avatar_url} alt={user.login} height={150} width={150}/>
                </picture>
                {/* <Link to={`/all-users/${user.id}` }  state={user} >View More</Link> */}
                <Link to={`/all-users/${user.id}`}   state={user} >View More</Link>

              </figure>

            </div>

          </Fragment>
          )
        })
      }
    </div>
    </main>
    
  )
}

export default AllUsers