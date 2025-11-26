import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Center: Navigation Menu */}
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>TopProduct</li>
        <li> <Link to="/brand">Brand</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Search Container */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="search-icon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>

      {/* Right: Phone and Email */}
      <div className="navbar-right">
        <a href="tel:+1234567890" className="contact-info phone-link">
          <div className="icon-wrapper">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <span className="contact-text">+ (251) 911 517 628</span>
        </a>

        <a href="mailto:info@example.com" className="contact-info email-link">
          <div className="icon-wrapper">
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <span className="contact-text">Pro2actives@gmail.com</span>
        </a>

        {/* Sign In Button */}
        <button 
          className="contact-info sign-in-button" 
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;