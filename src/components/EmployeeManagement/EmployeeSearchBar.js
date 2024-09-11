import React,{useState} from "react";
import {FaSearch} from "react-icons/fa"
import './css/SearchBar.css'
import {  Link } from "react-router-dom";

export const EmployeeSearchBar = ({data,onSearch})=> {

    const [searchInput, setSearchInput] = useState("");

    const handleSerach = () => {
      onSearch(searchInput);
    }

    
    

    return (
      <div className="input-wrapper">
        <div className="login-div">
        <Link to="/signup">
          <button className="login-btn">Sign Up</button>
        </Link>
        </div>
        <input
          placeholder="Type to search.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        className="input"/>
        <button onClick={handleSerach} className="searchBar-search-btn">
          <FaSearch id="search-icon" />
        </button>
      </div>
    );
}