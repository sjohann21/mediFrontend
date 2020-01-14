import React, {useState} from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import { signup } from '../auth'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  })

  const { name, email, password, success, error } = values;

  //HOC: a fn returning a fn
  //to set state
  const handleChange = name  => event => {
    setValues({...values, error: false, [name]: event.target.value})
  }

   const clickSubmit = event => {
     event.preventDefault();
     setValues({ ...values, error: false });
     //create a user object by using {}
     signup({ name, email, password })
     .then(data => {
       if (data.error) {
         setValues({ ...values, error: data.error, success: false });
       } else {
         setValues({
           ...values,
           name: "",
           email: "",
           password: "",
           error: "",
           success: true
         });
       }
     });
   };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  )

  const showError = () => (
     <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
      {error}
    </div>
  )

    const showSuccess = () => (
      <div
        className="alert alert-info"
        style={{ display: success ? "" : "none" }}
      >
        New account is created. Please <Link to="/signin">Signin</Link>
      </div>
    );

  return (
    <Layout title="Signup" description="Signup Testing" className="container col-md-4 offset-md-4">
  
      {showSuccess()}
      {showError()}
      {signUpForm()}
      Show the state:
      {JSON.stringify(values)}
     
    </Layout>
  );
};

export default Signup;
