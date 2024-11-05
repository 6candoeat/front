// App.jsx 또는 비슷한 메인 컴포넌트
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import RegistrationTypeSelect from './pages/RegistrationTypeSelect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/registration' element={<RegistrationTypeSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
