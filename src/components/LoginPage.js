// src/components/LoginPage.js

import React from 'react';
import './LoginPage.css';

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign In</h1>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="submit-button">Sign In</button>
        <p className="signup-link">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
