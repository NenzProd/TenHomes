import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('what-we-collect');
  
  const handleSectionClick = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };
  
  return (
    <div className="page-container privacy-policy">
      <section className="privacy-header">
        <h1>
          <FontAwesomeIcon icon={faShieldAlt} className="shield-icon" /> 
          Privacy Policy
        </h1>
        <p>Your privacy matters to us. Here's how TenHomes collects, uses, and protects your information.</p>
      </section>
      
      <div className="privacy-accordion">
        <div className={`privacy-accordion-section ${activeSection === 'what-we-collect' ? 'active' : ''}`}>
          <div 
            className="privacy-accordion-title" 
            onClick={() => handleSectionClick('what-we-collect')}
          >
            What We Collect <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="privacy-accordion-content">
            <ul>
              <li>Name</li>
              <li>Contact details (phone, email)</li>
              <li>Profession</li>
              <li>Age</li>
              <li>Housing preferences</li>
            </ul>
          </div>
        </div>
        
        <div className={`privacy-accordion-section ${activeSection === 'how-we-use-it' ? 'active' : ''}`}>
          <div 
            className="privacy-accordion-title"
            onClick={() => handleSectionClick('how-we-use-it')}
          >
            How We Use It <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="privacy-accordion-content">
            <ul>
              <li>To match you with suitable rental options</li>
              <li>For communication and support</li>
              <li>To improve our services</li>
            </ul>
          </div>
        </div>
        
        <div className={`privacy-accordion-section ${activeSection === 'security' ? 'active' : ''}`}>
          <div 
            className="privacy-accordion-title"
            onClick={() => handleSectionClick('security')}
          >
            Security <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="privacy-accordion-content">
            <p>Your data is stored securely and never sold to third parties. We use industry-standard measures to protect your information.</p>
          </div>
        </div>
        
        <div className={`privacy-accordion-section ${activeSection === 'cookies' ? 'active' : ''}`}>
          <div 
            className="privacy-accordion-title"
            onClick={() => handleSectionClick('cookies')}
          >
            Cookies <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="privacy-accordion-content">
            <p>We use basic cookies to enhance your browsing experience. You can manage cookies in your browser settings.</p>
          </div>
        </div>
        
        <div className={`privacy-accordion-section ${activeSection === 'data-access' ? 'active' : ''}`}>
          <div 
            className="privacy-accordion-title"
            onClick={() => handleSectionClick('data-access')}
          >
            Data Access & Control <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="privacy-accordion-content">
            <p>You can request, edit, or delete your data anytime. Just email us at <a href="mailto:privacy@tenhomes.in">privacy@tenhomes.in</a>.</p>
          </div>
        </div>
        
        <div className={`privacy-accordion-section ${activeSection === 'contact' ? 'active' : ''}`}>
          <div 
            className="privacy-accordion-title"
            onClick={() => handleSectionClick('contact')}
          >
            Contact <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className="privacy-accordion-content">
            <p>Questions? Email us at <a href="mailto:privacy@tenhomes.in">privacy@tenhomes.in</a> or call <a href="tel:+919840167444">+91 98401 67444</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
