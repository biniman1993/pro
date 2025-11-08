import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.jpg"; // adjust path

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1>Proactive Trading</h1>
        <p>Building modern websites with React & Vite</p>
        <p>Your Trusted Electronics Partner.</p>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
