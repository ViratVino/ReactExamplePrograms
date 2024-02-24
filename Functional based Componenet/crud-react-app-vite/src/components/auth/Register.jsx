import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContextApi } from "../../context/AuthContext";

import toast from "react-hot-toast";

// console.log(axios.post());
const Register = () => {
let {signup}=useContext(AuthContextApi);

  let navigate = useNavigate();

  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    isLoading: false,
  });


  let { name, email, isLoading, password, avatar,} = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {  name, email, password, avatar };
      signup(payload);
       toast.success(`Successfully Registered...`);
       console.log(payload);
       navigate("/login");
       
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="content">
      <main className="authBlock">
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Enter email"
            />
          </div>
          <div className="form-group desc">
            <label htmlFor="description">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              placeholder="Enter Password"
            />
          </div>


          <div className="form-group date">
          <label htmlFor="Course_createdAt">Avatar url</label>
          <input
            type="url"
            name="avatar"
            value={avatar}
            onChange={handleChange}
            required
            placeholder="Enter Avatar url"
          />
        </div>



          <div className="form-group1">
            <button>{isLoading ? "Loading..." : "Register"}</button>
          </div>
        </form>
       
      </main>
    </section>
  );
};

export default Register;
