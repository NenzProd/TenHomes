import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [category, setCategory] = useState('owner');

  return (
    <div className="contactus-outer">
      <div className="contactus-hero">
        <div className="contactus-hero-overlay">
          <h1>Contact Us</h1>
          <p>We're here to help you rent or find your perfect home!</p>
        </div>
      </div>
      <div className="contactus-cards-wrapper">
        <div className="contactus-card">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contactus-icon" />
          <h2>Our Location</h2>
          <div className="contactus-card-desc">
            Jeevan Bhima Nagar,<br />
            Anna Nagar West Extension,<br />
            Chennai, India.
          </div>
        </div>
        <div className="contactus-card">
          <FontAwesomeIcon icon={faPhone} className="contactus-icon" />
          <h2>Call Us</h2>
          <div className="contactus-card-desc">
            Phone: <a href="tel:+919840167444">+91-9840167444</a>
          </div>
        </div>
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
      </div>
      {/* Enquiry Form Section */}
      <div className="contactus-enquiry-section">
        <h2 className="enquiry-title">Submit Your Enquiry</h2>
        <p className="enquiry-subtitle">Whether you're an Owner or a Tenant, we're just a form away!</p>
        <div className="enquiry-category">
          <span className="enquiry-category-label">Choose Your Category:</span>
          <div className="enquiry-radio-group">
            <label>
              <input type="radio" name="category" value="owner" checked={category === 'owner'} onChange={() => setCategory('owner')} />
              <span>I'm an Owner looking to rent my space</span>
            </label>
            <label>
              <input type="radio" name="category" value="tenant" checked={category === 'tenant'} onChange={() => setCategory('tenant')} />
              <span>I'm a Tenant looking for a space</span>
            </label>
          </div>
        </div>
        {category === 'owner' ? (
          <form className="enquiry-form">
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Property Location" required />
            <select required>
              <option value="">Type of Property</option>
              <option value="apartment">Apartment</option>
              <option value="house">House/Villa</option>
              <option value="pg">PG/Co-living</option>
              <option value="hostel">Hostel</option>
            </select>
            <select required>
              <option value="">Furnishing Status</option>
              <option value="furnished">Furnished</option>
              <option value="semi-furnished">Semi-Furnished</option>
              <option value="unfurnished">Unfurnished</option>
            </select>
            <textarea placeholder="Message / Any Special Notes" rows={3}></textarea>
            <button type="submit" className="enquiry-submit-btn owner-btn">Submit Property <span style={{marginLeft: 6}}>&#8594;</span></button>
          </form>
        ) : (
          <form className="enquiry-form">
            <label>Name
              <input type="text" placeholder="Name" required />
            </label>
            <label>Mobile Number
              <input type="tel" placeholder="Mobile Number" required />
            </label>
            <label>Email
              <input type="email" placeholder="Email" required />
            </label>
            <label>Preferred Location
              <select required>
                <option value="">Select preferred location</option>
                <option value="Anna Nagar">Anna Nagar</option>
                <option value="Velachery">Velachery</option>
                <option value="T Nagar">T Nagar</option>
                <option value="OMR">OMR</option>
                <option value="Porur">Porur</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>Room Type
              <select required>
                <option value="">Select room type</option>
                <option value="single">Single</option>
                <option value="double">Double Sharing</option>
                <option value="triple">Triple Sharing</option>
                <option value="family">Family</option>
              </select>
            </label>
            <label>Budget Range
              <select required>
                <option value="">Select budget range</option>
                <option value="<5000">Below ₹5,000</option>
                <option value="5000-8000">₹5,000 - ₹8,000</option>
                <option value="8000-12000">₹8,000 - ₹12,000</option>
                <option value=">12000">Above ₹12,000</option>
              </select>
            </label>
            <label>Message / Requirements
              <textarea placeholder="Message / Requirements" rows={3}></textarea>
            </label>
            <button type="submit" className="enquiry-submit-btn tenant-btn">Find Me a Home <span style={{marginLeft: 6}}>&#8594;</span></button>
          </form>
        )}
      </div>
      {/* Social Media Section */}
      <div className="contactus-social-section">
        <h2 className="social-title">
          Connect With Us <span className="social-highlight">on Social Media</span>
        </h2>
        <p className="social-subtitle">Follow us for updates, property listings, and PG living tips.</p>
        <div className="social-cards-wrapper">
          <a className="social-card facebook" href="https://facebook.com/tenhomes.in" target="_blank" rel="noopener noreferrer">
            <div className="social-icon-circle">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="social-label">Facebook</div>
          </a>
          <a className="social-card instagram" href="https://instagram.com/tenhomes.in" target="_blank" rel="noopener noreferrer">
            <div className="social-icon-circle">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="social-label">Instagram</div>
          </a>
          <a className="social-card linkedin" href="https://linkedin.com/company/tenhomes" target="_blank" rel="noopener noreferrer">
            <div className="social-icon-circle">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <div className="social-label">LinkedIn</div>
          </a>
          <a className="social-card youtube" href="https://youtube.com/@tenhomes" target="_blank" rel="noopener noreferrer">
            <div className="social-icon-circle">
              <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="social-label">YouTube</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
