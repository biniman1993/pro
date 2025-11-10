// OurMajorProducts.jsx
import React, { useState, useEffect, useRef } from 'react';
import './OurMajorProducts.css';

const OurMajorProducts = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Beno MSS50 3600 Lumens SVGA Business Projector",
      status: "In stock",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      action: "Add To Cart"
    },
    {
      id: 2,
      name: "MSI M99 Wired RGB Ergonomic Gaming Mouse",
      status: "In stock",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=200&fit=crop",
      action: "Add To Cart"
    },
    {
      id: 3,
      name: "MSI Modern 14 C11M 11th Gen Intel Core i7 1195G7 14 Inch FHD IPS",
      status: "In stock",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=200&fit=crop",
      action: "Add To Cart"
    },
    {
      id: 4,
      name: "ARMOR AR-B6BIP4A, CCTV Camera",
      status: "In stock",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=300&h=200&fit=crop",
      action: "Add To Cart"
    },
    {
      id: 5,
      name: "AOC CU3462X/BK Canon",
      status: "In stock",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
      action: "Add To Cart"
    },
     {
      id: 6,
      name: "AOC CU3462X/BK Canon",
      status: "In stock",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
      action: "Add To Cart"
    }
    , {
      id: 7,
      name: "AOC CU3462X/BK Canon",
      status: "In stock",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
      action: "Add To Cart"
    },
     {
      id: 8,
      name: "AOC CU3462X/BK Canon",
      status: "In stock",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=200&fit=crop",
      action: "Add To Cart"
    }
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="major-products-container" ref={containerRef}>
      <h2 className={`section-title ${isVisible ? 'animate-title' : ''}`}>Our Major Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className={`product-card ${isVisible ? 'animate-card' : ''}`}
            style={{ 
              animationDelay: `${index * 0.1}s` 
            }}
          >
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <button className="add-to-cart-btn">{product.action}</button>
              </div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-details">
                <span className={`status ${product.status.toLowerCase().replace(' ', '-')}`}>
                  {product.status}
                </span>
                <span className="price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMajorProducts;