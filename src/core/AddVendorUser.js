import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
// import { createClinic } from "./apiAdmin";
import { addVendorUser, getVendors } from "../auth";
import { API } from "../config";

const AddVendorUser = () => {
    const [values, setValues] = useState({
        vendors: [],
        vendor: '',
        fname: "",
        lname: "",
        email: "",
        password: "",
        phone: '',
        phone2: '',
        role: "",
        error: "",
        success: false
    });

    const { vendors, vendor, fname, lname, email, password, phone, phone2,
        role, error, success } = values;

    //Load Vendors and set form data
    const init = () => {
        getVendors().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, vendors: data, vendor })
            }
        })
        fetch(`${API}/vendors`, {
            method: 'GET'
        }).then(response => {
            console.log("response.json = ", response.json())
        })
            .catch(err => {
                console.log(err)
            })
        return () => {
            console.log('Cleanup')
        }
    }

    useEffect(() => {
        init()
        // setValues({...values, formData: new FormData()})
    }, [])

    //HOC: a fn returning a fn
    //to set state
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        //create a user object by using {}
        console.log("**** values = ", values.vendor);
        addVendorUser({
            vendors, vendor, fname, lname, email, password, phone, phone2,
            role, error, success
        }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    vendors: "",
                    vendor: "",
                    fname: "",
                    lname: "",
                    email: "",
                    password: "",
                    phone: "",
                    phone2: "",
                    role: "",
                    error: "",
                    success: true
                });
                console.log("*** vendor", vendor)
            }
        });
    };

    const vendorUserForm = () => (
        <form>
            <div className="form-group">
                <select onChange={handleChange("vendor")} className="form-control">
                    <option>Vendor</option>
                    {vendors &&
                        vendors.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("fname")}
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                    value={fname}
                />
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("lname")}
                    placeholder="Last Name"
                    type="text"
                    className="form-control"
                    value={lname}
                />
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("email")}
                    placeholder="Email Address"
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("password")}
                    placeholder="Password"
                    type="text"
                    className="form-control"
                    value={password}
                />
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("phone")}
                    placeholder="Phone"
                    type="phone"
                    className="form-control"
                    value={phone}
                />
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("phone2")}
                    placeholder="Phone2"
                    type="text"
                    className="form-control"
                    value={phone2}
                />
            </div>

            <div className="form-group">
                <input
                    onChange={handleChange("role")}
                    placeholder="Role: 0-Staff 1-Admin, 2-Manager"
                    type="text"
                    className="form-control"
                    value={role}
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
            title="Vendor User"
            description="Vendor User"
            className="container col-md-4 offset-md-4"
        >
            {showSuccess()}
            {showError()}
            {vendorUserForm()}

            {JSON.stringify(values)}
        </Layout>
    );
};

export default AddVendorUser;
