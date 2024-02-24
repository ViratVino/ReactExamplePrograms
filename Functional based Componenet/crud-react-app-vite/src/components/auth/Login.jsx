import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContextApi } from "../../context/AuthContext";

import toast from "react-hot-toast";

// console.log(axios.post());
const Login = () => {
let {login}=useContext(AuthContextApi);

  let navigate = useNavigate();

  let [state, setState] = useState({
    email: "",
    password: "",
    isLoading: false,
  });


  let {  email, isLoading, password} = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = {  email, password };
     let val=await login(payload);

      
     toast.success('SuccessFully Logged In')
      navigate("/users");
     
   
       
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  };
  return (
    <section className="content">
      <main className="authBlock">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
           <div className="form-group desc">
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

          <div className="form-group1">
            <button>{isLoading ? "Loading..." : "Login"}</button>
          </div>
        </form>
       
      </main>
    </section>
  );
};

export default Login;
