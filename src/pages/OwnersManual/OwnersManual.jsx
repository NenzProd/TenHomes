import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OwnersManual.css';

const OwnersManual = () => {
  const navigate = useNavigate();

  const handleListHomeClick = () => {
    navigate('/for-owners');
  };

  return (
    <div className="page-container owners-manual">
      <div className="owners-manual-content">
        <h1>📄 Owners Manual</h1>
        <h2>✅ Unlock Passive Income, Stress-Free!</h2>
        <p className="tagline">Partnering with TenHomes — A Smarter Way to Lease!</p>

        <div className="how-it-works">
          <h3>How it Works:</h3>
          <ol>
            <li>
              <strong>Onboarding</strong>
              <ul>
                <li>Homes in secure communities are preferred.</li>
                <li>Individual houses undergo a safety and standards inspection.</li>
              </ul>
            </li>
            <li>
              <strong>One-Time Agreement</strong>
              <ul>
                <li>An agreement is signed between the Owner and TenHomes listing terms, rent model, furnishing requirements, fees, etc.</li>
              </ul>
            </li>
            <li>
              <strong>Furnishing Options</strong>
              <ul>
                <li>Owners can either furnish as per the checklist, or</li>
                <li>TenHomes can furnish and recover costs monthly (without extra EMI burden).</li>
              </ul>
            </li>
            <li>
              <strong>Rentals & Payment</strong>
              <ul>
                <li>TenHomes manages everything — tenant onboarding, rent collection, and maintenance.</li>
              </ul>
            </li>
            <li>
              <strong>Care & Maintenance</strong>
              <ul>
                <li>Weekly house cleaning arranged by TenHomes.</li>
                <li>Tenants handle day-to-day kitchen and room upkeep.</li>
              </ul>
            </li>
            <li>
              <strong>Transparency and Support</strong>
              <ul>
                <li>Full documentation and tenant tracking.</li>
                <li>Dedicated relationship manager for any assistance.</li>
              </ul>
            </li>
          </ol>
        </div>
        
        <div className="cta-section">
          <p className="cta-text">Start earning from your property, stress-free!</p>
          <button className="list-home-btn" onClick={handleListHomeClick}>
            List Your Home with TenHomes
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnersManual;
