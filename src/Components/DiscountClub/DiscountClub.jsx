import React, { useState } from 'react';
import './DiscountClub.css';

const DiscountClub = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="discount-club">
      <div className="discount-content">
        <h1 className="discount-title">JOIN OUR DISCOUNT CLUB NOW</h1>
        <p className="discount-subtitle">
          Sign up now and start saving on the tech you love!
        </p>
        <div className="discount-feature">
          <p>* Get a 10% discount on your first purchase and start earning loyalty points!</p>
        </div>
        <form onSubmit={handleSubmit} className="discount-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="email-input"
          />
          <button type="submit" className="join-button">
            Join Our Club
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiscountClub;