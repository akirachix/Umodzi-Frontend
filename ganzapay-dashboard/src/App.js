import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import CustomerCare from './Customercare';
import './App.css';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <CustomerCare />
      </div>
    </BrowserRouter>
  );
}

export default App;
