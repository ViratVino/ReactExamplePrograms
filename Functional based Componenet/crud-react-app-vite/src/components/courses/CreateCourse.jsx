import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CourseService from "../../services/CourseService";
import toast from "react-hot-toast";

// console.log(axios.post());
const CreateCourse = () => {
  let navigate = useNavigate();

  let [state, setState] = useState({
    title: "",
    trainer: "",
    description: "",
    createdAt: "",
    isLoading: false,
  });


  let { title, trainer, isLoading, description, createdAt,} = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { title, trainer, isLoading, description, createdAt };
      console.log(payload);

      // axios methos
      // let { data } = await axios.post("http://localhost:5000/courses", payload);

      CourseService.createService(payload);
     toast.success(`Data Created Successfully...`);


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
        <h1>Create Course</h1>
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
            name="createdAt"
            value={createdAt}
            onChange={handleChange}
            required
            placeholder="Enter Date"
          />
        </div>



          <div className="form-group1">
            <button>{isLoading ? "Loading..." : "Create Course"}</button>
          </div>
        </form>
       
      </main>
    </section>
  );
};

export default CreateCourse;
