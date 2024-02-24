import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchUser from "../hooks/UserHook";
import Moment from "moment";

const SingleUser = () => {
  let { fetchSingleUser, users } = useFetchUser();
  console.log(users.singleUser);

  let { id } = useParams();
  console.log(fetchSingleUser, id);
  // let {  email,avatar, createdAt, role,name} = singleUser;

  useEffect(() => {
    fetchSingleUser(id);
  }, []);


  // Single User present inside the User So We Need To destructuring it
  let {singleUser}=users;
  return (
    <>
      {
        singleUser===null?"Loading..":<div className="course_details">
        <header>
          <Link to={`/edit/${id}`} className="edit btn-help">
            Edit
          </Link>
          <Link
            to="/"
            className="delete btn-help"
            
          >
            Delete
          </Link>
          <Link to="/users" className="back btn-help">
            Back
          </Link>
          <h2>{singleUser?.name}</h2>
        </header>
        <main>
          <p>
            <span>email :</span>
            <span>{singleUser?.email}</span>
          </p>
          <p>Role:{singleUser?.role}</p>
        </main>
        <footer>
          <span className="date_create">Course Created At</span>
          <span>
            <strong>{Moment(singleUser?.createdAt).fromNow()}</strong>
          </span>
        </footer>
      </div>
      }
    </>
  );
};

export default SingleUser;
