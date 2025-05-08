import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-col company">
        <div className="footer-title">TenHomes</div>
        <div className="footer-desc">Creating home-like PG spaces. Empowering house owners. Enabling better living.</div>
        <div className="footer-socials">
          <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
      <div className="footer-col links">
        <div className="footer-title">Quick Links</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/for-owners">For Owners - list your property</Link></li>
          <li><Link to="/pg-listing">For Tenants - Find your home</Link></li>
          <li><Link to="/owners-manual">Owners Manual</Link></li>
          <li><Link to="/tenants-manual">Tenants Manual</Link></li>
          <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/payment-policy">Payment Policy</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>
      </div>
      <div className="footer-col contact">
        <div className="footer-title">Contact Us</div>
        <ul>
          <li><FontAwesomeIcon icon={faEnvelope} /> info@tenhomes.in</li>
          <li><FontAwesomeIcon icon={faPhone} /> +91 98401 67444</li>
          <li><FontAwesomeIcon icon={faClock} /> 9am - 8pm, Mon-Sat</li>
          <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Chennai, India</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <hr />
      <div className="footer-copyright">© 2025 TenHomes. All Rights Reserved.</div>
    </div>
  </footer>
);

export default Footer;
