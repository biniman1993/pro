import React, { useEffect, useRef, useState } from "react";
import "./TopProducts.css";
import laptopImg from "../../assets/logo/laptoplogo.png";
import projectorImg from "../../assets/logo/desktoplogo.png";
import displayImg from "../../assets/logo/monitorlogo.png";
import panelImg from "../../assets/logo/networkinglogo.png";
import officeImg from "../../assets/logo/printerlogo.png";

const products = [
  { name: "Laptop", count: "38 products", img: laptopImg },
  { name: "Desktop", count: "42 products", img: projectorImg },
  { name: "Monitor", count: "42 products", img: displayImg },
  { name: "Networking", count: "21 products", img: panelImg },
  { name: "Printer", count: "68 products", img: officeImg },
  { name: "Display", count: "68 products", img: officeImg },
];

export default function TopProducts({ onViewMore }) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="topbackground">
      <div className="top-products-container" ref={sectionRef}>
        <div className="products-header">
          <h2
            className="products-title"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease, transform 600ms ease",
            }}
          >
            Most Popular Products
          </h2>
          <div
            className="title-line"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 600ms ease 200ms, transform 600ms ease 200ms",
            }}
          ></div>
        </div>

        <div className="products-grid">
          {products.map((item, index) => (
            <div
              className="product-card"
              key={index}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 600ms ease ${index * 80 + 400}ms, transform 600ms ease ${
                  index * 80 + 400
                }ms`,
              }}
            >
              <div className="product-image-container">
                <img src={item.img} alt={item.name} className="product-image" />
                <div className="product-overlay">
                  <button
                    className="view-button"
                    onClick={() => onViewMore && onViewMore(item.name)}
                  >
                    View More
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{item.name}</h3>
                <p className="product-count">{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
