import React from 'react';
import './HowItWorksSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faUser } from '@fortawesome/free-solid-svg-icons';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="how-it-works-grid">
          {/* For Tenants */}
          <div className="how-it-works-col tenants">
            <div className="how-it-works-col-logo-container tenants">
              <div className="how-it-works-col-logo">
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <div className="how-it-works-col-title tenants">For Tenants</div>
            </div>
            <div className="how-it-works-step-card modern">
              <div className="how-it-works-step-dot">1</div>
              <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" alt="Find Your Home" className="how-it-works-img" />
              <div className="how-it-works-step-title highlight">Find Your Home</div>
              <div className="how-it-works-step-desc">Browse our listings or contact us with your location and budget requirements.</div>
            </div>
            <div className="how-it-works-step-card modern">
              <div className="how-it-works-step-dot">2</div>
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" alt="Visit & Book" className="how-it-works-img" />
              <div className="how-it-works-step-title highlight">Visit & Book</div>
              <div className="how-it-works-step-desc">Visit shortlisted properties & complete simple booking formalities without hassle.</div>
            </div>
            <div className="how-it-works-step-card modern">
              <div className="how-it-works-step-dot">3</div>
              <img src="https://media.istockphoto.com/id/1413463118/photo/university-students-moving-into-campus-accommodation.jpg?s=612x612&w=0&k=20&c=4gCjjcSRUij9glZU5hYlSYd6N4jV30i7l88Wb95opq8=" alt="Move in & Enjoy" className="how-it-works-img" />
              <div className="how-it-works-step-title highlight">Move in & Enjoy</div>
              <div className="how-it-works-step-desc">Move into your spacious, fully-managed, home-like PG with all amenities ready.</div>
            </div>
          </div>
          {/* For Owners */}
          <div className="how-it-works-col owners">
            <div className="how-it-works-col-logo-container owners">
              <div className="how-it-works-col-logo">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="how-it-works-col-title owners">For Owners</div>
            </div>
            <div className="how-it-works-step-card modern">
              <div className="how-it-works-step-dot">1</div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" alt="List Your Property" className="how-it-works-img" />
              <div className="how-it-works-step-title highlight">List Your Property</div>
              <div className="how-it-works-step-desc">Share your property details and requirements with us online or by phone.</div>
            </div>
            <div className="how-it-works-step-card modern">
              <div className="how-it-works-step-dot">2</div>
              <img src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" alt="We Inspect & Setup" className="how-it-works-img" />
              <div className="how-it-works-step-title highlight">We Inspect & Setup</div>
              <div className="how-it-works-step-desc">We visit, inspect, and help you set up your home as a PG with all compliance handled.</div>
            </div>
            <div className="how-it-works-step-card modern">
              <div className="how-it-works-step-dot">3</div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8-G56v03kL6lmkDsDSzHCkGEEJ8ckiObsw&s" alt="Earn Hassle-Free" className="how-it-works-img" />
              <div className="how-it-works-step-title highlight">Earn Hassle-Free</div>
              <div className="how-it-works-step-desc">We fill your rooms, manage tenants, and remit you guaranteed rent on-time—every month.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
