import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Success message
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const infoCards = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free Shipping for orders over $120'
    },
    {
      icon: '💳',
      title: 'Online Payment',
      description: 'We Support Online Payment'
    },
    {
      icon: '💰',
      title: 'Money Return',
      description: '30 Days money return'
    },
    {
      icon: '🎧',
      title: '24/7 Support',
      description: 'Friendly 24/7 customer support'
    }
  ];

  const aboutLinks = [
    'About Us',
    'Store Location',
    'Contact',
    'Orders tracking'
  ];

  const helpLinks = [
    'Size Guide',
    'FAQs',
    'Terms & Conditions',
    'Contact Us'
  ];

  const socialLinks = [
    { icon: '📘', href: '#', label: 'Facebook' },
    { icon: '📸', href: '#', label: 'Instagram' },
    { icon: '🐦', href: '#', label: 'Twitter' },
    { icon: '💼', href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      {/* Info Cards Section */}
      <div className="footer-info-section">
        <div className="footer-container">
          <div className="info-cards">
            {infoCards.map((card, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{card.icon}</div>
                <div>
                  <h3 className="info-title">{card.title}</h3>
                  <p className="info-description">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <h2 className="footer-logo">Unique Business Systems</h2>
              <p className="footer-description">
                Your trusted partner for technology solutions and services in Bangladesh. 
                We provide comprehensive IT support and innovative business solutions.
              </p>
              <div className="footer-contact">
                <p>📍 Dhaka, Bangladesh</p>
                <p>📧 info@uniquebusiness.com</p>
                <p>📞 +880 1234-567890</p>
              </div>
            </div>

            {/* Get to Know Us */}
            <div className="footer-column">
              <h3 className="footer-heading">Get to Know Us</h3>
              <ul className="footer-links">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Let us Help You */}
            <div className="footer-column">
              <h3 className="footer-heading">Let us Help You</h3>
              <ul className="footer-links">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div className="footer-column">
              <h3 className="footer-heading">Contact Us</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="form-textarea"
                  rows="3"
                />
                <button type="submit" className="form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods and Social Links */}
      <div className="footer-bottom-section">
        <div className="footer-container">
          <div className="footer-bottom">
            <div className="payment-methods">
              <span className="payment-label">We Accept:</span>
              <div className="payment-icons">
                <span>💳</span>
                <span>💰</span>
                <span>🏦</span>
                <span>📱</span>
              </div>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="footer-container">
          <p>© 2024 Unique Business Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
