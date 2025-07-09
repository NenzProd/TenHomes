import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TenantsManual.css';

const TenantsManual = () => {
  const navigate = useNavigate();

  const handleApplyNowClick = () => {
    navigate('/for-tenants');
  };

  return (
    <div className="page-container tenants-manual">
      <div className="tenants-manual-content">
        <h1 style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',color:'#3686d3',fontWeight:700,fontSize:'2.2rem',marginBottom:'0.5rem'}}>
          <span role="img" aria-label="document">📄</span> <span>Tenants Manual</span>
        </h1>
        <h2 style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',color:'#1bbf4c',fontWeight:700,fontSize:'1.5rem',marginBottom:'0.5rem'}}>
          <span role="img" aria-label="check">✅</span> <span>Welcome to Comfortable, Hassle-Free Living!</span>
        </h2>
        <p className="tagline" style={{textAlign:'center',fontWeight:500,fontSize:'1.1rem',marginBottom:'1.5rem',color:'#222'}}>
          Welcome to Your New Home at TenHomes! 🏠
        </p>
        <hr style={{margin:'1.5rem 0 1.5rem 0',border:'none',borderTop:'2px solid #b5c7e6'}} />
        <h3 style={{color:'#3686d3',fontWeight:700,fontSize:'1.1rem',marginBottom:'1rem'}}>Getting Started:</h3>
        <ol style={{padding:0,margin:0}}>
          <li style={{background:'#f5f8fc',borderRadius:'8px',padding:'1rem',marginBottom:'1.2rem',boxShadow:'0 2px 8px rgba(54,134,211,0.06)'}}>
            <strong style={{color:'#3686d3'}}>1. Move-In Process</strong>
            <ul style={{marginTop:'0.5rem'}}>
              <li>Pay a fully refundable 2-month deposit.</li>
              <li>No need to pay first-month rent during move-in.</li>
            </ul>
          </li>
          <li style={{background:'#f5f8fc',borderRadius:'8px',padding:'1rem',marginBottom:'1.2rem',boxShadow:'0 2px 8px rgba(54,134,211,0.06)'}}>
            <strong style={{color:'#3686d3'}}>2. Rent and Utilities</strong>
            <ul style={{marginTop:'0.5rem'}}>
              <li>Pay rent monthly between the 25th-30th.</li>
              <li>Separate EB meter installed; pay based on usage.</li>
            </ul>
          </li>
          <li style={{background:'#f5f8fc',borderRadius:'8px',padding:'1rem',marginBottom:'1.2rem',boxShadow:'0 2px 8px rgba(54,134,211,0.06)'}}>
            <strong style={{color:'#3686d3'}}>3. Living Essentials</strong>
            <ul style={{marginTop:'0.5rem'}}>
              <li>Furnished homes + kitchen ready for self-cooking.</li>
              <li>Bring your own utensils, groceries, and drinking water.</li>
            </ul>
          </li>
          <li style={{background:'#f5f8fc',borderRadius:'8px',padding:'1rem',marginBottom:'1.2rem',boxShadow:'0 2px 8px rgba(54,134,211,0.06)'}}>
            <strong style={{color:'#3686d3'}}>4. Cleanliness</strong>
            <ul style={{marginTop:'0.5rem'}}>
              <li>Weekly house cleaning by TenHomes staff.</li>
              <li>Daily cleaning of personal spaces and kitchen is the tenant's responsibility.</li>
            </ul>
          </li>
          <li style={{background:'#f5f8fc',borderRadius:'8px',padding:'1rem',marginBottom:'1.2rem',boxShadow:'0 2px 8px rgba(54,134,211,0.06)'}}>
            <strong style={{color:'#3686d3'}}>5. Security</strong>
            <ul style={{marginTop:'0.5rem'}}>
              <li>Always lock your doors.</li>
              <li>Report any security issues immediately.</li>
            </ul>
          </li>
          <li style={{background:'#f5f8fc',borderRadius:'8px',padding:'1rem',marginBottom:'1.2rem',boxShadow:'0 2px 8px rgba(54,134,211,0.06)'}}>
            <strong style={{color:'#3686d3'}}>6. Move-Out</strong>
            <ul style={{marginTop:'0.5rem'}}>
              <li>Minimum 1 month notice before move-out is required.</li>
              <li>Deposit refunded within 7 working days post inspection.</li>
            </ul>
          </li>
          <li style={{background:'#f5f8fc',borderRadius:'8px',padding:'1rem',marginBottom:'1.2rem',boxShadow:'0 2px 8px rgba(54,134,211,0.06)'}}>
            <strong style={{color:'#3686d3'}}>7. House Rules</strong>
            <ul style={{marginTop:'0.5rem'}}>
              <li>Respect fellow tenants.</li>
              <li>No smoking, illegal activities, or property damage tolerated.</li>
            </ul>
          </li>
        </ol>
        <div className="cta-section">
          <p className="cta-text">Experience peaceful living. Join TenHomes Today →</p>
          <button className="apply-now-btn" onClick={handleApplyNowClick}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenantsManual;
