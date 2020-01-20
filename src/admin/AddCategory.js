import React, { useState } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";
import Categories from './Categories';


const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = e => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = e => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, { name }).then(data => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        
        <input type="text" className="form-control" 
        placeholder="Category Name"
        onChange={handleChange}
          value={name} autoFocus required
        />
      </div>
      
      <table width="40%" border="0">
        <tr valign="top">
          <td>
            <button className="btn btn-outline-primary">Create Category</button>
          </td>
          <td>{goBack()}</td>
        </tr>
      </table>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{name} is created</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Category should be unique</h3>;
    }
  };

  const goBack = () => (
    <div className="mt-0">
      <Link to="/admin/dashboard" className="text-warning">
        Back to Dashboard
      </Link>
    </div>
  );

  return (
    <Layout
      title="Add a new category"
      description={`Hello, ${user.name}, ready to add a new category?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newCategoryForm()}
          {/* {goBack()} */}
        </div>
      </div>
      <div className="container">
      <Categories />
      </div>
    </Layout>
  );
};

export default AddCategory;
