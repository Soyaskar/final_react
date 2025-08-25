import React from 'react'
import data from '../data.json'
import '../app.css'
import Form from './form'
import Details from './detail'

function App() {
  return(
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
  )
}

export default App
