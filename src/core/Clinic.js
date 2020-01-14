// import React, { useState, useEffect } from "react";
// import Layout from "./Layout";
// import MediCard from "./MediCard";
// //import { getClinics, getFilteredClinicUsers } from "./apiMediCore";
// import MediCheckbox from './MediCheckbox'
// import { prices } from './fixedAlphabet'
// import MediRadioBox from './MediRadioBox'
// //import { prices } from "./fixedPrices";

// const Clinic = () => {
//   const [myFilters, setMyFilters] = useState({
//     filters: { clinic: [], price: [] }
//   })
//     const [clinics, setClinics] = useState([]);
//     const [error, setError] = useState(false);
//     const [limit, setLimit] = useState(6);
//     const [skip, setSkip] = useState(0);
//     const [size, setSize] = useState(0);
//     const [filteredResults, setFilteredResults] = useState([]);

//   const init = () => {
//     getClinics().then(data => {
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setClinics(data);
//       }
//     });
//   };

//   const loadFilteredResults = newFilters => {
//     //console.log(newFilters);
//     getFilteredClinicUsers(skip, limit, newFilters).then(data => {
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setFilteredResults(data.data);
//         setSize(data.size);
//         setSkip(0);
//       }
//     });
//   };

//   const loadMore = () => {
//     let toSkip = skip + limit;
//     getFilteredClinicUsers(toSkip, limit, myFilters.filters).then(data => {
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setFilteredResults([...filteredResults, ...data.data]);
//         setSize(data.size);
//         setSkip(toSkip);
//       }
//     });
//   };

//     const loadMoreButton = () => {
//       return (
//         size > 0 &&
//         size >= limit && (
//           <button onClick={loadMore} className="btn btn-warning mb-5">
//             Load more{" "}
//           </button>
//         )
//       );
//     };

//     useEffect(() => {
//       init();
//       loadFilteredResults(skip, limit, myFilters.filters);
//     }, []);

//     //filterBy => clinic OR alphabet
//   const handleFilters = (filters, filterBy) => {
//     //console.log(filters, filterBy);
//     const newFilters = { ...myFilters };
//     newFilters.filters[filterBy] = filters;

//     if (filterBy == "price") {
//       let priceValues = handlePrice(filters);
//       newFilters.filters[filterBy] = priceValues;
//     }
//     loadFilteredResults(myFilters.filters);
//     setMyFilters(newFilters);
//   };

//     const handlePrice = value => {
//       const data = prices;
//       let array = [];

//       for (let key in data) {
//         if (data[key]._id === parseInt(value)) {
//           array = data[key].array;
//           //console.log("array = ", array);
//         }
//       }
//       return array;
//     };

//   return (
//     <Layout
//       title="Clinic Page"
//       description="Search Clinics and find users"
//       className="container-fluid"
//     >
//       <div className="row">
//         <div className="col-4">
//           <h4>Filter by clinic</h4>
//           <ul>
//             <MediCheckbox
//               clinics={clinics}
//               handleFilters={filters => handleFilters(filters, "clinic")}
//             />
//           </ul>
//           <h4>Filter by price range</h4>
//           <div>
//             <MediRadioBox
//               prices={prices}
//               handleFilters={filters => handleFilters(filters, "price")}
//             />
//           </div>
//         </div>

//         <div className="col-8">
//           <h2 className="mb-4">Clinic users</h2>
//           <div className="row">
//             {filteredResults.map((clinicUsers, i) => (
//                 <MediCard key={i} clinicUsers={clinicUsers} />
//             ))}
//           </div>
//           <hr />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Clinic;
