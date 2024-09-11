//Home.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//import LeaveManagement from "./LeaveManagement";
//import SalaryManagement from "./SalaryManagement";
//import AdminView from "./AdminView";


//import ViewDetails from "./ViewDetails";
//import { SearchBar } from "./SearchBar";

import { useLocation } from "react-router-dom";

import "./css/EmployeeHome.css";

function EmployeeHome() {
  const [ceoDetails, setCEODetails] = useState([]);
  const [managerDetails, setManagerDetails] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location State:", location.state);

  useEffect(() => {
    // Fetch CEO details
    /*axios
      //.get("http://localhost:8000/getEmployeeByPosition", {
      .get("api/employee/getEmployeeByPosition", {
        params: {
          position: "ceo",
        },
      })
      .then((response) => {
        const ceoDetails = response.data; // Take all items
        console.log("CEO Details", ceoDetails);
        setCEODetails(ceoDetails);
      })
      .catch((error) => {
        console.error("Error fetching CEO details:", error);
      });*/


      // Fetch CEO details
      axios
      //.get("http://localhost:8000/getEmployeeByPosition?position=ceo")
      .get("http://localhost:8000/api/employee/getEmployeeByPosition?position=ceo")
      .then((response) => {
        const ceoDetails = response.data;
        console.log("CEO Details", ceoDetails);
        setCEODetails(ceoDetails);
      })
      .catch((error) => {
        console.error("Error fetching CEO details:", error);
      });
    // Fetch Manager details
    axios
      //.get("http://localhost:8000/getEmployeeByPosition?position=manager")
      .get("http://localhost:8000/api/employee/getEmployeeByPosition?position=manager")
      .then((response) => {
        const managerDetails = response.data;
        console.log("Manager Details", managerDetails);
        setManagerDetails(managerDetails);
      })
      .catch((error) => {
        console.error("Error fetching Manager details:", error);
      });
  }, []);

  const handleButtonClick = (position, details) => {
    // Navigate to ViewDetails.js with personDetails as state
    navigate("/view-details", { state: { position, details } });
  };

  return (
    <div className="homepage">
      <div className="homepage-button-div">
        <Link to="/login">
          <button className="homepage-login-btn">Login Page</button>
        </Link>
       
      </div>
      <div className="homepage-form-container-home">
        <h2>Directory Details</h2>
        {ceoDetails.map((detail, index) => (
          <div
            key={index}
            className="homepage-button-as-div"
            onClick={() => handleButtonClick("ceo", detail)}
          >
            <button className="homepage-login-button">
              <div>
                View CEO Details
                <p>Name: {detail.firstName + " " + detail.lastName}</p>
                <p>Email: {detail.email}</p>
                <p>Address: {detail.address}</p>
              </div>
            </button>
          </div>
        ))}
        {managerDetails.map((detail, index) => (
          <div
            key={index}
            className="homepage-button-as-div"
            onClick={() => handleButtonClick("manager", detail)}
          >
            <button className="homepage-login-button">
              <div>
                View Manager Details
                <p>Name: {detail.firstName + " " + detail.lastName}</p>
                <p>Email: {detail.email}</p>
                <p>Address: {detail.address}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
      
      
      
      
      <div>
        <Link to="/admin-view">
          <button className="homepage-login-button">View</button>
        </Link>
        <Link to="/employee-leaving"><button className="homepage-login-button"> LeaveManagement</button></Link>
        <Link to="/salary-management"><button className="homepage-login-button">SalaryManagement </button></Link>
        
      </div>



    </div>
  );
}

export default EmployeeHome;


