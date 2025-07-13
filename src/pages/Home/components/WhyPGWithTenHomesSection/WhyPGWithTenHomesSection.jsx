import React from 'react';
import './WhyPGWithTenHomesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMoneyBillWave, faClock, faShieldAlt, faUserFriends, 
  faFileContract, faKey, faBroom
} from '@fortawesome/free-solid-svg-icons';

const WhyPGWithTenHomesSection = () => {
  return (
    <section className="why-pg-with-tenhomes-section">
      <div className="section-container">
        <div className="why-pg-layout">
          {/* Left Column - Heading and subtitle only */}
          <div className="why-pg-left">
            <h2 className="why-pg-main-title">
              <FontAwesomeIcon icon={faKey} className="why-pg-icon" />
              Why Let Your Home as a PG with TenHomes?
            </h2>
            <p className="why-pg-subtitle">Earn more. Worry less. We handle everything.</p>
          </div>

          {/* Right Column - Benefits Cards */}
          <div className="why-pg-right">
            <div className="why-pg-benefits-grid">
              <div className="why-pg-benefit-item">
                <div className="why-pg-benefit-icon">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </div>
                <div className="why-pg-benefit-content">
                  <h4>Guaranteed Higher Rent</h4>
                  <p>Earn up to 2× compared to regular family tenants.</p>
                </div>
              </div>
              
              <div className="why-pg-benefit-item">
                <div className="why-pg-benefit-icon">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <div className="why-pg-benefit-content">
                  <h4>Zero Management Hassle</h4>
                  <p>We handle everything from onboarding to rent collection.</p>
                </div>
              </div>

              <div className="why-pg-benefit-item">
                <div className="why-pg-benefit-icon">
                  <FontAwesomeIcon icon={faBroom} />
                </div>
                <div className="why-pg-benefit-content">
                  <h4>Maintenance Included</h4>
                  <p>Regular cleaning & upkeep handled by our trusted team.</p>
                </div>
              </div>

              <div className="why-pg-benefit-item">
                <div className="why-pg-benefit-icon">
                  <FontAwesomeIcon icon={faUserFriends} />
                </div>
                <div className="why-pg-benefit-content">
                  <h4>Verified Tenants Only</h4>
                  <p>Every tenant goes through ID + background checks.</p>
                </div>
              </div>

              <div className="why-pg-benefit-item">
                <div className="why-pg-benefit-icon">
                  <FontAwesomeIcon icon={faFileContract} />
                </div>
                <div className="why-pg-benefit-content">
                  <h4>Hassle-Free Agreement</h4>
                  <p>We prepare a clear agreement covering all terms.</p>
                </div>
              </div>

              <div className="why-pg-benefit-item">
                <div className="why-pg-benefit-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="why-pg-benefit-content">
                  <h4>Timely Payments</h4>
                  <p>Get your rent between 25th–30th, every month without delay.</p>
                </div>
              </div>

              <div className="why-pg-benefit-item">
                <div className="why-pg-benefit-icon">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <div className="why-pg-benefit-content">
                  <h4>Compliance Ready</h4>
                  <p>We manage documents, ID proofs & legal formalities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPGWithTenHomesSection;
