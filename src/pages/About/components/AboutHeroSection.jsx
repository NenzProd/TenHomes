import React from 'react';
import '../styles/AboutHeroSection.css';
import heroImg from '../../../assets/TenHomes-Owner-meet.png';

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-wrapper">
        <div className="about-hero-content">
          <h1 className="about-hero-title">About <span>TenHomes</span></h1>
          <h2 className="about-hero-subtitle">Creating Comfortable PG Living Since 2017</h2>
          <p className="about-hero-desc">
            Since 2017, TenHomes has been redefining PG living — offering the comfort of a true home at a nominal cost. Unlike commercial PGs, we maintain a peaceful residential atmosphere, ensuring you enjoy ample space, essential furnishings, and all the basic amenities needed for a comfortable stay.
          </p>
          <button className="about-hero-cta">List Your Property</button>
        </div>
        <div className="about-hero-image">
          <img src={heroImg} alt="TenHomes consultant with owner" />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
