import React, { useState } from 'react';
import '../app.css';
import Form from './form';
import Details from './detail';
import { FormContext } from './form';
import data from '../data.json';

function App() {
  const [submittedData, setSubmittedData] = useState([data]);

  return (
    <FormContext.Provider value={{ submittedData }}>
      <div>
        <div className="main_container">
          <div className="header">
            <h2>Student Record System</h2>
            <div className="buttons">
              <button>Add Record</button>
              <button>View Record</button>
            </div>
          </div>
          <Form setSubmittedData={setSubmittedData} />
          <Details />
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default App;