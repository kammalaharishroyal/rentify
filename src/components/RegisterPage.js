// src/components/RegisterPage.js

import React from 'react';
import './RegisterPage.css';

function RegisterPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      mobile: data.get('mobile'),
      password: data.get('password'),
    });
  };
  

  return (
    <div className="register-container">
     
      <form onSubmit={handleSubmit} className="register-form">
        
        <div className="form-group">
        <h1>Sign Up</h1>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" id="mobile" name="mobile" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
        <p className="signin-link">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
