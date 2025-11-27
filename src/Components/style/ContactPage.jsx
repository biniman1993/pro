import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Headphones, Shield, Zap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import "./ContactPage.css";
import Navbar from '../Navbar/Navbar';
import TopMenu from '../TopMenu/TopMenu';



const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
       <Navbar />
       <TopMenu />
    <div className="contact-page">
      <section className="contact-hero-section">
        <div className="animated-background">
          <div className="gradient-wave wave-1"></div>
          <div className="gradient-wave wave-2"></div>
          <div className="gradient-wave wave-3"></div>
        </div>

        <div className="floating-devices">
          <div className="device device-1"></div>
          <div className="device device-2"></div>
          <div className="device device-3"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">We're here to help with all your technology needs</p>
          <button className="cta-button">
            Contact Us Now
            <span className="button-glow"></span>
          </button>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="info-grid">
            <div className="map-illustration">
              <div className="map-pin-container">
                <MapPin className="map-pin-icon" />
                <div className="pin-pulse"></div>
              </div>
              <div className="connection-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon phone-icon">
                  <Phone />
                </div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>

              <div className="contact-card">
                <div className="card-icon email-icon">
                  <Mail />
                </div>
                <h3>Email Us</h3>
                <p>info@proactivetrading.com</p>
                <p>support@proactivetrading.com</p>
              </div>

              <div className="contact-card">
                <div className="card-icon location-icon">
                  <MapPin />
                </div>
                <h3>Visit Us</h3>
                <p>123 Technology Boulevard</p>
                <p>Tech City, TC 12345</p>
              </div>

              <div className="contact-card social-card">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon"><Facebook /></a>
                  <a href="#" className="social-icon"><Twitter /></a>
                  <a href="#" className="social-icon"><Linkedin /></a>
                  <a href="#" className="social-icon"><Instagram /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={focusedField === 'name' || formData.name ? 'has-value' : ''}
                />
                <label className={focusedField === 'name' || formData.name ? 'floating' : ''}>
                  Your Name
                </label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={focusedField === 'email' || formData.email ? 'has-value' : ''}
                />
                <label className={focusedField === 'email' || formData.email ? 'floating' : ''}>
                  Email Address
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  className={focusedField === 'phone' || formData.phone ? 'has-value' : ''}
                />
                <label className={focusedField === 'phone' || formData.phone ? 'floating' : ''}>
                  Phone Number
                </label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={focusedField === 'subject' || formData.subject ? 'has-value' : ''}
                />
                <label className={focusedField === 'subject' || formData.subject ? 'floating' : ''}>
                  Subject
                </label>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                required
                rows={5}
                className={focusedField === 'message' || formData.message ? 'has-value' : ''}
              />
              <label className={focusedField === 'message' || formData.message ? 'floating' : ''}>
                Your Message
              </label>
            </div>

            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <Send className="send-icon" />
              <span className="button-pulse"></span>
            </button>
          </form>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Proactive Trading?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Headphones />
              </div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance for all your tech needs</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Shield />
              </div>
              <h3>Warranty Protection</h3>
              <p>Comprehensive coverage on all products</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Zap />
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick and secure shipping worldwide</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
     </div>
    
  );
};

export default ContactPage;
