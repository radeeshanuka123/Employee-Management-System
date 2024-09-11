
import React from "react";
import {Link } from "react-router-dom";





import  './css/EmployeeNavbar.css'

function EmployeeNavbar() {

  

  const logOut = () => {
		window.localStorage.clear();
		window.location.href = "/employee-home";
	};


  return (
    <div className="navbar-container">

     

      <Link to="/employee-home"><button className='nav-button'>Home</button></Link>
      <Link to='/employee-signup'><button className='nav-button'>Sign Up</button></Link>
      <Link to="/employee-salary-management"><button className='nav-button'>Salary Management</button></Link>
      <Link to="/employee-leaving"><button className='nav-button'>Leave Management</button></Link>
      

      <button onClick={logOut} className="nav-button">Logout</button>


    </div>
  )
}

export default EmployeeNavbar