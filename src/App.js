// import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import EmployeeHome from "./components/EmployeeManagement/EmployeeHome";
import EmployeeLogin from "./components/EmployeeManagement/EmployeeLogin";
import EmployeeSignup from "./components/EmployeeManagement/EmployeeSignup";

import EmployeeProfileView from "./components/EmployeeManagement/EmployeeProfileView";
import EmployeeViewDetails from "./components/EmployeeManagement/EmployeeViewDetails";
import EmployeeEdit from "./components/EmployeeManagement/EmployeeEdit";
import EmployeeAdminView from "./components/EmployeeManagement/EmployeeAdminView";
import EmployeeAdminUpdate from "./components/EmployeeManagement/EmployeeAdminUpdate";

import EmployeeSalaryManagement from "./components/EmployeeManagement/EmployeeSalaryManagement";
import EmployeeLeaveManagement from "./components/EmployeeManagement/EmployeeLeaveManagement";




import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<EmployeeLogin />} />
          <Route path="/signup" element={<EmployeeSignup />} />
          <Route path="/employeemanagement" element={<EmployeeHome />} />
          <Route path="/profile-view" element={<EmployeeProfileView />} />
          <Route path="/view-details" element={<EmployeeViewDetails />} />
          <Route path="/employee-edit:id" element={<EmployeeEdit />} />
          <Route path="/admin-view" element={<EmployeeAdminView />} />
          <Route path="/admin-update" element={<EmployeeAdminUpdate />} />
          <Route path="/salary-management" element={<EmployeeSalaryManagement />} />
          <Route path="/employee-leaving" element={<EmployeeLeaveManagement />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
