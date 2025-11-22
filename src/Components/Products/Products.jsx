import React, { useState, useEffect, useRef } from 'react';
import './Products.css';

const Products = ({ 
  title = "Latest Products", 
  productsData,
  className = "" 
}) => {
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
    <div className={`products-section-wrapper`}>
      <div className={`latest-products ${className}`} ref={containerRef}>
        <h1 className={`section-title ${isVisible ? 'animate-title' : ''}`}>
          {title}
        </h1>

        <div className="products-grid-wrapper">
          <div className="products-grid">
            {productsData.map((product, index) => (
              <div
                key={product.id}
                className={`product-card ${isVisible ? 'animate-card' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {product.image && (
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                )}
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

          <button className="forward-icon" onClick={() => console.log('Next Page')}>
            ➜
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
