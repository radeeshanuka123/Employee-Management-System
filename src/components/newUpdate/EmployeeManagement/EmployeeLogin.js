import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./css/EmployeeLogin.css";

function EmployeeLogin() {
  const history = useNavigate();

  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      //const response = await axios.post("http://localhost:8000/login", {
      const response = await axios.post("http://localhost:8000/api/employee/login", {
        empId,
        password,
      });

      if (response.data === "notexist") {
        alert("User has not signed up");
      } else if (response.data === "fail") {
        alert("Wrong details");
      } else {
        // Redirect to admin or employee
        if (empId === "admin" && password === "admin@123") {
          history("/employee-admin-view");
        } else {
          history("/employee-profile-view", {
            state: { employeeData: response.data },
          });
        }
      }
    } catch (error) {
      alert("Error during login");
      console.error(error);
    }
  };


  return (
    <>
      {/*<div className="login-div">
        <Link to="/signup">
          <button className="login-btn">Sign Up</button>
        </Link>
  </div>*/}

      <div className="login-container">
        <div className="">
          <div className="">
            <form className="">
              <div className="">
                <input type="text"  className="login-input"  onChange={(e) => setEmpId(e.target.value)}  placeholder="Employee ID"/>
              </div>
              <div className="login-field">
                <input type="password"  className="login-input"  onChange={(e) => setPassword(e.target.value)}  placeholder="Password"  />
              </div>

              <input  type="submit"  onClick={handleLogin} className="login-submit-btn" />

              <Link to="/employee-home/">
                <button className="login-submit-btn">Back</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmployeeLogin;
