
// import { UseAllUsers } from "../../context/UserContext";
import Spinner from "../../pages/spinner/Spinner";
import useFetchUser from "../hooks/UserHook";
import { UseAllUsers } from "../../context/UserContext";
import { Link } from "react-router-dom";

const AllUsers = () => {

    //   let {users}=UseAllUsers();
    // let {isLoading}=users
    let {users:{users,isLoading}}=useFetchUser();
   
      
      // console.log(isLoading);
    return (
    <div>
       <>

       { isLoading===true?<Spinner/>:(
       <section className="userBlock">
        <article className="container">
          <header>
            <h2 className="allUser">Users</h2>
            </header>
           <main>
             <table>
              <thead>
              <tr>
                <th>photo</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
                {
                 users.data?.map(user=>{
                    return(
                      <tr key={user.id}>
                        <td>
                          <img src={user.avatar} alt={user.name}></img>
                        </td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td><Link to={`/users/${user.id}`} className="nav">view more</Link></td>

                      </tr>
                    )
                  })
                }
              </tbody>

             </table>
           </main>
        </article>
       </section>
       )}
       </>
    </div>
  )
}

export default AllUsers