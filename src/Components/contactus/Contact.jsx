import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Youtube, url: '#', label: 'YouTube' }
  ];

  return (
    <div className="contact-page">
      {/* Header Section */}
      <section
        className={`contact-header ${isVisible.header ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current.header = el)}
      >
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

      {/* Contact Form & Info Section */}
      <section className="contact-content">
        <div className="content-wrapper">
          {/* Contact Form */}
          <div
            className={`form-container ${isVisible.form ? 'visible' : ''}`}
            ref={(el) => (sectionRefs.current.form = el)}
          >
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
          </div>

          {/* Office Information */}
          <div
            className={`info-container ${isVisible.info ? 'visible' : ''}`}
            ref={(el) => (sectionRefs.current.info = el)}
          >
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
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className={`map-section ${isVisible.map ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current.map = el)}
      >
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

      {/* Social Media Section */}
      <section
        className={`social-section ${isVisible.social ? 'visible' : ''}`}
        ref={(el) => (sectionRefs.current.social = el)}
      >
        <h2 className="section-title">Connect With Us</h2>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="social-link"
              aria-label={social.label}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
