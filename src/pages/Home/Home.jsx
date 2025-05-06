import React, { useRef, useState } from 'react';
import './Home.css';
import houseOwnerImg from '../../assets/house owner.jpg';
import cozyPGImg from '../../assets/cozyPG.webp';
import ownerMeetingImg from '../../assets/TenHomes-Owner-meet.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faClock, faShieldAlt, faUserFriends, faHome, faRupeeSign, faFileContract, faKey, faGem, faChevronLeft, faChevronRight, faCouch, faUtensils, faWifi, faBath, faBook, faBlender, faSnowflake, faBroom } from '@fortawesome/free-solid-svg-icons';

/**
 * =====================================================
 * Home Page Component
 * Main landing page for the TenHomes website
 * =====================================================
 */
const Home = () => {
  // Add scroll effect for navbar
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    
    // Add menu toggle functionality
    const handleMenuToggle = () => {
      const hamburger = document.querySelector('.navbar__hamburger');
      const links = document.querySelector('.navbar__links');
      const body = document.body;
      
      if (hamburger && links) {
        hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          links.classList.toggle('mobile-open');
          body.classList.toggle('menu-open');
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleMenuToggle();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Online images for benefit cards (one for each card)
  const benefitCardData = [
    {
      img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=200&q=80',
      label: 'Guaranteed Higher Rent',
    },
    {
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80',
      label: 'Zero Management Hassle',
    },
    {
      img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=200&q=80',
      label: 'Maintenance Taken Care Of',
    },
    {
      img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=200&q=80',
      label: 'Trusted Tenant Verification',
    },
    {
      img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=200&q=80',
      label: 'Hassle-Free Agreement Prep',
    },
  ];

  const whatsInsideItems = [
    { icon: '🛏️', title: 'Bed & Mattress', desc: 'Sleep-ready setup with quality foam mattress.', video: 'matress.mp4', longDesc: "High-quality mattress that provides excellent support for a good night's sleep. Our mattresses are made with premium foam materials for durability and comfort." },
    { icon: '🪞', title: 'Wardrobe', desc: 'Spacious storage for your belongings.', video: 'cupboard.mp4', longDesc: "Spacious built-in wardrobes with multiple storage compartments. Each wardrobe has hanging space, shelves, and drawers to organize all your belongings." },
    { icon: '🪟', title: 'Curtain', desc: 'Window curtains for privacy and comfort.', video: 'curtain.mp4', longDesc: "Premium blackout curtains provide privacy and light control. The elegant curtains complement the room's decor and help regulate room temperature." },
    { icon: '💡', title: 'Ceiling Fan & Lights', desc: 'Bright, airy, and well-lit rooms.', video: 'fan light.mp4', longDesc: "High-quality ceiling fans with integrated lighting fixtures. The fans provide excellent air circulation and can be used alongside AC or as an energy-saving alternative." },
    { icon: '🪞', title: 'Mirror', desc: 'Full-length mirror for daily use.', video: 'mirror.mp4', longDesc: "Full-length mirrors to help you get ready with confidence. The mirrors are strategically placed to maximize light and create a sense of space." },
    { icon: '❄️', title: 'AC', desc: 'Air-conditioned comfort in select rooms.', video: 'ac.mp4', longDesc: "Modern air conditioning unit provides comfortable temperature control all year round. Our AC units are energy efficient and come with remote controls for easy temperature adjustment." }
  ];

  const extrasItems = [
    { icon: faCouch, title: 'Cozy Lounge', desc: 'Relax in a comfortable common area with sofas and a TV.', img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { icon: faUtensils, title: 'Dining Table', desc: 'Spacious dining area for meals and socializing.', img: 'https://images.unsplash.com/photo-1657524398377-567034729507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpbmluZyUyMHRhYmxlfGVufDB8fDB8fHww' },
    { icon: faBook, title: 'Study Desk', desc: 'Dedicated study desk in every room for focused work.', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { icon: faWifi, title: 'High-speed Wi-Fi', desc: 'Fast, reliable internet for work and entertainment.', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { icon: faBath, title: 'Modern Bathroom', desc: 'Clean, modern bathrooms with hot water and ventilation.', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { icon: faBath, title: 'Washing Machine', desc: 'On-site washing machine for convenient laundry.', img: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { icon: faBlender, title: 'Kitchen & Gas', desc: 'Fully equipped kitchen with gas stove and utensils.', img: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    { icon: faSnowflake, title: 'Refrigerator', desc: 'Large fridge to keep your food and drinks fresh.', img: 'https://images.unsplash.com/photo-1536353284924-9220c464e262?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZGdlfGVufDB8fDB8fHww' },
    { icon: faBroom, title: 'Vacuum Cleaner', desc: 'Vacuum cleaner for easy room cleaning.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e8Pzj4tBWDz_KhXOBQPmYlY7ei6LHYVOHw&s' },
  ];

  const carouselRef = useRef(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Drag handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDragging.current = false;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2; // scroll-fast
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };
  // Touch events for mobile
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };
  const handleTouchEnd = () => {
    isDragging.current = false;
  };
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="home-page">
      {/* Sticky Navbar */}
      <nav className="navbar">
      </nav>
      
      {/* 
        =================================================
        HERO SECTION
        Main banner with heading, description and CTAs
        =================================================
      */}
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
            {/* Call to Action Buttons */}
            <div className="hero-buttons">
              <button className="hero-cta primary">List Your House</button>
              <button className="hero-cta secondary">Find a PG Home</button>
            </div>
          </div>
          {/* Hero Images */}
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

      {/* 
        =================================================
        OWNER BENEFITS SECTION
        Highlighting benefits for house owners
        =================================================
      */}
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

      {/* 
        =================================================
        OWNER HESITATIONS SECTION
        Highlighting common hesitations from property owners
        =================================================
      */}
      <section className="owner-hesitations-section">
        <div className="hesitations-container">
          <h2>Common Owner Hesitations are...</h2>
          <div className="hesitation-items">
            <div className="hesitation-item">
              <div className="hesitation-icon">
                <FontAwesomeIcon icon={faUserFriends} className="hesitation-fa-icon" />
              </div>
              <div className="hesitation-content">
                <h3 className="hesitation-title">Worried about bachelor tenants</h3>
                <p className="hesitation-description">
                  Concerns about noise, parties, or lack of responsibility are common.
                </p>
              </div>
            </div>
            <div className="hesitation-item">
              <div className="hesitation-icon">
                <FontAwesomeIcon icon={faHome} className="hesitation-fa-icon" />
              </div>
              <div className="hesitation-content">
                <h3 className="hesitation-title">Property misuse or damage</h3>
                <p className="hesitation-description">
                  Fear of excessive wear, unpaid bills, or poor maintenance.
                </p>
              </div>
            </div>
            <div className="hesitation-item">
              <div className="hesitation-icon">
                <FontAwesomeIcon icon={faRupeeSign} className="hesitation-fa-icon" />
              </div>
              <div className="hesitation-content">
                <h3 className="hesitation-title">Irregular rent payments</h3>
                <p className="hesitation-description">
                  Anxiety about delayed or missed rent from multiple tenants.
                </p>
              </div>
            </div>
            <div className="hesitation-item">
              <div className="hesitation-icon">
                <FontAwesomeIcon icon={faFileContract} className="hesitation-fa-icon" />
              </div>
              <div className="hesitation-content">
                <h3 className="hesitation-title">Legal & paperwork hassles</h3>
                <p className="hesitation-description">
                  Uncertainty about agreements, police verification, and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =================================================
        OWNER BENEFITS SECTION (cards)
        =================================================
      */}
      <section className="owner-benefits-hesitations-section">
        <div className="owner-benefits-hesitations-wrapper">
          <div className="owner-benefits-cards">
            <div className="benefits-block">
              <h2 className="benefits-title">
                <FontAwesomeIcon icon={faKey} className="benefits-icon" /> Why Let Your Home as a PG?
              </h2>
              <div className="benefits-cards-grid custom-benefits-grid">
                {benefitCardData.map((card, idx) => (
                  <div className="benefit-card custom-benefit-card" key={idx}>
                    <img src={card.img} alt={card.label} className="benefit-img custom-benefit-img" />
                    <span className="custom-benefit-label">{card.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="owner-benefits-block">
              <h2 className="benefits-title">
                <FontAwesomeIcon icon={faGem} className="benefits-icon" /> Owner Benefits with TenHomes
              </h2>
              <div className="benefits-cards-grid">
                <div className="benefit-card"><FontAwesomeIcon icon={faUserFriends} className="benefit-icon-img" /><span>Verified tenants only</span></div>
                <div className="benefit-card"><FontAwesomeIcon icon={faClock} className="benefit-icon-img" /><span>Full property management & maintenance</span></div>
                <div className="benefit-card"><FontAwesomeIcon icon={faRupeeSign} className="benefit-icon-img" /><span>On-time, guaranteed rent</span></div>
                <div className="benefit-card"><FontAwesomeIcon icon={faFileContract} className="benefit-icon-img" /><span>All paperwork & compliance handled</span></div>
              </div>
              <div className="owner-benefits-cta">
                <div className="owner-benefits-cta-title">
                  Curious how we make it so effortless?
                </div>
                <div className="owner-benefits-cta-desc">
                  Discover how TenHomes transforms your under-utilised space into a profitable, worry-free PG business—without compromising on safety or peace of mind.
                </div>
                <button className="owner-benefits-cta-btn about-cta-btn">
                  Get Started & Unlock Your Home's True Potential
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =================================================
        HOW IT WORKS SECTION
        =================================================
      */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="how-it-works-title">How It Works</h2>
          <div className="how-it-works-subtitle">See how TenHomes makes it easy for both Tenants & Owners</div>
          <div className="how-it-works-grid">
            {/* For Tenants */}
            <div className="how-it-works-col">
              <div className="how-it-works-col-title tenants">For Tenants</div>
              <div className="how-it-works-step-card">
                <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Find Your Home" className="how-it-works-img" />
                <div className="how-it-works-step-title">Find Your Home</div>
                <div className="how-it-works-step-desc">Browse our listings or contact us with your location and budget requirements.</div>
              </div>
              <div className="how-it-works-step-card">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Visit & Book" className="how-it-works-img" />
                <div className="how-it-works-step-title">Visit & Book</div>
                <div className="how-it-works-step-desc">Visit shortlisted properties & complete simple booking formalities without hassle.</div>
              </div>
              <div className="how-it-works-step-card">
                <img src="https://media.istockphoto.com/id/1413463118/photo/university-students-moving-into-campus-accommodation.jpg?s=612x612&w=0&k=20&c=4gCjjcSRUij9glZU5hYlSYd6N4jV30i7l88Wb95opq8=" alt="Move in & Enjoy" className="how-it-works-img" />
                <div className="how-it-works-step-title">Move in & Enjoy</div>
                <div className="how-it-works-step-desc">Move into your spacious, fully-managed, home-like PG with all amenities ready.</div>
              </div>
              <button className="how-it-works-btn tenants">Find Your PG Home</button>
            </div>
            {/* For Owners */}
            <div className="how-it-works-col">
              <div className="how-it-works-col-title owners">For Owners</div>
              <div className="how-it-works-step-card">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="List Your Property" className="how-it-works-img" />
                <div className="how-it-works-step-title">List Your Property</div>
                <div className="how-it-works-step-desc">Share your property details and requirements with us online or by phone.</div>
              </div>
              <div className="how-it-works-step-card">
                <img src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="We Inspect & Setup" className="how-it-works-img" />
                <div className="how-it-works-step-title">We Inspect & Setup</div>
                <div className="how-it-works-step-desc">We visit, inspect, and help you set up your home as a PG with all compliance handled.</div>
              </div>
              <div className="how-it-works-step-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8-G56v03kL6lmkDsDSzHCkGEEJ8ckiObsw&s" alt="Earn Hassle-Free" className="how-it-works-img" />
                <div className="how-it-works-step-title">Earn Hassle-Free</div>
                <div className="how-it-works-step-desc">We fill your rooms, manage tenants, and remit you guaranteed rent on-time—every month.</div>
              </div>
              <button className="how-it-works-btn owners">List Your House</button>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =================================================
        WHAT'S INSIDE YOUR ROOM SECTION
        =================================================
      */}
      <section className="whats-inside-room-section">
        <div className="whats-inside-room-container">
          <h2 className="whats-inside-room-title">What's Inside Your Room?</h2>
          <p className="whats-inside-room-subtitle">High-quality amenities and furnishings for your comfort</p>
          <div className="whats-inside-room-carousel-wrapper">
            <button className="carousel-arrow left" onClick={() => {
              const el = carouselRef.current;
              el.scrollBy({ left: -el.offsetWidth / 1.5, behavior: 'smooth' });
            }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div
              className="whats-inside-room-carousel"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
              style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
            >
              {whatsInsideItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`whats-inside-room-card${selectedIdx === idx ? ' selected' : ''}`}
                  onClick={() => setSelectedIdx(idx)}
                  style={{ border: selectedIdx === idx ? '2px solid #c75c4a' : undefined }}
                >
                  <div className="whats-inside-room-icon">{item.icon}</div>
                  <div className="whats-inside-room-item-title">{item.title}</div>
                  <div className="whats-inside-room-item-desc">{item.desc}</div>
                </div>
              ))}
            </div>
            <button className="carousel-arrow right" onClick={() => {
              const el = carouselRef.current;
              el.scrollBy({ left: el.offsetWidth / 1.5, behavior: 'smooth' });
            }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="whats-inside-videos">
            <div className="whats-inside-video-row">
              <div className="whats-inside-video-card big">
                <video
                  key={whatsInsideItems[selectedIdx].video}
                  className="whats-inside-video big"
                  controls
                  autoPlay
                  loop
                  muted
                  poster={null}
                >
                  <source src={`/src/assets/Videos/${whatsInsideItems[selectedIdx].video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="whats-inside-video-label">{whatsInsideItems[selectedIdx].title}</div>
              </div>
              <div className="whats-inside-video-desc-card big">
                <div className="whats-inside-video-desc-text">
                  {whatsInsideItems[selectedIdx].longDesc}
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
      {/* 
        =================================================
        EXTRAS SECTION
        =================================================
      */}
      <section className="extras-section">
        <div className="extras-container">
          <h2 className="extras-title">Extras That Make Life Easier</h2>
          <p className="extras-subtitle">All the little things that make your stay truly comfortable and hassle-free.</p>
          <div className="extras-grid">
            {extrasItems.map((item, idx) => (
              <div className="extras-card" key={idx}>
                <div className="extras-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="extras-card-title">{item.title}</div>
                <div className="extras-card-desc">{item.desc}</div>
                <img className="extras-card-img" src={item.img} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 
        =================================================
        TESTIMONIALS SECTION
        =================================================
      */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <div className="testimonials-underline"></div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-text">“TenHomes made renting my house so easy. I get my rent on time and my property is well taken care of!”</div>
              <div className="testimonial-client">— Priya Sharma</div>
              <div className="testimonial-location">Chennai, Owner</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-text">“The PG is super clean, safe, and feels like home. The team is always responsive!”</div>
              <div className="testimonial-client">— Rahul Verma</div>
              <div className="testimonial-location">Chennai, Tenant</div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-text">“I never thought PG management could be this hassle-free. Highly recommend TenHomes!”</div>
              <div className="testimonial-client">— Mrs. Lakshmi</div>
              <div className="testimonial-location">Chennai, Owner</div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =================================================
        FAQ SECTION
        =================================================
      */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Quick answers to help you move in faster!</p>
          <div className="faq-list">
            {/* Example FAQ items, you can add more or update as needed */}
            <details className="faq-item">
              <summary>What is included in the rent?</summary>
              <div className="faq-answer">All basic furnishings, maintenance, and select utilities are included. Please check the property details for specifics.</div>
            </details>
            <details className="faq-item">
              <summary>How do I list my property?</summary>
              <div className="faq-answer">Click on "List Your House" and fill out the form. Our team will contact you for the next steps.</div>
            </details>
            <details className="faq-item">
              <summary>Are tenants verified?</summary>
              <div className="faq-answer">Yes, all tenants undergo thorough background checks and verification before moving in.</div>
            </details>
            <details className="faq-item">
              <summary>How is rent paid to owners?</summary>
              <div className="faq-answer">Owners receive guaranteed rent directly in their bank account every month, on time.</div>
            </details>
          </div>
          <div className="faq-cta">
            <div className="faq-cta-text">Still have doubts?</div>
            <button className="faq-cta-btn">Talk to TenHomes</button>
          </div>
        </div>
      </section>
    </div> // Closing home-page div
  ); // Closing return statement
};

export default Home;