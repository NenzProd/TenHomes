import React from 'react';
import './OwnerHesitationsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserFriends, faHome, faRupeeSign, faFileContract
} from '@fortawesome/free-solid-svg-icons';

const OwnerHesitationsSection = () => {
  return (
    <section className="owner-hesitations-section">
      <div className="hesitations-container">
        <h2>Common Owner Hesitations are...</h2>
        <div className="hesitation-items">
          <div className="hesitation-item">
            <div className="hesitation-icon">
              <FontAwesomeIcon icon={faUserFriends} className="hesitation-fa-icon" />
            </div>
            <div className="hesitation-content">
              <h3 className="hesitation-title">Worried about bachelor tenants</h3>
              <p className="hesitation-description">
                Concerns about noise, parties, or lack of responsibility are common.
              </p>
            </div>
          </div>
          <div className="hesitation-item">
            <div className="hesitation-icon">
              <FontAwesomeIcon icon={faHome} className="hesitation-fa-icon" />
            </div>
            <div className="hesitation-content">
              <h3 className="hesitation-title">Property misuse or damage</h3>
              <p className="hesitation-description">
                Fear of excessive wear, unpaid bills, or poor maintenance.
              </p>
            </div>
          </div>
          <div className="hesitation-item">
            <div className="hesitation-icon">
              <FontAwesomeIcon icon={faRupeeSign} className="hesitation-fa-icon" />
            </div>
            <div className="hesitation-content">
              <h3 className="hesitation-title">Irregular rent payments</h3>
              <p className="hesitation-description">
                Anxiety about delayed or missed rent from multiple tenants.
              </p>
            </div>
          </div>
          <div className="hesitation-item">
            <div className="hesitation-icon">
              <FontAwesomeIcon icon={faFileContract} className="hesitation-fa-icon" />
            </div>
            <div className="hesitation-content">
              <h3 className="hesitation-title">Legal & paperwork hassles</h3>
              <p className="hesitation-description">
                Uncertainty about agreements, police verification, and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerHesitationsSection;
