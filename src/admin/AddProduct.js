import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createProduct, getCategories } from "./apiAdmin";
import { getClinics } from "../auth";

const AddProduct = () => {
    //State
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    })

    const { user, token } = isAuthenticated()

    //Destructure values from State
    const {
        name,
        description,
        price,
        categories,
        category,
        shipping,
        quantity,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values

    //Load categories and set form data
    const init = () => {
      getCategories().then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            }else {
                setValues({...values, categories: data, formData: new FormData()})
            }
        })
    }

  const goBack = () => (
    <div className="mt-0">
      <Link to="/admin/dashboard" className="text-warning">
        Back to Dashboard
      </Link>
    </div>
  );

    //Runs when component mounts and when there is a change in the values
    //in the State
    useEffect(() => {
        init()
        // setValues({...values, formData: new FormData()})
    }, [])

    //name: description, photo, shipping
    const handleChange = name => event => {
        const value =
        name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value)
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault()
        setValues({...values, error: '', loading: true})

        createProduct(user._id, token, formData)
        .then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            }else {
                setValues({
                    ...values, name: '', description: '', photo: '', 
                    price: '', quantity: '', loading: false,
                    createdProduct: data.name
                })
            }
        })
    }

    const newPostForm = () => (
      <form className="mb-3" onSubmit={clickSubmit}>
        <h4>Post Photo</h4>
        <div className="form-group">
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image/*"
            />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange("name")}
            placeholder="Product Name"
            type="text"
            className="form-control"
            value={name}
          />
        </div>

        <div className="form-group">
          <textarea
            onChange={handleChange("description")}
            placeholder="Product Description"
            className="form-control"
            value={description}
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange("price")}
            placeholder="Price"
            type="number"
            className="form-control"
            value={price}
          />
        </div>

        <div className="form-group">
          <select onChange={handleChange("category")} className="form-control">
            <option>Category</option>
            {categories &&
              categories.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <select onChange={handleChange("shipping")} className="form-control">
            <option>Shipping</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <input
            onChange={handleChange("quantity")}
            placeholder="Quantity"
            type="number"
            className="form-control"
            value={quantity}
          />
        </div>
        

        <table width="40%" border="0">
          <tr valign="top">
            <td>
              <button className="btn btn-outline-primary">Create Product</button>
            </td>
            <td>{goBack()}</td>
          </tr>
        </table>


      </form>
    );

    const showError = () => 
    <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
        {error}
    </div>

    const showSuccess = () => 
    <div className="alert alert-info" style={{display: createdProduct ? '' : 'none'}}>
        <h2>{`${createdProduct}`} is created</h2>
    </div>

    const showLoading = () => 
   loading && (<div className="alert alert-success"><h2>Loading...</h2></div>)
  return (
    <Layout
      title="Add a new product"
      description={`Hello , ${user.name} ready to add a new product?`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
            {showLoading()}
            {showSuccess()}
            {showError()}
            {newPostForm()}
            
        </div>
      </div>
    </Layout>
  );
};

export default AddProduct