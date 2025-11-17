import React, { useState, useEffect } from 'react';
import './Partners.css';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  const partners = [
    { 
      id: 1, 
      name: "Cisco", 
      description: "Networking Solutions", 
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Cisco-Logo.png", 
      color: "#049FD9" 
    },
    { 
      id: 2, 
      name: "HP", 
      description: "Computers & Printers", 
      logo: "https://logos-world.net/wp-content/uploads/2020/06/HP-Logo.png", 
      color: "#0096D6" 
    },
    { 
      id: 3, 
      name: "Dell", 
      description: "Enterprise Solutions", 
      logo: "https://logos-world.net/wp-content/uploads/2017/06/Dell-Logo.png", 
      color: "#007DB8" 
    },
    { 
      id: 4, 
      name: "Lenovo", 
      description: "Laptops & Servers", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Lenovo-Logo.png", 
      color: "#E2231A" 
    },
    { 
      id: 5, 
      name: "Microsoft", 
      description: "Software Solutions", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png", 
      color: "#737373" 
    },
    { 
      id: 6, 
      name: "Canon", 
      description: "Printing Solutions", 
      logo: "https://logos-world.net/wp-content/uploads/2020/05/Canon-Logo.png", 
      color: "#BC002D" 
    },
    { 
      id: 7, 
      name: "Apple", 
      description: "Innovation & Design", 
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png", 
      color: "#000000" 
    },
    { 
      id: 8, 
      name: "Intel", 
      description: "Processor Technology", 
      logo: "https://logos-world.net/wp-content/uploads/2020/03/Intel-Logo.png", 
      color: "#0071C5" 
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('.partners-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">
            Clintes <span className="title-accent">We Served</span>
          </h2>
          <p className="partners-subtitle">
            Collaborating with industry leaders to deliver excellence and innovation
          </p>
          <div className="title-underline"></div>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`partner-card ${isVisible ? 'animate-in' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                '--partner-color': partner.color
              }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="logo-container">
                    <div className="logo-background"></div>
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150/4F46E5/FFFFFF?text=' + partner.name;
                      }}
                    />
                  </div>
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>
                  <div className="partner-badge">
                    <span>Partner</span>
                  </div>
                </div>

                <div className="card-back">
                  <div className="back-content">
                    <h4>Why {partner.name}?</h4>
                    <p>Leading provider of {partner.description.toLowerCase()} with proven track record.</p>
                    <button className="partner-btn">
                      Explore Partnership
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        <div className="partners-footer">
          <button className="cta-button">
            Become a Partner
            <div className="button-glow"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;