// //AddClinic
// import React, { useState, useEffect } from "react";
// import Layout from "../core/Layout";
// import { isAuthenticated } from "../auth";
// import { Link } from "react-router-dom";
// import { createClinic } from "./apiMediAdmin";
// import {  getCategories } from "../auth";

// //import { useForm } from "react-hook-form";

// const AddClinic = () => {

//     const [values, setValues] = useState({
//       name: "",
//       address: "",
//       address2: "",
//       city: "",
//       state: "",
//       zip: "",
//       categories: [],
//       category: "",
//       contact: "",
//       email: "",
//       phone: "",
//       description: "",
//       error: "",
//       loading: false,
//       createdClinic: "",
//       redirectToProfile: false,
//       formData: ""
//     });
    
//     const { user, token } = isAuthenticated();
    
//     const {
//       name,
//       address,
//       address2,
//       city,
//       state,
//       zip,
//       categories,
//       category,
//       contact,
//       email,
//       phone,
//       description,
//       error,
//       loading,
//       createdClinic,
//       redirectToProfile,
//       formData
//     } = values;

//     const init = () => {
//       getCategories().then(data => {
//         if (data.error) {
//           setValues({ ...values, error: data.error });
//         } else {
//           setValues({ ...values, categories: data, formData: new FormData() });
//         }
//       });
//     };

//     useEffect(() => {
//       init();
//       // setValues({...values, formData: new FormData()})
//     }, []);

//    const handleChange = name => event => {
//      const value =
//        name === "photo" ? event.target.files[0] : event.target.value;
//      formData.set(name, value);
//      setValues({ ...values, [name]: value });
//    };

//    const clickSubmit = event => {
//      event.preventDefault();
//      setValues({ ...values, error: "", loading: true });

//         createClinic(user._id, token, formData).then(data => {
//         //   if (data.error) {
//         //     setValues({ ...values, error: data.error });
//         //   } else {
//             setValues({
//               ...values,
//               name: "",
//               address: "",
//               address2: "",
//               city: "",
//               state: "",
//               zip: "",
//               contact: "",
//               email: "",
//               phone: "",
//               description: "",
//               loading: false,
//               createdClinic: data.name
//             });
//           })
//         };
//   // }

//   const newPostForm = () => (
//     <form className="mb-3" onSubmit={clickSubmit}>
//       <h4>Post Photo</h4>
//       <div className="form-group">
//         <input
//           onChange={handleChange("photo")}
//           type="file"
//           name="photo"
//           placeholder="Photo"
//           accept="image/*"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           onChange={handleChange("name")}
//           value={name}
//           type="text"
//           placeholder="Clinic Name"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           onChange={handleChange("address")}
//           value={address}
//           placeholder="Address"
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           onChange={handleChange("address2")}
//           value={address2}
//           placeholder="Address 2"
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           onChange={handleChange("city")}
//           value={city}
//           placeholder="City"
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           value={state}
//           onChange={handleChange("state")}
//           placeholder="State"
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           value={zip}
//           onChange={handleChange("zip")}
//           placeholder="Zip Code"
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           value={contact}
//           onChange={handleChange("contact")}
//           placeholder="Clinic Contact"
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           value={email}
//           onChange={handleChange("email")}
//           placeholder="Contact Email Address"
//           type="email"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <input
//           value={phone}
//           onChange={handleChange("phone")}
//           placeholder="Contact phone"
//           type="text"
//           className="form-control"
//         />
//       </div>

//       <div className="form-group">
//         <textarea
//           placeholder="Description..."
//           value={description}
//           onChange={handleChange("description")}
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-outline-primary">Create Clinic</button>
//     </form>
//   );

//   const goBack = () => (
//     <div className="mt-5">
//       <Link to="/admin/dashboard" className="text-warning">
//         Back to Dashboard
//       </Link>
//     </div>
//   );

//    const showError = () => 
//     <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
//         {error}
//     </div>

//        const showSuccess = () => (
//          <div
//            className="alert alert-info"
//            style={{ display: createdClinic ? "" : "none" }}
//          >
//            <h2>{`${createdClinic}`}</h2>
//          </div>
//        );

//     const showLoading = () => (
//        loading && (
//            <div className="alert alert-success">
//                <h2>Loading...</h2>
//            </div>
//        )
//        );

//   return (
//     <Layout
//       title="Add a new clinic"
//       description={`Hello, ${user.name} ready to add a new clinic?`}
//     >
//       <div className="row">
//         <div className="col-md-8 offset-md-2">
//           {showLoading()}
//           {showSuccess()}
//           {showError()} 
//           {newPostForm()}
//           {/* {goBack()} */}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AddClinic;
