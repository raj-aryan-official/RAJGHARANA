import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        {submitted ? (
          <p className="success-msg">If your email exists, a reset link has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="forgot-password-form">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
            <button type="submit">Send Reset Link</button>
          </form>
        )}
        <a href="/login" className="back-login">Back to Login</a>
      </div>
    </div>
  );
};

export default ForgotPassword;
