import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Send, Clock, Users, MessageCircle, Globe, Award, CheckCircle } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
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
    { id: 'support', label: 'Support', icon: Mail },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'team', label: 'Our Team', icon: Users },
    { id: 'faq', label: 'FAQ', icon: MessageCircle }
  ];

  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Sales Manager', email: 'sarah@startech.com', phone: '+1 234 567 890' },
    { name: 'Mike Chen', role: 'Technical Lead', email: 'mike@startech.com', phone: '+1 234 567 891' },
    { name: 'Emma Davis', role: 'Customer Support', email: 'emma@startech.com', phone: '+1 234 567 892' },
    { name: 'Alex Rodriguez', role: 'Project Manager', email: 'alex@startech.com', phone: '+1 234 567 893' }
  ];

  const faqItems = [
    { question: 'What are your business hours?', answer: 'We are available Monday to Friday, 9:00 AM to 6:00 PM EST.' },
    { question: 'Do you offer 24/7 support?', answer: 'Yes, we provide 24/7 technical support for all our enterprise clients.' },
    { question: 'How quickly do you respond to inquiries?', answer: 'We typically respond within 2 hours during business hours.' },
    { question: 'Do you offer custom solutions?', answer: 'Absolutely! We specialize in creating tailored solutions for our clients.' }
  ];

  const stats = [
    { value: '24/7', label: 'Support Available', icon: Clock },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '2h', label: 'Avg Response Time', icon: CheckCircle },
    { value: '50+', label: 'Countries Served', icon: Globe }
  ];

  return (
    <div className="contact-page">
      {/* Enhanced Header Section */}
      <section className="contact-header">
        <div className="header-content">
          <div className="header-badge">Get in Touch</div>
          <h1 className="main-title">Let's Build Something <span className="gradient-text">Amazing</span> Together</h1>
          <p className="subtitle">
            Your vision, our expertise. Let's create extraordinary solutions that drive your business forward.
          </p>
          
          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Navigation */}
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

      {/* All Content Sections */}
      <div className="all-sections">
        {/* Enhanced Office Section */}
        <section id="office" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Office Information</h2>
            <p className="section-subtitle">Reach out to us through any of these channels</p>
          </div>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon phone-icon">
                <Phone />
              </div>
              <h3>Phone</h3>
              <p>012 023-1678</p>
              <div className="card-badge">Primary</div>
            </div>
            <div className="info-card">
              <div className="info-icon email-icon">
                <Mail />
              </div>
              <h3>E-Mail</h3>
              <p>info@itadstore.co.za</p>
              <div className="card-badge">Fast Response</div>
            </div>
            <div className="info-card">
              <div className="info-icon address-icon">
                <MapPin />
              </div>
              <h3>Address</h3>
              <p>Unit 10 Display Gardens, 6 Sarel Baard Crescent, Gateway Industrial Park, Rooihuiskraal, Centurion, 0154</p>
              <div className="card-badge">Headquarters</div>
            </div>
          </div>
        </section>

        {/* Enhanced Branches Section */}
        <section id="branches" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Our Global Presence</h2>
            <p className="section-subtitle">Serving clients worldwide with local expertise</p>
          </div>
          <div className="info-cards">
            <div className="info-card branch-card">
              <div className="branch-header">
                <div className="info-icon branch-icon">
                  <Building2 />
                </div>
                <div className="branch-flag">🇦🇪</div>
              </div>
              <h3>Dubai Office</h3>
              <div className="branch-details">
                <p><strong>Office #313</strong></p>
                <p>Al Nazr Plaza, Oud Metha</p>
                <p>Dubai, United Arab Emirates</p>
                <p className="branch-tel">Tel: +971 4 33 04 125</p>
              </div>
              <div className="branch-hours">
                <Clock size={16} />
                <span>9:00 AM - 6:00 PM GST</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Support Section */}
        <section id="support" className="content-section">
          <div className="support-grid">
            <div className="support-content">
              <div className="section-header">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              </div>
              <div className="support-features">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>24/7 Technical Support</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Dedicated Account Manager</span>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <span>Custom Solutions Available</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required className="form-input" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="form-input" />
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required className="form-textarea" rows={6} />
              </div>
              <button type="submit" className={`submit-button ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                {isSubmitting ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="button-icon" />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Enhanced Location Section */}
        <section id="location" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Visit Our Office</h2>
            <p className="section-subtitle">Come see us in person and discuss your project face-to-face</p>
          </div>
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

        {/* New Team Section */}
        <section id="team" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">The talented professionals behind our success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-contact">
                  <div className="contact-item">
                    <Mail size={16} />
                    <span>{member.email}</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={16} />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New FAQ Section */}
        <section id="faq" className="content-section">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </div>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <MessageCircle className="faq-icon" />
                  <h3>{item.question}</h3>
                </div>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;