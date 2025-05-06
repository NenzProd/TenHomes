import React from 'react';
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
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/for-owners">For Owners - list your property</a></li>
          <li><a href="/for-tenants">For Tenants - Find your home</a></li>
          <li><a href="#">Owners Manual</a></li>
          <li><a href="#">Tenants Manual</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Payment Policy</a></li>
          <li><a href="/contact">Contact us</a></li>
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
