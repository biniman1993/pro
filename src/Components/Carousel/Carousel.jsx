import React, { useEffect, useState } from "react";
import "./Carousel.css";

// import your 7 images
import img1 from "../../assets/Hero.jpg";
import img2 from "../../assets/cisco.jpg";
import img3 from "../../assets/cisco.jpg";
import img4 from "../../assets/cisco.jpg";
import img5 from "../../assets/cisco.jpg";
import img6 from "../../assets/cisco.jpg";
import img7 from "../../assets/cisco.jpg";

const slides = [
  {
    image: img2,
    title: "Printing Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque ac lorem ultrices faucibus. Integer tincidunt, odio in dignissim aliquet, lacus odio ullamcorper nibh, a feugiat lorem sapien eget turpis."
  },
  {
    image: img2,
    title: "Modern Laptops",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque ac lorem ultrices faucibus. Integer tincidunt, odio in dignissim aliquet, lacus odio ullamcorper nibh, a feugiat lorem sapien eget turpis."
  },
  {
    image: img3,
    title: "Cisco Products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque ac lorem ultrices faucibus. Integer tincidunt, odio in dignissim aliquet, lacus odio ullamcorper nibh, a feugiat lorem sapien eget turpis."
  },
  {
    image: img4,
    title: "Digital Display",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque ac lorem ultrices faucibus. Integer tincidunt, odio in dignissim aliquet, lacus odio ullamcorper nibh, a feugiat lorem sapien eget turpis."
  },
  {
    image: img5,
    title: "Modern TV & Boards",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque ac lorem ultrices faucibus. Integer tincidunt, odio in dignissim aliquet, lacus odio ullamcorper nibh, a feugiat lorem sapien eget turpis."
  },
  {
    image: img6,
    title: "Advanced Tech Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque ac lorem ultrices faucibus. Integer tincidunt, odio in dignissim aliquet, lacus odio ullamcorper nibh, a feugiat lorem sapien eget turpis."
  },
  {
    image: img7,
    title: "Premium Electronics",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque ac lorem ultrices faucibus. Integer tincidunt, odio in dignissim aliquet, lacus odio ullamcorper nibh, a feugiat lorem sapien eget turpis."
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [played, setPlayed] = useState(false); // first time animation only
  const [showText, setShowText] = useState(false);

  // Auto-slide
  useEffect(() => {
    if (played) return; // only play once
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, [played]);

  // Stop animation after one loop
  useEffect(() => {
    if (current === slides.length - 1) {
      setPlayed(true);
    }
  }, [current]);

  // Handle text animation - show text after slide transition
  useEffect(() => {
    setShowText(false);
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 800); // Show text 800ms after slide change (after transition completes)
    return () => clearTimeout(textTimer);
  }, [current]);

  // Show text on initial load
  useEffect(() => {
    const initialTextTimer = setTimeout(() => {
      setShowText(true);
    }, 800);
    return () => clearTimeout(initialTextTimer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : index === current - 1 || (current === 0 && index === slides.length - 1) ? "prev" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Gradient overlay at top */}
          <div className="gradient-overlay"></div>
          
          {/* Text caption at bottom left */}
          {index === current && (
            <div className={`caption ${showText ? "show-text" : ""}`}>
            <div className={`caption ${showText ? "show-text" : ""}`}>
  <h2 className="caption-title">{slide.title}</h2>
  <p className="caption-description">{slide.description}</p>
  <button className="caption-btn">Read More</button>
</div>
            </div>
          )}
        </div>
      ))}

      {/* Navigation arrows */}
      <div className="nav left" onClick={prevSlide}>&#10094;</div>
      <div className="nav right" onClick={nextSlide}>&#10095;</div>
    </div>
  );
};

export default Carousel;
