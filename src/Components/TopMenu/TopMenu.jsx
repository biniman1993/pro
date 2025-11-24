
import React, { useState, useEffect } from "react"
import "./TopMenu.css";

const TopMenu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide menu
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show menu
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const menuData = {
    Desktop: [
      "Business Desktop",
      "Gaming Desktop",
      "All-in-One PC",
      "Mini Desktop",
      "Workstation"
    ],
    Laptop: [
      "Business Laptop",
      "Student Laptop",
      "Ultrabook / Thin & Light",
      "Gaming Laptop",
      "2-in-1 Convertible Laptop"
    ],
    Monitor: [
      "Full HD Monitor",
      "2K / 4K Monitor",
      "Gaming Monitor",
      "Curved Monitor",
      "Professional / Color-Accurate Monitor"
    ],
    Networking: [
      "Home Networking",
      "Commercial Networking",
      "Network Accessories",
      "Routers & Switches",
      "Cables & Connectors"
    ],
    Accessories: [
      "Keyboard & Mouse",
      "Webcams",
      "Headphones",
      "USB Hubs",
      "Laptop Stands"
    ],
    Printer: [
      "Inkjet Printer",
      "Laser Printer",
      "All-in-One Printer",
      "Scanners",
      "Printer Accessories"
    ],
    Projector: [
      "Business Projector",
      "Home Cinema Projector",
      "Portable Projector",
      "Short-Throw Projector",
      "Projector Accessories"
    ],
    "Interactive Panel": [
      "Smart Interactive Panels",
      "Touch Display Boards",
      "Classroom Panels",
      "Corporate Interactive Boards",
      "Wireless Presentation Tools"
    ],
    "Digital Display": [
      "LED Digital Display",
      "Video Wall Panels",
      "Advertising Displays",
      "Indoor Display",
      "Outdoor Display"
    ],
    "Sound System": [
      "Speakers",
      "Amplifiers",
      "Microphones",
      "Mixers",
      "Conference Audio Systems"
    ],
    
  };
const menuItems = Object.keys(menuData);

  return (
    <div 
      className={`topmenu ${isVisible ? 'topmenu-visible' : 'topmenu-hidden'}`} 
      onMouseLeave={() => setHoveredItem(null)}
    >
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredItem(item)}
            className={hoveredItem === item ? "active" : ""}
          >
            {item}
            {hoveredItem === item && (
              <div 
                className="dropdown-menu show"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="dropdown-content">
                  {menuData[item].map((subcategory, idx) => (
                    <div
                      key={idx}
                      className="dropdown-card"
                      style={{ animationDelay: `${idx * 0.03}s` }}
                      onClick={() => {
                        console.log(`Clicked: ${subcategory} under ${item}`);
                      }}
                    >
                      <div className="dropdown-card-icon">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span className="dropdown-card-text">{subcategory}</span>
                      <div className="dropdown-card-hover"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopMenu;
