import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import houseOwnerImg from '../../../../assets/house owner.jpg';
import cozyPGImg from '../../../../assets/cozyPG.webp';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>
            TenHomes <span className="hero-title-dash">—</span><br />
            Unlock 50% More<br />
            Rental Income.<br />
            Turn Your Home<br />
            into a Profitable<br />
            PG!
          </h1>
          <p>
            We help homeowners turn their property into a fully managed PG — 
            you earn more, we handle everything. Tenants enjoy spacious, home-like 
            stays at affordable prices.
          </p>
          <div className="hero-buttons">
            <Link to="/for-owners" className="hero-cta primary">List Your House</Link>
            <button className="hero-cta secondary">Find a PG Home</button>
          </div>
        </div>
        <div className="hero-images">
          <div className="hero-image">
            <img src={houseOwnerImg} alt="House owner" />
          </div>
          <div className="hero-image">
            <img src={cozyPGImg} alt="Cozy PG accommodation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
