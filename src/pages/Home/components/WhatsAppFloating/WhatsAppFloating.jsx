import React, { useState } from 'react';
import './WhatsAppFloating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppFloating = () => {
  const [isFloatingButtonVisible, setIsFloatingButtonVisible] = useState(true);
  const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

  // Toggle floating button visibility
  const toggleFloatingButton = () => {
    setIsFloatingButtonVisible(!isFloatingButtonVisible);
  };
  
  // Toggle WhatsApp options visibility
  const toggleWhatsAppOptions = () => {
    setShowWhatsAppOptions(!showWhatsAppOptions);
  };

  return (
    <div className={`contact-floating-buttons ${isFloatingButtonVisible ? 'visible' : 'hidden'}`}> 
      <div 
        className={`whatsapp-options-container ${showWhatsAppOptions ? 'visible' : 'hidden'}`}
      >
        <div className="whatsapp-options-header">Chat with us on WhatsApp</div>
        <a 
          href="https://wa.me/919876543210?text=Hi%20TenHomes,%20I'm%20a%20house%20owner%20interested%20in%20your%20PG%20management%20services." 
          className="whatsapp-option owners"
        >
          <FontAwesomeIcon icon={faHome} />
          <span>List my<br/>property</span>
        </a>
        <a 
          href="https://wa.me/919876543210?text=Hi%20TenHomes,%20I'm%20looking%20for%20PG%20accommodation." 
          className="whatsapp-option tenants"
        >
          <FontAwesomeIcon icon={faSearch} />
          <span>Looking for a<br/>PG</span>
        </a>
      </div>
      <button 
        className="contact-floating-toggle whatsapp" 
        onClick={toggleWhatsAppOptions}
        aria-label="Contact via WhatsApp"
      >
        {showWhatsAppOptions ? 
          <FontAwesomeIcon icon={faTimes} /> : 
          <FontAwesomeIcon icon={faWhatsapp} />}
      </button>
    </div>
  );
};

export default WhatsAppFloating;
