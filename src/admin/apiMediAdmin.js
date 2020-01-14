import { API } from "../config";

// export const createClinic = (userId, token, clinic) => {
//   console.log("userId = ", userId)
//   console.log("token = ", token);
//   console.log("API = ", API)
//   console.log("clinic = ", clinic);

//   return fetch(`${API}/create/clinic/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     },

//     body: JSON.stringify(clinic)
//   })
//     .then(response => {
//       console.log("**** response = ", response);
//       return response.json();
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// export const createClinicUser = (userId, token, product) => {
//   return fetch(`${API}/clinic-user/create/${clinicUserId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       //Send Form data

//       Authorization: `Bearer ${token}`
//     },
//     body: clinicUser
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// export const getClinics = () => {
//   return fetch(`${API}/clinics`, {
//     method: 'GET'
//   })
//   .then(response => {
//     return response.json()
//   })
//   .catch(err => console.log(err))
// }

export const listOrders = (clinicUserId, token) => {
  return fetch(`${API}/order/list/${clinicUserId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getStatusValues = (clinicUserId, token) => {
         return fetch(`${API}/order/status-values/${clinicUserId}`, {
           method: "GET",
           headers: {
             Accept: "application/json",
             Authorization: `Bearer ${token}`
           }
         })
           .then(response => {
             return response.json();
           })
           .catch(err => console.log(err));
       };

export const updateOrderStatus = (clinicUserId, token, orderId, status) => {
         return fetch(`${API}/order/${orderId}/status/${clinicUserId}`, {
           method: "PUT",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
           },
           body: JSON.stringify({ status, orderId })
         })
           .then(response => {
             return response.json();
           })
           .catch(err => console.log(err));
       };

export const deleteClinicUser = (clinicUserId, userId, token) => {
         return fetch(`${API}/clinic-user/${clinicUserId}/${userId}`, {
           method: "DELETE",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
           }
         })
           .then(response => {
             return response.json();
           })
           .catch(err => console.log(err));
       };

export const getProduct = clinicUserId => {
         return fetch(`${API}/clinic-user/${clinicUserId}`, {
           method: "GET"
         })
           .then(response => {
             return response.json();
           })
           .catch(err => console.log(err));
       };

export const getClinicUsers = () => {
  return fetch(`${API}/clinic-users?limit=undefined`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const updateClinicUser = (clinicUserId, userId, token, clinicUser) => {
         return fetch(`${API}/clinic-user/${clinicUserId}/${userId}`, {
           method: "PUT",
           headers: {
             Accept: "application/json",
             Authorization: `Bearer ${token}`
           },
           body: clinicUser
         })
           .then(response => {
             return response.json();
           })
           .catch(err => console.log(err));
       };