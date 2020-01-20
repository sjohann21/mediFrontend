//AddProcuct
import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createVendor } from './apiAdmin'
import {  getCategories } from "../auth";

const AddVendor = () => {
    const [values, setValues] = useState({
        name: '',
        photo: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        contact: '',
        phone: '',
        phone2: '',
        email: '',
        categories: [],
        category: '',
        hoursOfOperation: '',
        areaOfOperation: '',
        description: '',
        isActive: true,
        loading: false,
        error: '',
        createdVendor: '',
        redirectToProfile: false,
        formData: ''
    })

    const { user, token } = isAuthenticated()

    //Destructure values from State
    const {
        name,
        photo,
        address,
        address2,
        city,
        state,
        zip,
        contact,
        phone,
        phone2,
        email,
        categories,
        hoursOfOperation,
        areaOfOperation,
        description,
        isActive,
        loading,
        error,
        createdVendor,
        redirectToProfile,
        formData
    } = values

    //Load categories and set form data
    const init = () => {
        console.log("*** ADDVENDOR: INIT")
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, categories: data, formData: new FormData() })
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
        console.log("*** useEffect")
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
        console.log("*** VENDOR clickSubmit")
        event.preventDefault()
        setValues({ ...values, error: '', loading: true })

        createVendor(user._id, token, formData)
            .then(data => {
                console.log("*** AddVendor data = ", data)
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    setValues({
                        ...values, name: '',
                        photo: '', address: '', address2: '', city: '', state: '',
                        zip: '', contact: '', phone: '', phone2: '', email: '',
                        hoursOfOperation: '', areaOfOperation: '', isActive: '',
                        description: '',
                        loading: false,
                        createdVendor: data.name
                    })
                }
            })
    }

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <div class="container">
                <h4>Post Photo</h4>
                <div className="form-group">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image/*"
                    />
                </div>

                <div class="row mb-2">
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("name")}
                            placeholder="Vendor Name"
                            type="text"
                            className="form-control"
                            value={name}
                        />
                    </div>
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("address")}
                            placeholder="Vendor Address"
                            type="text"
                            className="form-control"
                            value={address}
                        />
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("address2")}
                            placeholder="Vendor Address2"
                            type="text"
                            className="form-control"
                            value={address2}
                        />
                    </div>
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("city")}
                            placeholder="City"
                            type="text"
                            className="form-control"
                            value={city}
                        />
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("state")}
                            placeholder="State"
                            type="text"
                            className="form-control"
                            value={state}
                        />
                    </div>
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("zip")}
                            placeholder="Zip Code"
                            type="text"
                            className="form-control"
                            value={zip}
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("contact")}
                            placeholder="Contact"
                            type="text"
                            className="form-control"
                            value={contact}
                        />
                    </div>
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("phone")}
                            placeholder="Phone"
                            type="text"
                            className="form-control"
                            value={phone}
                        />
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("phone2")}
                            placeholder="Phone2"
                            type="text"
                            className="form-control"
                            value={phone2}
                        />
                    </div>
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("email")}
                            placeholder="Email"
                            type="text"
                            className="form-control"
                            value={email}
                        />
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("hoursOfOperation")}
                            placeholder="Hours of Operation: 8:00AM - 11:00PM"
                            type="text"
                            className="form-control"
                            value={hoursOfOperation}
                        />
                    </div>
                    <div class="col-md-6">
                        <input
                            onChange={handleChange("areaOfOperation")}
                            placeholder="Area Of Operation - primary zipcode"
                            type="text"
                            className="form-control"
                            value={areaOfOperation}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <textarea
                        onChange={handleChange("description")}
                        placeholder="Vendor Description"
                        className="form-control"
                        value={description}
                    />
                </div>

            <table width="40%" border="0">
                <tr valign="top">
                    <td>
                        <button className="btn btn-outline-primary">Create Vendor</button>
                    </td>
                    <td>{goBack()}</td>
                </tr>
            </table>
            </div>
        </form>
    );

    const showError = () =>
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>

    const showSuccess = () =>
        <div className="alert alert-info" style={{ display: createdVendor ? '' : 'none' }}>
            <h2>{`${createdVendor}`} is created</h2>
        </div>

    const showLoading = () =>
        loading && (<div className="alert alert-success"><h2>Loading...</h2></div>)
    return (
        <Layout
            title="Add a new vendor"
            description={`Hello , ${user.name} ready to add a new vendor?`}
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

export default AddVendor