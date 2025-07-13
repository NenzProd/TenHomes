
import React from 'react';
import '../styles/NoHiddenCostsSection.css';
import { FaUtensils, FaBroom } from 'react-icons/fa';

const NoHiddenCostsSection = () => {
  return (
    <section className="no-hidden-costs-section">
      <h2 className="no-hidden-title">No Hidden Costs. No Surprises.</h2>
      <div className="no-hidden-underline"></div>
      <div className="no-hidden-subtitle">Transparent living experience for all our tenants</div>
      <div className="no-hidden-cards">
        <div className="no-hidden-card">
          <div className="no-hidden-icon" style={{ background: '#CD5E4F', borderRadius: '16px', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaUtensils color="#fff" size={28} />
          </div>
          <div className="no-hidden-card-content">
            <div className="no-hidden-card-title">Self-Managed Kitchen</div>
            <div className="no-hidden-card-desc">Tenants handle their own drinking water, groceries, and cooking. Every home comes with a kitchen ready for use.</div>
          </div>
        </div>
        <div className="no-hidden-card">
          <div className="no-hidden-icon" style={{ background: '#CD5E4F', borderRadius: '16px', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaBroom color="#fff" size={28} />
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
  );
};

export default NoHiddenCostsSection;
