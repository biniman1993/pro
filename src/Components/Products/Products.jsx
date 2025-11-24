import React, { useState, useEffect, useRef } from 'react';
import './Products.css';

const Products = React.forwardRef(({ 
  title = "Latest Products", 
  productsData,
  className = "" 
}, ref) => {
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
    <div className={`prod-section-wrapper`} ref={ref}>
      <div className={`prod-container ${className}`} ref={containerRef}>
        <h1 className={`prod-title ${isVisible ? 'prod-title-animate' : ''}`}>
          {title}
        </h1>

        <div className="prod-grid-wrapper">
          <div className="prod-grid">
            {productsData.map((product, index) => (
              <div
                key={product.id}
                className={`prod-card ${isVisible ? 'prod-card-animate' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {product.image && (
                  <img
                    className="prod-img"
                    src={product.image}
                    alt={product.name}
                  />
                )}
                <div className="prod-info">
                  <h3 className="prod-name">{product.name}</h3>
                  <div className="prod-stock">
                    <span className="prod-stock-icon">✔</span>
                    <span className="prod-stock-text">{product.status}</span>
                  </div>
                  <p className="prod-price">{product.price}</p>
                </div>
                <button className="prod-cart-btn">Add To Cart</button>
              </div>
            ))}
          </div>

          <button className="prod-forward-btn" onClick={() => console.log('Next Page')}>
            ➜
          </button>
        </div>
      </div>
    </div>
  );
});

export default Products;