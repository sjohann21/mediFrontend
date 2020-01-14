
import { API } from "../config";

//const signup = (name,email,password) => {
export const signup = (user) => {
      //console.log(name, email, password)
      return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
    };

//const signin = (name,email,password) => {
export const signin = (user) => {
      //console.log(name, email, password)
      return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => {
        return response.json()
      })
      .catch(err => {
        //console.log(err)
      })
    };

export const authenticate = (data, next) => {
    if(typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const signout = (next) => {
        if(typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
        next()
        return fetch(`${API}/signout`, {
            method: 'GET',
        })
        .then(response => {
            console.log('signout', response)
        })
        .catch(err => console.log(err))
        }
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }else {
        return false
    }
}

export const addJane = jane => {
  //console.log(name, email, password)
  return fetch(`${API}/create/jane`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jane)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const addClinic = clinic => {
  return fetch(`${API}/create/clinic`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(clinic)
  })
    .then(response => {
      console.log(".then return =: ")
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const addClinicUser = clinicUser => {
  console.log("*** auth/index.js addClinicUser ")
  console.log("clinicUser = ", clinicUser)
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVjMTZjZTdjYzk1NTFmOGE4MDZlNDQiLCJpYXQiOjE1Nzg4ODc1MDJ9.aQ1 - pusqcxxgBMzRHgiUMIgbQwGQfGgxCpaCHRc6eV0'
  return fetch(`${API}/create/clinic/user`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(clinicUser)
  })
    .then(response => {
      console.log(".then return =: ")
      return response.json(clinicUser);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getClinics = () => {
  return fetch(`${API}/clinics`, {
    method: 'GET'
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: 'GET'
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}



