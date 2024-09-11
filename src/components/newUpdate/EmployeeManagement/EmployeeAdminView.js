
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/EmployeeAdminView.css";
import ProfileView from "./EmployeeProfileView";
import { EmployeeSearchBar } from "./EmployeeSearchBar";
import EmployeeSearchresultView from "./EmployeeSearchresultView";
import EmployeeNavbar from "./EmployeeNavbar";

function AdminView() {
  const [employeedata, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employee/getUsers")
      .then((response) => setEmployeeData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const onSearch = (query) => {
    const results = employeedata.filter((user) => {
      return (
        (user.empId &&
          user.empId.toLowerCase().includes(query.toLowerCase())) ||
        (user.email && user.email.toLowerCase().includes(query.toLowerCase()))
      );
    });
    setSearchResults(results);
  };

  const onSearchResultClick = (selectedEmp) => {
    navigate("/employee-profile-view", { state: { employeeData: selectedEmp } });
  };

  const onView = (empId) => {
    navigate("/employee-profile-view", {
      state: { employeeData: employeedata.find((user) => user.empId === empId) },
    });
  };

  const onView2 = (empId) => {
    navigate("/employee-admin-update", {
      state: { employeeData: employeedata.find((user) => user.empId === empId) },
    });
  };

  return (
    <>
      <br />
      <EmployeeNavbar />
      <EmployeeSearchBar className="search-bar" onSearch={onSearch} onSearchResultClick={onSearchResultClick} />
      <EmployeeSearchresultView searchResults={searchResults} onSearchResultClick={onSearchResultClick} className="search-result-view"  />
      <div className="view-container">
        <table border="1" cellSpacing="0" cellPadding="5" className="view-table">
          <thead className="view-thead">
            <tr className="view-tr">
              <th>Employee Id</th>
              <th>Email</th>
              <th>Password</th>
              <th>Nic Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Position</th>
              <th>Mobile Number</th>
              <th>Joining Date</th>
              <th>Bank</th>
              <th>Account Number</th>
              <th>Gender</th>
              <th>View Employee</th>
              <th>Update Employee</th>
              
            </tr>
          </thead>
          <tbody className="view-tbody">
            {employeedata.map((user) => (
              <tr key={user.empId} className="view-tr">
                <td>{user.empId}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.nicNumber}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.dob}</td>
                <td>{user.selectPosition}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.joiningDate}</td>
                <td>{user.selectedBank}</td>
                <td>{user.accNum}</td>
                <td>{user.gender}</td>
                
                <td>
                  <button value={user.empId} onClick={() => onView(user.empId)} className="view-btn">
                    View
                  </button>
                  </td>

                <td>
                  <button value={user.empId} onClick={() => onView2(user.empId)} className="view-btn">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedEmployee && <ProfileView employeeData={selectedEmployee} onClose={() => setSelectedEmployee(null)} />}
      </div>
    </>
  );
}

export default AdminView;
