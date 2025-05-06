import React from 'react';
import './About.css';
import heroImg from '../../assets/TenHomes-Owner-meet.png';

/**
 * =====================================================
 * About Page Component
 * Provides information about TenHomes company
 * =====================================================
 */
const About = () => {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-wrapper">
          <div className="about-hero-content">
            <h1 className="about-hero-title">About <span>TenHomes</span></h1>
            <h2 className="about-hero-subtitle">Creating Comfortable PG Living Since 2017</h2>
            <p className="about-hero-desc">
              Since 2017, TenHomes has been redefining PG living — offering the comfort of a true home at a nominal cost. Unlike commercial PGs, we maintain a peaceful residential atmosphere, ensuring you enjoy ample space, essential furnishings, and all the basic amenities needed for a comfortable stay.
            </p>
            <button className="about-hero-cta">List Your Property</button>
          </div>
          <div className="about-hero-image">
            <img src={heroImg} alt="TenHomes consultant with owner" />
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS SECTION */}
      <section className="partnership-models-section">
        <h2 className="partnership-title">Our Homeowner Partnership Models</h2>
        <div className="partnership-underline"></div>
        <div className="partnership-subtitle">Flexible options to suit every homeowner</div>
        <div className="partnership-cards">
          <div className="partnership-card">
            <div className="partnership-card-img">
              <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" alt="Owner Furnished" />
              <div className="partnership-badge">Option 1</div>
            </div>
            <div className="partnership-card-content">
              <div className="partnership-card-title">Owner Furnished</div>
              <div className="partnership-card-desc">Homeowners provide the furnishings as per our checklist. We guide you on what's needed for a comfortable PG setup.</div>
            </div>
          </div>
          <div className="partnership-card">
            <div className="partnership-card-img">
              <img src="data:image/jpeg;base64,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" alt="TenHomes Furnished" />
              <div className="partnership-badge">Option 2</div>
            </div>
            <div className="partnership-card-content">
              <div className="partnership-card-title">TenHomes Furnished</div>
              <div className="partnership-card-desc">We furnish the home and adjust the cost through easy monthly instalments, without any extra EMI burden for you.</div>
            </div>
          </div>
        </div>
      </section>

      {/* EASY MOVE-IN PROCESS SECTION */}
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

      {/* NO HIDDEN COSTS SECTION */}
      <section className="no-hidden-costs-section">
        <h2 className="no-hidden-title">No Hidden Costs. No Surprises.</h2>
        <div className="no-hidden-underline"></div>
        <div className="no-hidden-subtitle">Transparent living experience for all our tenants</div>
        <div className="no-hidden-cards">
          <div className="no-hidden-card">
            <div className="no-hidden-icon">
              {/* Kitchen Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect width="32" height="32" rx="8" fill="#D16A5A"/><path d="M10.5 8.5v7M8.5 8.5v7M9.5 8.5v7M13.5 8.5v7M15.5 8.5v7M14.5 8.5v7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><circle cx="9.5" cy="7.5" r="1" fill="#fff"/><circle cx="14.5" cy="7.5" r="1" fill="#fff"/></svg>
            </div>
            <div className="no-hidden-card-content">
              <div className="no-hidden-card-title">Self-Managed Kitchen</div>
              <div className="no-hidden-card-desc">Tenants handle their own drinking water, groceries, and cooking. Every home comes with a kitchen ready for use.</div>
            </div>
          </div>
          <div className="no-hidden-card">
            <div className="no-hidden-icon">
              {/* Maintenance Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect width="32" height="32" rx="8" fill="#D16A5A"/><path d="M16.5 8.5l-9 9M8.5 15.5l-2-2 9-9 2 2-9 9z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div className="no-hidden-card-content">
              <div className="no-hidden-card-title">Balanced Maintenance</div>
              <div className="no-hidden-card-desc">Tenants maintain their living spaces, while our housekeeping team provides full cleaning twice a week.</div>
            </div>
          </div>
        </div>
        <div className="no-hidden-message">
          At TenHomes, we believe in simple, transparent, and happy living.<br />
          <b>Stay tuned—exciting updates are on the way!</b>
        </div>
      </section>
    </div>
  );
};

export default About;