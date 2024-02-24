import React from 'react';
import sty from "./Register.module.css";

const Register = () => {
  return (
    <div className={sty.auth}>
    <form >
        <label htmlFor="">Name</label>
        <input type="text" />
    </form>
</div>
  )
}

export default Register