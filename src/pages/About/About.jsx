import React from 'react';
import AboutHeroSection from './components/AboutHeroSection';
import PartnershipModelsSection from './components/PartnershipModelsSection';
import MoveInProcessSection from './components/MoveInProcessSection';
import NoHiddenCostsSection from './components/NoHiddenCostsSection';

const About = () => {
  return (
    <div className="about-page">
      <AboutHeroSection />
      <PartnershipModelsSection />
      <MoveInProcessSection />
      <NoHiddenCostsSection />
    </div>
  );
};

export default About;