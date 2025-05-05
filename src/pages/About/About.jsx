import React from 'react';
import './About.css';

/**
 * =====================================================
 * About Page Component
 * Provides information about TenHomes company
 * =====================================================
 */
const About = () => {
  return (
    <div className="about-page">
      {/* 
        =================================================
        PAGE HEADER SECTION
        =================================================
      */}
      <div className="page-header">
        <h1>About Us</h1>
      </div>
      
      {/* 
        =================================================
        ABOUT CONTENT SECTION
        Company description, mission, and values
        =================================================
      */}
      <div className="about-content">
        <section className="about-section">
          <div className="section-container">
            {/* Who We Are Section */}
            <h2>Who We Are</h2>
            <p>
              TenHomes is a premier PG management service that connects property owners with quality tenants.
              Founded with a vision to revolutionize the PG rental market, we strive to create win-win situations
              for both property owners and tenants.
            </p>
            
            {/* Our Mission Section */}
            <h2>Our Mission</h2>
            <p>
              Our mission is to help property owners maximize their rental income while providing comfortable,
              affordable living spaces for tenants. We handle everything from property management to tenant
              screening, ensuring a smooth experience for all parties involved.
            </p>
            
            {/* Why Choose TenHomes Section */}
            <h2>Why Choose TenHomes</h2>
            <p>
              With TenHomes, property owners can earn up to 50% more rental income without the hassle of
              day-to-day management. Our thorough tenant screening process ensures that only reliable
              individuals occupy your property, giving you peace of mind.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;