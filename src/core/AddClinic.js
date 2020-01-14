import React, { useState } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
// import { createClinic } from "./apiAdmin";
import { addClinic } from "../auth";

const AddClinic = () => {
  const [values, setValues] = useState({
    name: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    contact: "",
    email: "",
    phone: '',
    description: "",
    error: "",
    success: false
  });

  const { name, address, address2, city, state, zip, contact, email, phone, description, error, success } = values;

  //HOC: a fn returning a fn
  //to set state
  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    //create a user object by using {}
    addClinic({ name, address, address2, city, state, zip, contact, email, phone, description }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          address: "", 
          address2: "", 
          city: "",  
          state: "", 
          zip: "", 
          contact: "",  
          email: "",
          phone: "",
          description: "", 
          error: "",
          success: true
        });
      }
    });
  };

  const clinicForm = () => (
    <form>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          placeholder="Clinic Name"
          type="text"
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("address")}
          placeholder="Address"
          type="text"
          className="form-control"
          value={address}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("address2")}
          placeholder="Address2"
          type="text"
          className="form-control"
          value={address2}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("city")}
          placeholder="City"
          type="text"
          className="form-control"
          value={city}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("state")}
          placeholder="State"
          type="text"
          className="form-control"
          value={state}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("zip")}
          placeholder="Zip Code"
          type="text"
          className="form-control"
          value={zip}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("contact")}
          placeholder="Contact"
          type="text"
          className="form-control"
          value={contact}
        />
      </div>

      <div className="form-group">
        <input
          onChange={handleChange("phone")}
          placeholder="Contact Phone"
          type="text"
          className="form-control"
          value={phone}
        />
      </div>

      <div className="form-group">
        <input
          onChange={handleChange("email")}
          placeholder="Contact Email"
          type="email"
          className="form-control"
          value={email}
        />
      </div>

      <div className="form-group">
        <input
          onChange={handleChange("description")}
          placeholder="Description"
          type="text"
          className="form-control"
          value={description}
        />
      </div>
        <table width="100%" border="0">
          <tr valign="top">
          <td>      
          <button onClick={clickSubmit} className="btn btn-primary">
            Submit
          </button>
          </td>
          <td>{goBack()}</td>
          </tr>
        </table>
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

  const goBack = () => (
    <div className="mt-0">
      <Link to="/admin/dashboard" className="text-warning">
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout
      title="Clinic"
      description="Clinic"
      className="container col-md-4 offset-md-4"
    >
      {showSuccess()}
      {showError()}
      {clinicForm()}
      
      {/* {JSON.stringify(values)} */}
    </Layout>
  );
};

export default AddClinic;
