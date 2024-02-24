import axios from "axios";
import { useEffect, useState,useContext } from "react";
import Spinner from "../../pages/spinner/Spinner";
import Course from "./Course";
import CourseService from "../../services/CourseService";
import SearchCourses from "../searchFilter/SearchCourses";
// import { UserContextApi } from './../../context/UserContext';

const AllCourses = () => {

// let {users,fetchUsers}=useContext(UserContextApi);
// console.log(users);
let [state,setState]=useState(null);
let [searchTerm,setSearchterm]=useState("");

  let fetchCourses=async ()=>{
    // let {data}=await axios.get("http://localhost:5000/courses");
    let data=await CourseService.fetchService();
    // console.log(data);
    setState(data);
  };

  let handleSearch=(term)=>{
    console.log(term);
    setSearchterm(term);
  }

let FilterdCourse =state?.filter(val=>{
  if(searchTerm===""){
   
    
    return val;
  }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
    return val
  }
})
.map((course)=>{
  return(<Course key={course.id} {...course}/>)
})


  useEffect(()=>{
fetchCourses();
// fetchUsers();
   
  },[])

  return (<>
  <SearchCourses searchTerm={handleSearch}/>
   <h1 className="all">All Courses</h1>
   <div className="courses">
    {
      // state===null?<Spinner/>:state.map((course)=>{
      //   return(<Course key={course.id} {...course}/>)
      // })

      state===null?<Spinner/>:FilterdCourse
      
    }
   </div>
   </>
   
  );
};

export default AllCourses;
