import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import TopMenu from '../TopMenu/TopMenu';
import Footer from '../Navbar/Footer/Footer';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <Navbar />
      <TopMenu />
      
      <div className="login-content">
        <div className="login-container">
          <div className="login-header-content">
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">Sign in to your account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">
                <Mail size={16} />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="login-form-input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="login-form-group">
              <label htmlFor="password" className="login-form-label">
                <Lock size={16} />
                <span>Password</span>
              </label>
              <div className="login-password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="login-form-input"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="login-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="login-form-footer">
              <a href="#" className="login-forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="login-submit-btn">
              Sign In
            </button>
          </form>

          <div className="login-divider">
            <span>or continue with</span>
          </div>

          <div className="login-social-buttons">
            <button className="login-social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              </svg>
              Google
            </button>
            <button className="login-social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>

          <div className="login-signup-link">
            Don't have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default Login;