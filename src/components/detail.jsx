import React, { useContext, useState } from 'react';
import { CustomFormContext } from '../customContext/custom_form_context';

function Details() {
  const [showDetails, setShowDetails] = useState({});
  const {submittedData} = useContext(CustomFormContext)
  console.log("in detaila : ", submittedData)

  const handleViewDetail = (index) => {
    setShowDetails(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Student Record System</h2>
        <div className="buttons">
          <button>Add Record</button>
          <button>View Record</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Citizenship</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { submittedData && submittedData.map((record, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{record.citizenship || 'N/A'}</td>
              <td>
                <button 
                  className="action-btn" 
                  onClick={() => handleViewDetail(index)}
                >
                  {showDetails[index] ? 'Hide Detail' : 'View Detail'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {submittedData.map((record, index) => (
        showDetails[index] && (
          <div key={index}>
            <h3>Addresses for {record.name}:</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Province</th>
                  <th>District</th>
                  <th>Municipality</th>
                  <th>Ward</th>
                  <th>Tole</th>
                  <th>Address Type</th>
                </tr>
              </thead>
              <tbody>
                {record.addresses.map((address, addrIndex) => (
                  <tr key={addrIndex}>
                    <td>{address.province}</td>
                    <td>{address.district}</td>
                    <td>{address.municipality}</td>
                    <td>{address.ward}</td>
                    <td>{address.tole}</td>
                    <td>{address.addressType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ))}
    </div>
  )
}

export default Details