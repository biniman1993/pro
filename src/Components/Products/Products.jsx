import React, { useState, useEffect, useRef } from 'react';
import './Products.css';
import imgA from '../../assets/laptop/a.jpg';
import imgB from '../../assets/laptop/b.jpg';
import imgC from '../../assets/laptop/c.jpg';
import imgD from '../../assets/laptop/d.png';
import imgE from '../../assets/laptop/e.png';

const LatestProducts = () => {
  const products = [
    { id: 1, name: "LEXIN JP-630C PAPER SHREDDER", status: "In stock", price: "Call for Price", image: imgA },
    { id: 2, name: "Beno MSS50 3600 Lumens SVGA Business Projector", status: "In stock", price: "Call for Price", image: imgB },
    { id: 3, name: "MSI M99 Wired RGB Ergonomic Gaming Mouse", status: "In stock", price: "Call for Price", image: imgC },
    { id: 4, name: "ASTHA UV-106M10 FAKE NOTE DETECTOR MACHINE", status: "In stock", price: "Call for Price", image: imgD },
    { id: 5, name: "MSI Modem 14 C11M 11th Gen Intel Core i7 1195G7 14 Inch FHD IPS", status: "Available on backorder", price: "Call for Price", image: imgE }
  ];

  // Intersection Observer
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
  }, []);

  return (
    <div className="latest-products" ref={containerRef}>
      <h1 className={`section-title ${isVisible ? 'animate-title' : ''}`}>Latest Products</h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`product-card ${isVisible ? 'animate-card' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {product.image && <img className="product-image" src={product.image} alt={product.name} />}
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="stock-status">
                <span className="status-icon">✔</span>
                <span className="status-text">{product.status}</span>
              </div>
              <p className="product-price">{product.price}</p>
            </div>
            <button className="add-to-cart-btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
