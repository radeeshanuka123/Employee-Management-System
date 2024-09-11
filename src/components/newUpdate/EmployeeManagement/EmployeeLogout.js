import React ,{Component,useEffect,useState} from "react";
import './css/EmployeeLogout.css'

export default function EmployeeLogout(){
	
	const logOut = () => {
		window.localStorage.clear();
		window.location.href = "./employee-home";
	};

    return (    
        <div className="logout-div">   
            <button onClick={logOut} className="logout-btn">Logout</button>
        </div>
    );
}