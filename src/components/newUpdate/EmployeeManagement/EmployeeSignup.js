import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./css/EmployeeSignup.css";

function EmployeeSignup() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    empId: "",
    firstName: "",
    lastName: "",
    address: "",
    dob: "",
    selectedBank: "",
    accNum: "",
    selectPosition: "",
    nicNumber: "",
    gender: "",
    mobileNumber: "",
    joiningDate: "",
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handlePosition = (e) => {
    setFormData({ ...formData, selectPosition: e.target.value });
  };

  const handleBankChange = (e) => {
    setFormData({ ...formData, selectedBank: e.target.value });
  };

  async function submit(e) {
    e.preventDefault();

    try {
      const formDataObject = new FormData();
      for (let key in formData) {
        formDataObject.append(key, formData[key]);
      }

      await axios
        //.post("http://localhost:8000/signup", formDataObject)
        .post("http://localhost:8000/api/employee/signup", formDataObject)
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/employee-login");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="login-div">
        <Link to="/employee-login">
          <button className="login-btn"> Login</button>
        </Link>
      </div>
      <div>
        <h1 className="heading">Add Employee</h1>
      </div>

      <div className="form-container">
        <div className="left-container">
          <h3 className="form-h3">Personal Details</h3>

          <form action="POST" onSubmit={submit} >
  <div>
    <div className="form-field">
      <label>Employee Id:</label>
      <input type="text" name="empId" value={formData.empId} onChange={handleChange} placeholder="Employee Id" className="form-input"/>
    </div>
     <div className="form-field">
      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-input"/>
    </div>
    <div className="form-field">

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-input"/>
    </div>
    <div className="form-field">
      <label>First Name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="form-input"/>
    </div>
    <div className="form-field">
      <label>Last Name:</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="form-input"/>
    </div>
    <div className="form-field">
      <label>Address:</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="form-input"/>
    </div>
    <div className="form-field">
      <label>Date of Birth:</label>
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-input"/>
    </div>
    <div className="form-field">
      <label>NIC Number:</label>
      <input type="text" name="nicNumber" value={formData.nicNumber} onChange={handleChange} placeholder="Nic Number" className="form-input"/>
    </div>
    <div className="form-field">
      <label>Gender:</label>
      Male:<input type="radio" value="Male" name="genderGroup" checked={formData.gender === "Male"} onChange={handleRadioChange} />
      Female:<input type="radio" value="Female" name="genderGroup" checked={formData.gender === "Female"} onChange={handleRadioChange} />
    </div>

    
   
    <div className="form-field">
      <label>Position:</label>
      <select name="selectPosition" value={formData.selectPosition} onChange={handlePosition} className="form-input">
        <option value="">Select a position</option>
        <option value="ceo">CEO</option>
        <option value="manager">Manager</option>
        <option value="sectional-manager">Sectional Manager</option>
        <option value="hr-manager">HR Manager</option>
        <option value="administrative">Administrative</option>
        <option value="receptionist">Receptionist</option>
        <option value="accountant">Accountant</option>
        <option value="room-service">Room Service</option>
        <option value="maintainance">Maintainance</option>
        <option value="security">Security</option>
        <option value="cook">Cook</option>
        <option value="waiter">Waiter</option>
        <option value="chef">Chef</option>
        <option value="kitchen-helper">Kitchen Helper</option>
        <option value="driver">Driver</option>
      </select>
    </div>
    <div className="form-field">
      <label>Select Bank:</label>
      <select name="selectedBank" value={formData.selectedBank} onChange={handleBankChange} className="form-input">
        <option value="">Select a bank</option>
        <option value="bank_of_ceylone">Bank of Ceylon</option>
        <option value="people's_bank">People's Bank</option>
        <option value="citibank">Citibank</option>
        <option value="commrcial_bank">Commercial Bank</option>
        <option value="hatton_national_bank">Hatton National Bank</option>
      </select>
    </div>
    <div className="form-field">
      <label>Account Number:</label>
      <input type="text" name="accNum" value={formData.accNum} onChange={handleChange} placeholder="Account Number" className="form-input"/>
    </div>
  </div>
  <input type="submit" className="submit-btn" />
  {/*<input type="reset" value="Reset" className="reset-btn" />*/}

          <Link to="/employee-home">
            <button className="home-button">Home</button>
          </Link>

  
      </form>

        </div>

        
      </div>
    </>
  );
}

export default EmployeeSignup;
