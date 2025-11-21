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
    <div className="topbackground">
       <div className="top-products-container" ref={sectionRef}>
      <div className="products-header">
        <h2
          className="products-title"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 600ms ease, transform 600ms ease"
          }}
        >
          Most Popular Products
        </h2>
        <div 
          className="title-line"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transition: "opacity 600ms ease 200ms, transform 600ms ease 200ms"
          }}
        ></div>
        <p 
          className="products-subtitle"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 600ms ease 300ms, transform 600ms ease 300ms"
          }}
        >
          Explore our wide range of premium technology solutions
        </p>
      </div>

      <div className="products-grid">
        {products.map((item, index) => (
          <div
            className="product-card"
            key={index}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 600ms ease ${index * 80 + 400}ms, transform 600ms ease ${index * 80 + 400}ms`
            }}
          >
            <div className="product-image-container">
              <img src={item.img} alt={item.name} className="product-image" />
              <div className="product-overlay">
                <button className="view-button">View More</button>
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
