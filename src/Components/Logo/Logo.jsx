import React from 'react';
import './Logo.css';

const Logo = () => {
  const partners = [
    { id: 1, name: "somop", logo: "/logo/parlogo1.png" },
    { id: 2, name: "SUPERMICRO", logo: "/logo/parlogo2.png" },
    { id: 3, name: "ITC", logo: "/logo/parlogo3.png" },
    { id: 4, name: "CREATE", logo: "/logo/parlogo3.png" },
    // ... add all 30 partners with their image paths
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="partners-section">
      <div className="partners-container">
        <div className="partners-track">
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="partner-logo">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logo;