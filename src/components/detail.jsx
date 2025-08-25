import React, { useState } from 'react';
import data from '../data.json'
function Details() {
  const { name, email, phone, addresses } = data;
  const [temporaryAddress, permanentAddress] = addresses;
  const { province, district, municipality, ward, tole, addressType } = temporaryAddress;
  const { province: pProvince, district: pDistrict, municipality: pMunicipality, ward: pWard, tole: pTole, addressType: pAddressType } = permanentAddress;

  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetail = () => {
    setShowDetails(!showDetails);
  };
  return(
    <div className="container">
      <div className="header">
        <h2>Student Record System</h2>
        <div className="buttons">
          <button>Add Record</button>
          <button onClick={handleViewDetail}>View Record</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <td>1</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td><button className="action-btn" onClick={handleViewDetail}>View Detail</button></td>
          //only able to view the given data i.e available in data.json
        </tbody>
      </table>
      {showDetails && (
      <div>
        <h3>Addresses:</h3>
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
            <tr>
              <td>{province}</td>
              <td>{district}</td>
              <td>{municipality}</td>
              <td>{ward}</td>
              <td>{tole}</td>
              <td>{addressType}</td>
            </tr>
            <tr>
              <td>{pProvince}</td>
              <td>{pDistrict}</td>
              <td>{pMunicipality}</td>
              <td>{pWard}</td>
              <td>{pTole}</td>
              <td>{pAddressType}</td>
            </tr>
          </tbody>
        </table>
      </div>
      )
    }
    </div>
    
  ) 
    
    
    
  
}

export default Details