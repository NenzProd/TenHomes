import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TenantsManual.css';

const TenantsManual = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    navigate('/for-tenants');
  };

  return (
    <main className="tenant-manual-container">
      <div className="manual-header">
        <h1>📄 Tenants Manual</h1>
        <h2>✅ Welcome to Comfortable, Hassle-Free Living!</h2>
        <p className="welcome-text">Welcome to Your New Home at TenHomes! 🏠</p>
      </div>
      <div className="manual-content">
        <h3>Getting Started:</h3>
        <div className="manual-section">
          <h4>1. Move-In Process</h4>
          <ul>
            <li>Pay a fully refundable 2-month deposit.</li>
            <li>No need to pay first-month rent during move-in.</li>
          </ul>
        </div>
        <div className="manual-section">
          <h4>2. Rent and Utilities</h4>
          <ul>
            <li>Pay rent monthly between the 25th-30th.</li>
            <li>Separate EB meter installed; pay based on usage.</li>
          </ul>
        </div>
        <div className="manual-section">
          <h4>3. Living Essentials</h4>
          <ul>
            <li>Furnished homes + kitchen ready for self-cooking.</li>
            <li>Bring your own utensils, groceries, and drinking water.</li>
          </ul>
        </div>
        <div className="manual-section">
          <h4>4. Cleanliness</h4>
          <ul>
            <li>Weekly house cleaning by TenHomes staff.</li>
            <li>Daily cleaning of personal spaces and kitchen is the tenant's responsibility.</li>
          </ul>
        </div>
        <div className="manual-section">
          <h4>5. Security</h4>
          <ul>
            <li>Always lock your doors.</li>
            <li>Report any security issues immediately.</li>
          </ul>
        </div>
        <div className="manual-section">
          <h4>6. Move-Out</h4>
          <ul>
            <li>Minimum 1 month notice before move-out is required.</li>
            <li>Deposit refunded within 7 working days post inspection.</li>
          </ul>
        </div>
        <div className="manual-section">
          <h4>7. House Rules</h4>
          <ul>
            <li>Respect fellow tenants.</li>
            <li>No smoking, illegal activities, or property damage tolerated.</li>
          </ul>
        </div>
      </div>
      <div className="cta-container">
        <p>Experience peaceful living. Join TenHomes Today →</p>
        <button className="cta-button" onClick={handleApplyNowClick}>Apply Now</button>
      </div>
    </main>
  );
};

export default TenantsManual;
