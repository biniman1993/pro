import React from 'react';
import './Logo.css';

// Import images explicitly
import addis from '../../assets/awardlogo/addis.png';
import cbe1 from '../../assets/awardlogo/cbe1.png';
import def from '../../assets/awardlogo/def.png';
import ethoair from '../../assets/awardlogo/ethoair.png';
import helth from '../../assets/awardlogo/helth.png';
import image from '../../assets/awardlogo/image.png';
import insa from '../../assets/awardlogo/insa.png';
import prim from '../../assets/awardlogo/prim.png';
import trad from '../../assets/awardlogo/trad.png';

const Logo = () => {
  const logos = [
    { id: 1, src: addis },
    { id: 2, src: cbe1 },
    { id: 3, src: def },
    { id: 4, src: ethoair },
    { id: 5, src: helth },
    { id: 6, src: image },
    { id: 7, src: insa },
    { id: 8, src: prim },
    { id: 9, src: trad },
    { id: 10, src: def }
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
