import React, { useState } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
// import { createJane } from "./apiAdmin";
import { addJane } from "../auth";

const AddJane = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, email, password, success, error } = values;

  //HOC: a fn returning a fn
  //to set state
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    //create a user object by using {}
    addJane({ name, email, password }).then(data => {
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

  const janeForm = () => (
    <form>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          placeholder="Name"
          type="text"
          className="form-control"
          value={name}
        />
      </div>

      <div className="form-group">
        <input
          onChange={handleChange("email")}
          placeholder="Email"
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <input
          onChange={handleChange("password")}
          placeholder="Password"
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please <Link to="/">Home</Link>
    </div>
  );

  return (
    <Layout
      title="Jane2"
      description="Jane2 Testing"
      className="container col-md-4 offset-md-4"
    >
      {showSuccess()}
      {showError()}
      {janeForm()}
      Show the state:
      {JSON.stringify(values)}
    </Layout>
  );
};

export default AddJane;
