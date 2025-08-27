import React, { useState } from 'react';
import '../app.css';
import Form from './form';
import Details from './detail';
import {CustomFormContextProvider} from '../customContext/custom_form_context';

function App() {


  return (
    <CustomFormContextProvider>
      <div>
        <div className="main_container">
          <div className="header">
            <h2>Student Record System</h2>
            <div className="buttons">
              <button>Add Record</button>
              <button>View Record</button>
            </div>
          </div>
          <Form />
          <Details />
        </div>
      </div>
    </CustomFormContextProvider>
  );
}

export default App;