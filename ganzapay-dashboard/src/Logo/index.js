import './index.css'
import React from 'react';

import image from './images/image.png'; // Adjusted for a subdirectory



const MyComponent = () => {
    return (
      <div className='logo'>
        <img src={image} alt="GanzaPay Logo" className='logo' />
        <h1>GanzaPay</h1>
        <div className='statistics'>
          <h1>Statistics</h1>
        </div>
      </div>
    );
  };
 export default MyComponent