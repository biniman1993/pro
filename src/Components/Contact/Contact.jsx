import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [activeSection, setActiveSection] = useState('office');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigationButtons = [
    { id: 'office', label: 'Office', icon: Building2 },
    { id: 'branches', label: 'Branches', icon: MapPin },
    { id: 'support', label: 'Technical Support', icon: Mail },
    { id: 'location', label: 'Location', icon: MapPin }
  ];

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <div className="header-content">
          <h1 className="main-title">Get in Touch</h1>
          <p className="subtitle">
            Any sort of Suggestions, queries, or complaints write to us.
          </p>
          <div className="quote-box">
            <div className="quote-icon">"</div>
            <p className="quote-text">
              The true measure of a company's success is the satisfaction of its clients - 
              at StarTech, we strive to exceed expectations every day.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="tab-navigation">
        <div className="tab-buttons">
          {navigationButtons.map((button) => (
            <button
              key={button.id}
              className={`tab-button ${activeSection === button.id ? 'active' : ''}`}
              onClick={() => scrollToSection(button.id)}
            >
              <button.icon className="tab-icon" />
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* All Content Sections - Visible by Default */}
      <div className="all-sections">
        {/* Office Section */}
        <section id="office" className="content-section">
          <h2 className="section-title">Office Information</h2>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon phone-icon">
                <Phone />
              </div>
              <h3>Phone</h3>
              <p>012 023-1678</p>
            </div>
            <div className="info-card">
              <div className="info-icon email-icon">
                <Mail />
              </div>
              <h3>E-Mail</h3>
              <p>info@itadstore.co.za</p>
            </div>
            <div className="info-card">
              <div className="info-icon address-icon">
                <MapPin />
              </div>
              <h3>Address</h3>
              <p>
                Unit 10 Display Gardens, 6 Sarel Baard Crescent, Gateway Industrial Park, 
                Rooihuiskraal, Centurion, 0154
              </p>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section id="branches" className="content-section">
          <h2 className="section-title">Branches</h2>
          <div className="info-cards">
            <div className="info-card branch-card">
              <div className="info-icon branch-icon">
                <Building2 />
              </div>
              <h3>U A E</h3>
              <div className="branch-details">
                <p><strong>Office #313</strong></p>
                <p>Al Nazr Plaza, Oud Metha</p>
                <p>Dubai</p>
                <p className="branch-tel">Tel: +971 4 33 04 125</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Support Section */}
        <section id="support" className="content-section">
          <h2 className="section-title">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="info@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="+88 - 00000000000"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Message subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Write Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                rows={5}
              />
            </div>
            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <Send className="button-icon" />
            </button>
          </form>
        </section>

        {/* Location Section */}
        <section id="location" className="content-section">
          <h2 className="section-title">Find Us on Map</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3586743382144!2d38.76371207501562!3d9.026984891029568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c2c8ed82a1%3A0x9f3c1c5c5c5c5c5c!2sKazanchis%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
