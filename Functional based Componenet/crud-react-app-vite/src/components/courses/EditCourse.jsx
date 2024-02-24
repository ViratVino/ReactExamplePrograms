import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import CourseService from "../../services/CourseService";
import toast from "react-hot-toast";

// console.log(axios.post());
const EditCourse = () => {
  let navigate = useNavigate();


  let {id}=useParams();
  let val=useParams();
  console.log(val);

  let [state, setState] = useState({
    title: "",
    trainer: "",
    description: "",
    updatedAt: "",
    isLoading: false,
  });

  let { title, trainer, isLoading, description, updatedAt } = state;



  useEffect(()=>{
    let fetchCourse=async ()=>{
        // let {data}=await axios.get(`http://localhost:5000/courses/${id}`);
        let data =await CourseService.fetchId(id);
        setState(data)
    }
    fetchCourse();
  
  },[])

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { title, trainer, isLoading, description,updatedAt  };
      console.log(payload);

      // axios methos
      // let { data } = await axios.put(`http://localhost:5000/courses/${id}`, payload);

         await CourseService.updateService(id,payload);
         toast.success("Couse has been updated successfully");
      // window.fetch Build in window fetch Api
      // let {data}=await window.fetch("http://localhost:5000/courses",{
      //   method:"post",
      //   body:JSON.stringify(payload)
      // })
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="content">
      <main className="authBlock">
        <h1>Update Course</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              required
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Trainer</label>
            <input
              type="text"
              name="trainer"
              value={trainer}
              onChange={handleChange}
              required
              placeholder="Enter Trainer"
            />
          </div>
          <div className="form-group desc">
            <label htmlFor="description">Description</label>
            <textarea
              cols="10"
              rows="3"
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>


          <div className="form-group date">
          <label htmlFor="Course_createdAt">Course Created at</label>
          <input
            type="date"
            name="updatedAt"
            value={updatedAt}
            onChange={handleChange}
            required
            placeholder="Enter Date"
          />
        </div>



          <div className="form-group1">
            <button>{isLoading ? "Loading..." : "Update Course"}</button>
          </div>
        </form>
       
      </main>
    </section>
  );
};

export default EditCourse;
