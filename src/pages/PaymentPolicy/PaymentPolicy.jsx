import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './PaymentPolicy.css';

const PaymentPolicy = () => {
  return (
    <div className="page-container payment-policy">
      <Link to="/" className="back-btn">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </Link>
      
      <div className="policy-header">
        <div className="icon">
          <FontAwesomeIcon icon={faCreditCard} />
        </div>
        <h1>Payment Policy</h1>
        <p>How payments work at TenHomes</p>
      </div>
      
      <section className="policy-card">
        <h2>
          <FontAwesomeIcon icon={faLock} /> Our Payment Policy
        </h2>
        <ul>
          <li>All payments for booking or services must be made through the official TenHomes platform or as instructed by our team.</li>
          <li>Advance payments are non-refundable unless otherwise stated in writing.</li>
          <li>Payment receipts will be provided for all transactions.</li>
          <li>For any payment-related queries, contact payments@tenhomes.in.</li>
        </ul>
        <div className="policy-contact">
          <strong>Need help?</strong> Email <a href="mailto:payments@tenhomes.in">payments@tenhomes.in</a> or call <a href="tel:+919840167444">+91 98401 67444</a> for payment support.
        </div>
      </section>
    </div>
  );
};
