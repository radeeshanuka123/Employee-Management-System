import React from "react";

import "./css/EmployeeSearchresultView.css";

const EmployeeSearchresultView = ({ searchResults, onSearchResultClick }) => {
  return (
    <div className="employee-search-result-view-container">
      {searchResults.length === 0 ? (
        <div>No results found.</div>
      ) : (
        searchResults.map((searchResult, empId) => (
          <div key={empId} onClick={() => onSearchResultClick(searchResult)}>
            <table border="1" className="employee-search-result-table">
              <tbody className="employee-search-result-tbody">
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Employee Id: </td>
                  <td>{searchResult.empId}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Email: </td>
                  <td>{searchResult.email}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Full Name: </td>
                  <td>
                    {searchResult.firstName + " " + searchResult.lastName}
                  </td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">NIC Number: </td>
                  <td>{searchResult.nicNumber}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Address: </td>
                  <td>{searchResult.address}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td" >Contact Number: </td>
                  <td>{searchResult.contactNumber}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Date Of Birth: </td>
                  <td>{searchResult.dob}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Gender: </td>
                  <td>{searchResult.gender}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Bank: </td>
                  <td>{searchResult.selectedBank}</td>
                </tr>
                
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Mobile Number: </td>
                  <td>{searchResult.mobileNumber}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Account Number: </td>
                  <td>{searchResult.accNum}</td>
                </tr>
                <tr className="employee-search-result-tr">
                  <td className="employee-search-result-td">Position: </td>
                  <td>{searchResult.selectPosition}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default EmployeeSearchresultView;
