import React from "react";

const EmployeeSearchresultView = ({ searchResults, onSearchResultClick }) => {
  return (
    <>
      {searchResults.length === 0 ? (
        <div>No results found.</div>
      ) : (
        searchResults.map((searchResult, empId) => (
          <div key={empId} onClick={() => onSearchResultClick(searchResult)}>
            <table border="1">
              <tbody>
                <tr>
                  <td>Employee Id: </td>
                  <td>{searchResult.empId}</td>
                </tr>
                <tr>
                  <td>Email: </td>
                  <td>{searchResult.email}</td>
                </tr>
                <tr>
                  <td>Full Name: </td>
                  <td>
                    {searchResult.firstName + " " + searchResult.lastName}
                  </td>
                </tr>
                <tr>
                  <td>NIC Number: </td>
                  <td>{searchResult.nicNumber}</td>
                </tr>
                <tr>
                  <td>Address: </td>
                  <td>{searchResult.address}</td>
                </tr>
                <tr>
                  <td>Contact Number: </td>
                  <td>{searchResult.contactNumber}</td>
                </tr>
                <tr>
                  <td>Date Of Birth: </td>
                  <td>{searchResult.dob}</td>
                </tr>
                <tr>
                  <td>Gender: </td>
                  <td>{searchResult.gender}</td>
                </tr>
                <tr>
                  <td>Bank: </td>
                  <td>{searchResult.selectedBank}</td>
                </tr>
                <tr>
                  <td>Account Number: </td>
                  <td>{searchResult.accNum}</td>
                </tr>
                <tr>
                  <td>Position: </td>
                  <td>{searchResult.selectPosition}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))
      )}
    </>
  );
};

export default EmployeeSearchresultView;
