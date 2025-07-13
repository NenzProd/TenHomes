import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactCardsSection = () => (
  <div className="contactus-cards-wrapper">
    <div className="contactus-card">
      <FontAwesomeIcon icon={faEnvelope} className="contactus-icon" />
      <h2>Email Us</h2>
      <div className="contactus-card-desc">
        Email: <a href="mailto:info@tenhomes.in">info@tenhomes.in</a>
      </div>
    </div>
    <div className="contactus-card">
      <FontAwesomeIcon icon={faGlobe} className="contactus-icon" />
      <h2>Visit Us</h2>
      <div className="contactus-card-desc">
        Website: <a href="https://www.tenhomes.in" target="_blank" rel="noopener noreferrer">www.tenhomes.in</a>
      </div>
    </div>
    <div className="contactus-card">
      <div className="contactus-icon" style={{fontSize: '2.5rem', marginBottom: 16}}>
        <FontAwesomeIcon icon={faFacebookF} style={{marginRight: 12}} />
        <FontAwesomeIcon icon={faInstagram} style={{marginRight: 12}} />
        <FontAwesomeIcon icon={faLinkedinIn} style={{marginRight: 12}} />
        <FontAwesomeIcon icon={faYoutube} />
      </div>
      <h2>Follow Us</h2>
      <div className="contactus-card-desc">
        <a href="https://www.facebook.com/tenhomes.in" target="_blank" rel="noopener noreferrer">Facebook</a> |
        <a href="https://www.instagram.com/tenhomes.in" target="_blank" rel="noopener noreferrer"> Instagram</a> |
        <a href="https://www.linkedin.com/company/tenhomes" target="_blank" rel="noopener noreferrer"> LinkedIn</a> |
        <a href="https://www.youtube.com/@tenhomes" target="_blank" rel="noopener noreferrer"> YouTube</a>
      </div>
    </div>
  </div>
);

export default ContactCardsSection;
