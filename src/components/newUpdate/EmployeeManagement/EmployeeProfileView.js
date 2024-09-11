// ProfileView.js
import React from "react";
import { useLocation } from "react-router-dom";

import './css/EmployeeProfileView.css'

export default function EmployeeProfileView() {
  const location = useLocation();
  const selectedEmployee = location.state ? location.state.employeeData : null;

  console.log("Location state:", location.state);
  console.log("Selected Employee:", selectedEmployee);

  if (!selectedEmployee) {
    return <div>No employee selected.</div>;
  }

  const logOut = () => {
		window.localStorage.clear();
		window.location.href = "/employee-home";
	};

  return (
    <>
    <button onClick={logOut} className="logout-button">Logout</button>
    <h2 className="profile-view-h2"> {selectedEmployee.empId}  Details</h2>

    <div className="profile-view-container">
      

      <table border="1" cellPadding="10"  cellSpacing="10" className="profile-view-table">
        <tbody className="profile-view-tbody">
        <tr className="profile-view-tr">
          <td className="profile-view-td">Employee Id: </td>
          <td className="profile-view-td">{selectedEmployee.empId}</td>
        </tr>
        <tr className="profile-view-tr">
          <td className="profile-view-td">Email: </td>
          <td className="profile-view-td">{selectedEmployee.email}</td>
        </tr>
        <tr className="profile-view-tr">
          <td className="profile-view-td">Full Name: </td>
          <td className="profile-view-td">
            {selectedEmployee.firstName + " " + selectedEmployee.lastName}
          </td>
        </tr>
        <tr className="profile-view-tr">
          <td className="profile-view-td">NIC Number: </td>
          <td className="profile-view-td">{selectedEmployee.nicNumber}</td>
        </tr>
        <tr  className="profile-view-tr">
          <td>Address: </td>
          <td>{selectedEmployee.address}</td>
        </tr>
        <tr  className="profile-view-tr">
          <td>Date Of Birth: </td>
          <td>{selectedEmployee.dob}</td>
        </tr>
        <tr  className="profile-view-tr">
          <td>Gender: </td>
          <td>{selectedEmployee.gender}</td>
        </tr>
        <tr  className="profile-view-tr">
          <td>Bank: </td>
          <td>{selectedEmployee.selectedBank}</td>
        </tr>
        <tr className="profile-view-tr">
          <td>Account Number: </td>
          <td>{selectedEmployee.accNum}</td>
        </tr>
        <tr className="profile-view-tr">
          <td>Position: </td>
          <td>{selectedEmployee.selectPosition}</td>
        </tr>
        <tr className="profile-view-tr">
          <td>Mobile Number: </td>
          <td>{selectedEmployee.mobileNumber}</td>
        </tr>
        <tr className="profile-view-tr">
          <td>Joining Date: </td>
          <td>{selectedEmployee.joiningDate}</td>
        </tr>

        <tr className="profile-view-tr">
          <td>Salary: </td>
          <td>
            <ul>
              {selectedEmployee.salaries.map((salary, index) => (
                <li key={index}>
                  Year-{salary.year} Month- {salary.month} Salary- {salary.totalSalary}
                </li>
              ))}
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
