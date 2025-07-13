import React from 'react';
import '../styles/MoveInProcessSection.css';

const MoveInProcessSection = () => {
  return (
    <section className="move-in-process-section">
      <h2 className="move-in-title">Easy Move-In Process</h2>
      <div className="move-in-underline"></div>
      <div className="move-in-subtitle">Simple, transparent, and tenant-friendly</div>
      <div className="move-in-cards">
        {/* Zero Advance Rent Card */}
        <div className="move-in-card">
          <div className="move-in-icon">
            {/* New icon: faRupeeSign */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#D16A5A"/><path d="M8 7h8M8 11h8M8 15h5a3 3 0 0 0 0-6H8v8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div className="move-in-card-title">Zero Advance Rent</div>
          <div className="move-in-card-desc">
            Pay just a fully refundable two-month deposit—no need to pay the first month's rent upfront!
          </div>
        </div>
        {/* Flexible Rent Collection Card */}
        <div className="move-in-card">
          <div className="move-in-icon">
            {/* New icon: faCalendarAlt */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#D16A5A"/><rect x="6" y="8" width="12" height="10" rx="2" fill="#fff"/><rect x="8" y="10" width="8" height="2" rx="1" fill="#D16A5A"/><rect x="8" y="14" width="5" height="2" rx="1" fill="#D16A5A"/><rect x="9" y="6" width="1.5" height="3" rx="0.75" fill="#D16A5A"/><rect x="13.5" y="6" width="1.5" height="3" rx="0.75" fill="#D16A5A"/></svg>
          </div>
          <div className="move-in-card-title">Flexible Rent Collection</div>
          <div className="move-in-card-desc">
            Monthly rents are collected between the 25th and 30th for your convenience.
          </div>
        </div>
        {/* Fair Electricity Billing Card */}
        <div className="move-in-card">
          <div className="move-in-icon">
            {/* New icon: faBolt */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#D16A5A"/><path d="M13 2L3 14h7v8l10-12h-7V2z" fill="#fff"/></svg>
          </div>
          <div className="move-in-card-title">Fair Electricity Billing</div>
          <div className="move-in-card-desc">
            Common EB charges are included. Individual rooms have separate EB meters for fair billing among tenants.
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoveInProcessSection;
