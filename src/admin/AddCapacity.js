import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCapacity, getCapacities } from "./apiAdmin";
// import { getCapacities } from "../auth";
import Capacities from './Capacities';
import { API } from "../config";

const AddCapacity = () => {
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
        // make request to api to create capacity
        createCapacity(user._id, token, { name }).then(data => {
            console.log("user._id = ", user._id);
            if (data.error) {
                setError(true);
            } else {
                setError("");
                setSuccess(true);
            }
        });
    };

    const newCapacityForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">

                <input type="text" className="form-control"
                    placeholder="Capacity Name"
                    onChange={handleChange}
                    value={name} autoFocus required
                />
            </div>

            <table width="40%" border="0">
                <tr valign="top">
                    <td>
                        <button className="btn btn-outline-primary">Create Capacity</button>
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
            return <h3 className="text-danger">Capacity should be unique</h3>;
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
            title="Add a new capacity"
            description={`Hello, ${user.name}, ready to add a new capacity/transportation vehicle?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {newCapacityForm()}
                    {/* {goBack()}  */}
                </div>
            </div>
            <div className="container">
                <Capacities />
            </div>
        </Layout>
    );
};

export default AddCapacity;