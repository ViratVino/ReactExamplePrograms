import React from 'react';
import withFormHandling from '../../assets/hoc/withFormHandling';

const Login = ({handleSubmit,handleChange,errors,values}) => {
  return  (
    <div>
        <form  onSubmit={handleSubmit}>
            <input type="text"  placeholder='enter emill' value={values.email} name='email' onChange={handleChange}/>
            <input type="password" placeholder='enter password'  value={values.password} name='password' onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default withFormHandling(Login)