import React from 'react'

const Login = ({toggle:{toggle,handleToggle}}) => {
  return (
    <div>
         <div id="model-container">
      <article className="container">
        <span>
        <button onClick={handleToggle}>{toggle ? "open" : "X"}</button>
        </span>
        <div className="model-header">
          <h1>Login</h1>
         </div>
        <div className="model-content">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control"  placeholder="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" className="form-control"  placeholder="Enter Your Password"/>
            </div>
            <div className="form-group">
           
              <button>Login</button>
            </div>
          </form>
        </div>
        <div className="model-footer">Footer</div>
      </article>
    </div>
    </div>
  )
}

export default Login