import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileContract, 
  faGavel, 
  faArrowLeft 
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="page-container terms-conditions">
      <Link to="/" className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Link>
      
      <div className="policy-header">
        <div className="icon">
          <FontAwesomeIcon icon={faFileContract} />
        </div>
        <h1>Terms & Conditions</h1>
        <p>Rules and guidelines for using TenHomes</p>
      </div>
      
      <section className="policy-card">
        <h2>
          <FontAwesomeIcon icon={faGavel} /> Our Terms & Conditions
        </h2>
        <ul>
          <li>By using TenHomes, you agree to provide accurate information and abide by our policies.</li>
          <li>TenHomes is not liable for disputes between tenants and property owners, but we will assist in resolving issues where possible.</li>
          <li>All content and data on this platform are protected by copyright and may not be used without permission.</li>
          <li>We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of changes.</li>
        </ul>
        <div className="policy-contact">
          <strong>Questions?</strong> Email <a href="mailto:info@tenhomes.in">info@tenhomes.in</a> or call <a href="tel:+919840167444">+91 98401 67444</a> for clarification on our terms.
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
