import React from 'react';
import './OwnerBenefitsSection.css';
import ownerMeetingImg from '../../../../assets/TenHomes-Owner-meet.png';

const OwnerBenefitsSection = () => {
  return (
    <section className="owner-benefits-section">
      <div className="owner-benefits-wrapper">
        <div className="owner-benefits-content">
          <h2>Are you a house owner?</h2>
          <h3>Are you hesitant to welcome bachelors <br/>into your home?</h3>
          <p>Do you believe that only "family tenants" are <br/>truly safe... yet still feel your property <br/>deserves better rent?</p>
          
          <div className="solution-highlight">
            <p>We at <span className="highlight">TenHomes</span> have found the solution!</p>
          </div>

          <p className="benefits-description">
            If your house is clean, well-built, has a fresh water supply, and is located in a secure, sought-after neighbourhood... but still you do not receive the right amount of rent it deserves, We suggest converting it into a PG and adding some basic furnishings and amenities to increase the rent for the same space.
          </p>

          <p className="service-description">
            We pair you with the right PG tenants, handle thorough background checks, manage every vacancy, and fill rooms in record time—so you get the rent you're owed without lifting a finger. This is an end-to-end PG management service we offer.
          </p>
        </div>
        <div className="owner-benefits-image">
          <img src={ownerMeetingImg} alt="TenHomes consultant meeting with property owner" />
        </div>
      </div>
    </section>
  );
};

export default OwnerBenefitsSection;
