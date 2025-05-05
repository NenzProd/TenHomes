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
                <img src="data:image/jpeg;base64,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" alt="Earn Hassle-Free" className="how-it-works-img" />
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
    </div> // Closing home-page div
  ); // Closing return statement
};

export default Home;