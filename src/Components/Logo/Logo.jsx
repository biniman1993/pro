import React from 'react';
import './Logo.css';

const Logo = () => {
  // Replace with your real images later
  const logos = [
    { id: 1, src: '/logo/logo1.png' },
    { id: 2, src: '/logo/logo1.png' },
    { id: 3, src: '/logo/logo1.png' },
    { id: 4, src: '/logo/logo1.png' },
    { id: 5, src: '/logo/logo1.png' },
    { id: 6, src: '/logo/logo1.png' },
    { id: 7, src: '/logo/logo1.png' },
    { id: 8, src: '/logo/logo1.png' },
    { id: 9, src: '/logo/logo1.png' },
    { id: 10, src: '/logo/logo1.png' }
  ];

  const duplicated = [...logos, ...logos];

  return (
    <div className="logo-container">
      <div className="logo-scroll">
        {duplicated.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="logo-item">
            <img 
              src={logo.src}
              alt="partner-logo"
              className="logo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
