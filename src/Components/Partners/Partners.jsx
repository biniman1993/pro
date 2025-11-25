import React, { useState, useEffect } from 'react';
import './Partners.css';
import ethiopianLogo from '../../assets/awardlogo/ethoair.png';
import cbe from '../../assets/awardlogo/cbe1.png';
import aaw from '../../assets/awardlogo/addis.png';
import baw from '../../assets/awardlogo/helth.png';
import caw from '../../assets/awardlogo/prim.png';
import daw from '../../assets/awardlogo/trad.png';
import eaw from '../../assets/awardlogo/def.png';
import faw from '../../assets/awardlogo/insa.png';
import gaw from '../../assets/awardlogo/trad.png';



const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const partners = [
    { 
      id: 1, 
      name: "Ethiopian Airlines", 
      description: "Aviation Excellence Partner", 
      logo: ethiopianLogo, 
      modalTitle: "Delivering Quality Electronics with Trusted Service",
      modalBody: "We are proud to have partnered with Ethiopian Airlines, providing a wide range of high-quality electronic products—including printers, computers, laptops, displays, and more. Our dedication to excellence and reliability has earned us lasting trust, and we continue to deliver solutions that meet the highest standards."
    },
    { 
      id: 2, 
      name: "HP", 
      description: "Computing Solutions Provider", 
      logo: cbe,
      modalTitle: "Empowering Business with HP Technology",
      modalBody: "Our partnership with HP has enabled us to deliver cutting-edge computing solutions. From enterprise servers to personal workstations, we provide comprehensive HP products that drive productivity and innovation across industries."
    },
    { 
      id: 3, 
      name: "Dell", 
      description: "Enterprise Technology Partner", 
      logo: baw,
      modalTitle: "Dell Enterprise Solutions Excellence",
      modalBody: "As a trusted Dell partner, we supply premium enterprise technology solutions including servers, storage systems, and professional workstations. Our commitment ensures reliable, high-performance systems for demanding business environments."
    },
    { 
      id: 4, 
      name: "Lenovo", 
      description: "Innovation & Performance", 
      logo: aaw,
      modalTitle: "Lenovo Innovation for Modern Workplaces",
      modalBody: "Through our partnership with Lenovo, we deliver innovative laptops, desktops, and data center solutions. Our expertise ensures organizations receive reliable technology that enhances productivity and drives digital transformation."
    },
    { 
      id: 5, 
      name: "Microsoft", 
      description: "Software & Cloud Solutions", 
      logo: caw,
      modalTitle: "Microsoft Solutions for Digital Success",
      modalBody: "We provide comprehensive Microsoft solutions including software licenses, cloud services, and enterprise applications. Our partnership ensures businesses have access to cutting-edge tools that empower teams and transform operations."
    },
    { 
      id: 6, 
      name: "Canon", 
      description: "Imaging & Printing Solutions", 
      logo: daw,
      modalTitle: "Canon Quality Imaging Solutions",
      modalBody: "As a Canon partner, we deliver professional-grade printers, scanners, and imaging solutions. Our commitment to quality ensures organizations receive reliable equipment that meets the highest standards of performance and durability."
    },
    { 
      id: 7, 
      name: "Apple", 
      description: "Premium Technology Partner", 
      logo: eaw,
      modalTitle: "Apple Innovation & Design Excellence",
      modalBody: "We supply premium Apple products including MacBooks, iMacs, and iPads for creative professionals and enterprises. Our expertise ensures clients receive authentic products with comprehensive support and service excellence."
    },
    { 
      id: 8, 
      name: "Intel", 
      description: "Processor Technology Leader", 
      logo: faw,
      modalTitle: "Intel-Powered Performance Solutions",
      modalBody: "Our partnership with Intel enables us to provide cutting-edge processor technology and computing solutions. We deliver systems powered by the latest Intel innovations, ensuring maximum performance and reliability for our clients."
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

  const openModal = (partner) => {
    setSelectedPartner(partner);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPartner(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="partners-section">
    <div className="partners-grid partners-grid-4"></div>
      <div className="partners-container">
        <div className="partners-header">
          <h2 className="partners-title">
            Clients <span className="title-accent">We Served</span>
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
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="logo-container">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150/e67817/FFFFFF?text=' + partner.name;
                  }}
                />
              </div>
              
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-description">{partner.description}</p>
              
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <button 
                className="read-more-btn"
                onClick={() => openModal(partner)}
              >
                Read More
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
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedPartner && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <div className="modal-header">
              <img
                src={selectedPartner.logo}
                alt={selectedPartner.name}
                className="modal-logo"
              />
              <h2 className="modal-title">{selectedPartner.modalTitle}</h2>
            </div>
            
            <div className="modal-body">
              <p>{selectedPartner.modalBody}</p>
            </div>

            <div className="modal-footer">
              <div className="rating-stars modal-stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Partners;
