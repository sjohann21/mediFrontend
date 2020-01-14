import React, { useState, useEffect } from "react";

const MediCheckbox = ({ clinics, handleFilters }) => {
  const [checked, setChecked] = useState([])

  const handleToggle = c => () => {
    const currentClinicId = checked.indexOf(c)
    const newCheckedClinicId = [...checked];
    if(currentClinicId === -1) {
      newCheckedClinicId.push(c)
    }else {
      newCheckedClinicId.splice(currentClinicId, 1)
    }
    console.log("MEDICHECKBOX: ", newCheckedClinicId);
    setChecked(newCheckedClinicId); //send this to Clinic
    handleFilters(newCheckedClinicId);
  }

  return clinics.map((c, i) => (
    <li key={i} className="list-unstyled">
      <input onChange={handleToggle(c._id)} 
      value={checked.indexOf(c._id === -1)} 
      type="checkbox" 
      className="form-check-input" 
    />
      <label className="form-check-label">{c.name}</label>
    </li>
  ));
};

export default MediCheckbox;
