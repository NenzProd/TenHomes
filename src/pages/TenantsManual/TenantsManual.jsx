import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TenantsManual.css';

const TenantsManual = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    navigate('/for-tenants');
  };

  return (
    <div className="page-container tenants-manual">
      <div className="tenants-manual-content">
        <h1>📄 Tenants Manual</h1>
        <h2>✅ Welcome to Comfortable, Hassle-Free Living!</h2>
        <p className="tagline">Welcome to Your New Home at TenHomes! 🏠</p>

        <div className="how-it-works">
          <h3>Getting Started:</h3>
          <ol>
            <li>
              <strong>Move-In Process</strong>
              <ul>
                <li>Pay a fully refundable 2-month deposit.</li>
                <li>No need to pay first-month rent during move-in.</li>
              </ul>
            </li>
            <li>
              <strong>Rent and Utilities</strong>
              <ul>
                <li>Pay rent monthly between the 25th-30th.</li>
                <li>Separate EB meter installed; pay based on usage.</li>
              </ul>
            </li>
            <li>
              <strong>Living Essentials</strong>
              <ul>
                <li>Furnished homes + kitchen ready for self-cooking.</li>
                <li>Bring your own utensils, groceries, and drinking water.</li>
              </ul>
            </li>
            <li>
              <strong>Cleanliness</strong>
              <ul>
                <li>Weekly house cleaning by TenHomes staff.</li>
                <li>Daily cleaning of personal spaces and kitchen is the tenant's responsibility.</li>
              </ul>
            </li>
            <li>
              <strong>Security</strong>
              <ul>
                <li>Always lock your doors.</li>
                <li>Report any security issues immediately.</li>
              </ul>
            </li>
            <li>
              <strong>Move-Out</strong>
              <ul>
                <li>Minimum 1 month notice before move-out is required.</li>
                <li>Deposit refunded within 7 working days post inspection.</li>
              </ul>
            </li>
            <li>
              <strong>House Rules</strong>
              <ul>
                <li>Respect fellow tenants.</li>
                <li>No smoking, illegal activities, or property damage tolerated.</li>
              </ul>
            </li>
          </ol>
        </div>
        
        <div className="cta-section">
          <p className="cta-text">Experience peaceful living. Join TenHomes Today →</p>
          <button className="apply-now-btn" onClick={handleApplyNowClick}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenantsManual;
