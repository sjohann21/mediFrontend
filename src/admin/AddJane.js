// import React from "react";
// import ReactDOM from "react-dom";
// import { isAuthenticated } from "../auth";
// import { createJane } from "./apiAdmin";

// //import "./validate.css";

// import useFormValidation from "./useFormValidation";
// import validateAuth from "./validateAuth";

// const INITIAL_STATE = {
//   email: "",
//   password: ""
// };
// const { user, token } = isAuthenticated()

// const AddJane = () => {
//     const {
//       handleSubmit,
//       handleChange,
//       handleBlur,
//       values,
//       errors,
//       isSubmitting
//     } = useFormValidation(INITIAL_STATE, validateAuth, authenticateJane);
//     const [serverError, setServerError] = React.useState(null)
//     // const [email, setEmail] = React.useState("");
//     // const [password, setPassword] = React.useState("");

// async function authenticateJane() {
//   const { email, password } = values
//   console.log("Values = ", values)
//   try {
//     await createJane(user._id, token, values)
//     console.log("email and password = ", email + ' ' + password)
//   }catch(err) {
//     console.error('Auth Error', err)
//     setServerError(err.message)

//   }
// }
//     return (
//       <div className="container">
//         <h1>Add Jane</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             onChange={handleChange}
//             onBlur={handleBlur}
//             name="email"
//             value={values.email}
//             className={errors.email && "error-input"}
//             autoComplete="off"
//             placeholder="Your email address"
//           />
//           {errors.email && <p className="error-text">{errors.email}</p>}
//           <input
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//             className={errors.password && "error-input"}
//             name="password"
//             type="password"
//             placeholder="Choose a safe password"
//           />
//           {errors.password && <p className="error-text">{errors.password}</p>}
//           {serverError && <p className="error-text">{serverError}</p>}
//           <div>
//             <button disabled={isSubmitting} type="submit">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   };

// export default AddJane;