import { API } from "../config";
import queryString from "query-string";

export const getClinicUsers = sortBy => {
  return fetch(`${API}/clinic-users?sortBy=${sortBy}&order=desc&limit=6`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// export const getClinics = () => {
//   return fetch(`${API}/clinics`, {
//     method: "GET"
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// }

export const getFilteredClinicUsers = (skip, limit, filters = {}) => {
  const data = {
    limit,skip,filters
  }

  return fetch(`${API}/clinic-users/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
