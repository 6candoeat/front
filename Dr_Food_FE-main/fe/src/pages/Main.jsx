import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import RegistrationTypeSelect from './RegistrationTypeSelect';
import '../style/main.scss'; 
import '../App.css';

export default function Main() {
  return (
    <div className="app-container">
      <img src="/assets/logo.png" alt="logo" className="logo" />
      <div className="main-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/registration' element={<RegistrationTypeSelect />} />
        </Routes>
      </div>
    </div>
  );
}
