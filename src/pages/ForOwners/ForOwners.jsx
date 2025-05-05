import React from 'react';
import './ForOwners.css';

/**
 * =====================================================
 * ForOwners Page Component
 * Information for property owners about TenHomes services
 * =====================================================
 */
const ForOwners = () => {
  return (
    <div className="for-owners-page">
      {/* 
        =================================================
        PAGE HEADER SECTION
        =================================================
      */}
      <div className="page-header">
        <h1>For Property Owners</h1>
      </div>
      
      <div className="owners-content">
        {/* 
          =================================================
          BENEFITS SECTION
          Highlights benefits for property owners
          =================================================
        */}
        <section className="benefits-section">
          <div className="section-container">
            <h2>Why List Your Property with TenHomes?</h2>
            <div className="benefits-grid">
              {/* Benefit Card - Increased Rental Income */}
              <div className="benefit-card">
                <h3>Increased Rental Income</h3>
                <p>Earn up to 50% more than traditional rental arrangements.</p>
              </div>
              
              {/* Benefit Card - Hassle-Free Management */}
              <div className="benefit-card">
                <h3>Hassle-Free Management</h3>
                <p>We handle everything from tenant screening to maintenance.</p>
              </div>
              
              {/* Benefit Card - Quality Tenants */}
              <div className="benefit-card">
                <h3>Quality Tenants</h3>
                <p>Thorough vetting process ensures reliable tenants for your property.</p>
              </div>
              
              {/* Benefit Card - Quick Occupancy */}
              <div className="benefit-card">
                <h3>Quick Occupancy</h3>
                <p>Fill vacant rooms quickly with our extensive network of tenants.</p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="cta-container">
              <button className="primary-cta">List Your Property</button>
            </div>
          </div>
        </section>
        
        {/* 
          =================================================
          PROCESS SECTION
          Step-by-step guide for property owners
          =================================================
        */}
        <section className="process-section">
          <div className="section-container">
            <h2>How It Works</h2>
            <div className="process-steps">
              {/* Step 1 */}
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Register Your Property</h3>
                  <p>Fill out our simple form with details about your property.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Property Assessment</h3>
                  <p>Our team visits your property to assess its potential as a PG.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Setup & Preparation</h3>
                  <p>We help you prepare your property with necessary amenities.</p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Tenant Placement</h3>
                  <p>We find and screen quality tenants for your property.</p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Ongoing Management</h3>
                  <p>We handle day-to-day operations while you enjoy increased rental income.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForOwners;