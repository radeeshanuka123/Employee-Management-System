// ViewDetails.js
import React from "react";
import { useLocation } from "react-router-dom";

import "./css/EmployeeViewDetails.css";

function EmployeeViewDetails() {
  const location = useLocation();

  console.log('Location State:',location.state);
  const { position, details } = location.state || {};

  return (
    <div className="view-details-container">
      {details ? (
        <>
          <h2 className="view-details-h2">{position} Profile Details</h2>
          
          <p className="view-details-p">Name: {details.firstName + " " + details.lastName}</p>
          <p className="view-details-p">Email: {details.email}</p>
          <p className="view-details-p">Address: {details.address}</p>
        </>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
}

export default EmployeeViewDetails;


