import React, { useState, useEffect, useRef } from "react";
import "./Discount.css";

// Your images
import img1 from "../../assets/bin/bini5.jpg";
import img2 from "../../assets/bin/bin2.png";
import img3 from "../../assets/bin/bin3.png";

const Discount = () => {
  const images = [img1, img2, img3];
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-rotate with pause on hover
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 2500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, images.length]);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="discount-section-new">
      <div className="discount-texts">
       <h1 className="discount-title-new">
  JOIN OUR <span className="discount-highlight-new">DISCOUNT</span> NOW
</h1>

        <p className="discount-subtitle-new">
          Sign up now and start saving on the tech you love!
        </p>

        <p className="discount-offer-new">
          * Get a 10% discount on your first purchase and start earning loyalty points!
        </p>

        <button className="discount-button-new">Join Our Club</button>
      </div>

      <div 
        className="discount-images-new"
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Discount offer ${index + 1}`}
            className={`discount-img-modern ${
              currentImage === index ? "discount-img-active" : ""
            }`}
          />
        ))}
        {/* Image indicators */}
        <div className="image-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentImage === index ? "active" : ""}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discount;