import React from 'react';
import Styles from'./login.module.css';
import col from"./login.module.css";

import * as atyles from './login.module.css';

const Login = () => {
  return (
    <div className={Styles.auth}> 
        <form style={{background:col.blue}}>
            <label htmlFor="" >Name</label>
            {/* <input type="text" className={Styles.input} /> */}
            <input type="text"  />
        </form>
    </div>
  )
}

export default Login