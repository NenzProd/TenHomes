import React from 'react';
import './styles/ContactHeroSection.css';
import './styles/ContactCardsSection.css';
import './styles/ContactEnquirySection.css';
import ContactHeroSection from './components/ContactHeroSection';
import ContactCardsSection from './components/ContactCardsSection';
import ContactEnquirySection from './components/ContactEnquirySection';


const Contact = () => (
  <div className="contactus-outer">
    <ContactHeroSection />
    <ContactCardsSection />
    <ContactEnquirySection />
  </div>
);

export default Contact;
