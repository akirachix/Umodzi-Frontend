
import './index.css';
import React, { useState } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { HiChevronDown } from "react-icons/hi";
const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Settings</h1>
      <div className='container'>
        <div className='heading'>
          <h2>Accounts</h2>
          <div className='customer'>
            <div className='icon'>
              <IoPersonCircleOutline />
              <p> Customer Name</p>
            </div>

   <div className='drop1'>
      <HiChevronDown />
        </div>

    </div>
      <div className='language'>
        <div className='icon-language'>
          <GrLanguage />
          <p>Language</p>
        </div>
        
        <div className='select-container'>
            <select value={selectedLanguage} onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="Kinyarwanda">Kinyarwanda</option>
            </select>
            </div>
      
          </div>
          <div className='notify'>
            <div className='icon-notify'>
              <IoIosNotifications />
              <p>Notifications</p>
            </div>

            <div className='drop2'>
            <HiChevronDown />
            </div>
            <br/>
          </div>

<div className='mode'>
        <div className='toggle-container'>
          <p>Dark Mode</p>
          <div className={`toggle-switch ${darkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
            <div className='slider'></div>
          </div>
        </div>
      </div>

          
        </div>
      </div>
    </div>
  );
}
export default Settings;

