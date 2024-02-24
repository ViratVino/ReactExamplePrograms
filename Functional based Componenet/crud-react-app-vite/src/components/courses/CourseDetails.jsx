import {useLocation,Link, useNavigate} from "react-router-dom";
import Moment from "moment";
import axios from "axios";
import CourseService from "../../services/CourseService";

const CourseDetails = () => {
 
  let {state:{id,title,trainer,description,createdAt}}=useLocation()
   console.log(Moment);


   let navigate=useNavigate();


   let deleteCourse =async (id)=>{
    if(window.confirm()===true){
    // await axios.delete(`http://localhost:5000/courses/${id}`);
    await CourseService.deleteService(id);
    navigate('/');
    }
   }

  return (
    <div className="course_details">
        <header>
        <Link to={`/edit/${id}`} className="edit btn-help">Edit</Link>
        <Link to="/" className="delete btn-help" onClick={()=>deleteCourse(id)}>Delete</Link>
          <Link to="/" className="back btn-help">Back</Link>
           <h2>{title}</h2>
        </header>
        <main>
          <p>
           <span>Trainer :</span>
           <span>{trainer}</span>
          </p>
          <p>{description}</p>
        </main>
        <footer>
        <span className="date_create">
          Course Created At 
        </span>
        <span><strong>{Moment(createdAt).fromNow()}</strong></span>
        </footer>
    </div>
  )
}

export default CourseDetails