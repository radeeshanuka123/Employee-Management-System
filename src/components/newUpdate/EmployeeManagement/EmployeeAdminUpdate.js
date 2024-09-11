

import React, { useState, useEffect } from 'react'

import axios from 'axios'

import "./css/EmployeeAdminUpdate.css";


function EmployeeAdminUpdate() {

  const [editsection, seteditsection] = useState("")

  const [formData, setFormData] = useState({
    empId: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    dob: '',
    selectedBank: '',
    accNum: '',
    selectPosition: '',
    nicNumber: '',
    gender: '',
    mobileNumber: '',
    joiningDate: '',
  });

  const [formDataEdit, setFormDataEdit] = useState({
    empId: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    dob: '',
    selectedBank: '',
    accNum: '',
    selectPosition: '',
    nicNumber: '',
    gender: '',
    mobileNumber: '',
    joiningDate: '',
    _id: '',
  });



  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    });
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.put("http://localhost:8000/api/employee/update", formDataEdit);
      if (data.data.success) {
        getFetchData();
        alert(data.data.message);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const getFetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/employee/getUsers");
      console.log(response);
      if (response.data.success) {
        setFormData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleRadioChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handlePosition = (e) => {
    setFormData({ ...formData, selectPosition: e.target.value });
  };

  const handleBankChange = (e) => {
    setFormData({ ...formData, selectedBank: e.target.value });
  };




  const handleUpdate = async (e) => {
    e.preventDefault()
    const data = await axios.put("/http://localhost:8000/api/employee/update", formDataEdit)

    if (data.data.success) {
      getFetchData()
      alert(data.data.message)

    }


  }




  return (
    <div>
    
      <div>
        <h1 className="heading">Update Employee</h1>
      </div>
      <div className="form-container">

      <div className="left-container">
        <h3 className="form-h3">Personal Details</h3>

        <form action="POST" onSubmit={handleSubmit} className='update-form'>
          <div>
            <div className="form-field">
              <label>Employee Id:</label>
              <input type="text" name="empId" value={formData.empId} onChange={handleChange} placeholder="Employee Id" className="form-input" />
            </div>
            <div className="form-field">
              <label>Password:</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="form-input" />
            </div>
            <div className="form-field">

              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-input" />
            </div>
            <div className="form-field">
              <label>First Name:</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="form-input" />
            </div>
            <div className="form-field">
              <label>Last Name:</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="form-input" />
            </div>
            <div className="form-field">
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="form-input" />
            </div>
            <div className="form-field">
              <label>Date of Birth:</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-field">
              <label>NIC Number:</label>
              <input type="text" name="nicNumber" value={formData.nicNumber} onChange={handleChange} placeholder="Nic Number" className="form-input" />
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
              <input type="text" name="accNum" value={formData.accNum} onChange={handleChange} placeholder="Account Number" className="form-input" />
            </div>
          </div>

          <button type="submit" onClick={handleUpdate} className="submit-btn">Update</button>





        </form>

      </div>


    </div>
    </div>

  )
}

export default EmployeeAdminUpdate


