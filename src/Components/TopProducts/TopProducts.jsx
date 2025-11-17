import React, { useEffect, useRef, useState } from "react";
import "./TopProducts.css";
import laptopImg from "../../assets/laptop.png";
import projectorImg from "../../assets/printers.jpg";
import displayImg from "../../assets/Hero.jpg";
import panelImg from "../../assets/image.png";
import officeImg from "../../assets/printer.jpg";
import soundImg from "../../assets/server.png";
const products = [
  {
    name: "Laptop",
    count: "38 products",
    img: laptopImg,
  },
  {
    name: "Projector",
    count: "42 products",
    img: projectorImg,
  },
  {
    name: "Display Solution",
    count: "42 products",
    img: displayImg,
  },
  {
    name: "Interactive Flat Panel",
    count: "21 products",
    img: panelImg,
  },
  {
    name: "Office Equipment",
    count: "68 products",
    img: officeImg,
  },
  {
    name: "Sound System",
    count: "83 products",
    img: soundImg,
  },
   {
    name: "Sound System",
    count: "83 products",
    img: soundImg,
  },
   {
    name: "Sound System",
    count: "83 products",
    img: soundImg,
  },
   {
    name: "Sound System",
    count: "83 products",
    img: soundImg,
  },
   {
    name: "Sound System",
    count: "83 products",
    img: soundImg,
  },
  
  
  
  
  

];

export default function TopProducts() {
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
    <div className="top-products-container" ref={sectionRef}>
      <h2
        className="section-title"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 600ms ease, transform 600ms ease"
        }}
      >
        Most Popular Products
      </h2>

      <div className="products-grid">
        {products.map((item, index) => (
          <div
            className="flip-card"
            key={index}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 600ms ease ${index * 60}ms, transform 600ms ease ${index * 60}ms`
            }}
          >
            <div className="flip-card-inner">

              {/* Front side */}
              <div className="flip-card-front">
                <img src={item.img} alt={item.name} className="product-img" />
                <h3>{item.name}</h3>
                <p>{item.count}</p>
              </div>

              {/* Back side */}
              <div className="flip-card-back">
                <h3>{item.name}</h3>
                <button className="view-btn">View More</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
