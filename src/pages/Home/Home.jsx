import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import OwnerBenefitsSection from './components/OwnerBenefitsSection/OwnerBenefitsSection';
import OwnerHesitationsSection from './components/OwnerHesitationsSection/OwnerHesitationsSection';
import WhyPGWithTenHomesSection from './components/WhyPGWithTenHomesSection/WhyPGWithTenHomesSection';
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection';
import WhatsInsideRoomSection from './components/WhatsInsideRoomSection/WhatsInsideRoomSection';
import ExtrasSection from './components/ExtrasSection/ExtrasSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import FAQSection from './components/FAQSection/FAQSection';
import WhatsAppFloating from './components/WhatsAppFloating/WhatsAppFloating';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <OwnerBenefitsSection />
      <OwnerHesitationsSection />
      <WhyPGWithTenHomesSection />
      <HowItWorksSection />
      <WhatsInsideRoomSection />
      <ExtrasSection />
      <TestimonialsSection />
      <FAQSection />
      <WhatsAppFloating />
    </div>
  );
};

export default Home;
