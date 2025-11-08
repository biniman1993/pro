import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Cisco",
      description: "Networking Solutions",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Cisco-Logo.png"
    },
    {
      id: 2,
      name: "HP",
      description: "Computers & Printers",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/HP-Logo.png"
    },
    {
      id: 3,
      name: "Dell",
      description: "Enterprise Solutions",
      logo: "https://logos-world.net/wp-content/uploads/2017/06/Dell-Logo.png"
    },
    {
      id: 4,
      name: "Lenovo",
      description: "Laptops & Servers",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Lenovo-Logo.png"
    },
    {
      id: 5,
      name: "Microsoft",
      description: "Software Solutions",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png"
    },
    {
      id: 6,
      name: "Canon",
      description: "Printing Solutions",
      logo: "https://logos-world.net/wp-content/uploads/2020/05/Canon-Logo.png"
    }
  ];

  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Trusted Partners</h2>
      <p className="partners-subtitle">Collaborating with industry leaders to deliver excellence</p>
      <div className="partners-grid">
        {partners.map((partner) => (
          <div key={partner.id} className="partner-card">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="partner-logo"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150?text=' + partner.name;
              }}
            />
            <h3 className="partner-name">{partner.name}</h3>
            <p className="partner-description">{partner.description}</p>
            <div className="partner-hover">
              <span>Learn More</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;

