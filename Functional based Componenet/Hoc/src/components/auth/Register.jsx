
import withFormHandling from '../../assets/hoc/FormHandlingwithHoc';

const Register = ({handleSubmit,handleChange,values}) => {
  return (
    <div>
        <h1>Register</h1>
        <form  onSubmit={handleSubmit}>
            <input type="email"  value={values.email} name="email" placeholder='Enter email' onChange={handleChange}/>
            <input type="password"  value={values.password} name="password" placeholder='Enter password' onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default withFormHandling(Register)