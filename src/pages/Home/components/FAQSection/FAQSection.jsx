import React from 'react';
import './FAQSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Quick answers to help you move in faster!</p>
        <div className="faq-list">
          <details className="faq-item">
            <summary>
              <span>What is included in the rent?</span>
              <FontAwesomeIcon icon={faChevronDown} className="faq-dropdown-arrow" />
            </summary>
            <div className="faq-answer">All basic furnishings, maintenance, and select utilities are included. Please check the property details for specifics.</div>
          </details>
          <details className="faq-item">
            <summary>
              <span>How do I list my property?</span>
              <FontAwesomeIcon icon={faChevronDown} className="faq-dropdown-arrow" />
            </summary>
            <div className="faq-answer">Click on "List Your House" and fill out the form. Our team will contact you for the next steps.</div>
          </details>
          <details className="faq-item">
            <summary>
              <span>Are tenants verified?</span>
              <FontAwesomeIcon icon={faChevronDown} className="faq-dropdown-arrow" />
            </summary>
            <div className="faq-answer">Yes, all tenants undergo thorough background checks and verification before moving in.</div>
          </details>
          <details className="faq-item">
            <summary>
              <span>How is rent paid to owners?</span>
              <FontAwesomeIcon icon={faChevronDown} className="faq-dropdown-arrow" />
            </summary>
            <div className="faq-answer">Owners receive guaranteed rent directly in their bank account every month, on time.</div>
          </details>
        </div>
        <div className="faq-cta">
          <div className="faq-cta-text">Still have doubts?</div>
          <button className="faq-cta-btn">Talk to TenHomes</button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
