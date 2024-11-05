import React, { useState } from 'react';
import '../style/login.scss'; 
import '../App.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    autoLogin: false,
    saveId: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1 className="app-title">닥터푸드</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디를 입력해주세요."
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="options">
          <label>
            <input
              type="checkbox"
              name="autoLogin"
              checked={formData.autoLogin}
              onChange={handleChange}
            />
            자동 로그인
          </label>
          <label>
            <input
              type="checkbox"
              name="saveId"
              checked={formData.saveId}
              onChange={handleChange}
            />
            아이디 저장
          </label>
        </div>
        <div className="links">
          <button type="button" className="link-button">아이디 찾기</button> | 
          <button type="button" className="link-button">비밀번호 찾기</button>
        </div>
        <button type="submit" className="login-button">로그인</button>
        <button type="button" className="signup-button">회원가입</button>
      </form>
    </div>
  );
};

export default Login;
