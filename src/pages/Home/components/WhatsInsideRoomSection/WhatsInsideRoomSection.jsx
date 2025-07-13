import React, { useRef, useState, useEffect } from 'react';
import './WhatsInsideRoomSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBed, faDoorOpen, faWindowMaximize, faCircle, faSnowflake,
  faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import matressVideo from '../../../../assets/Videos/matress.mp4';
import cupboardVideo from '../../../../assets/Videos/cupboard.mp4';
import curtainVideo from '../../../../assets/Videos/curtain.mp4';
import fanLightVideo from '../../../../assets/Videos/fan light.mp4';
import mirrorVideo from '../../../../assets/Videos/mirror.mp4';
import acVideo from '../../../../assets/Videos/ac.mp4';

const WhatsInsideRoomSection = () => {
  const whatsInsideItems = [
    { icon: faBed, title: 'Bed & Mattress', desc: 'Sleep-ready setup with quality foam mattress.', video: matressVideo, longDesc: "High-quality mattress that provides excellent support for a good night's sleep. Our mattresses are made with premium foam materials for durability and comfort." },
    { icon: faDoorOpen, title: 'Wardrobe', desc: 'Spacious storage for your belongings.', video: cupboardVideo, longDesc: "Spacious built-in wardrobes with multiple storage compartments. Each wardrobe has hanging space, shelves, and drawers to organize all your belongings." },
    { icon: faWindowMaximize, title: 'Curtain', desc: 'Window curtains for privacy and comfort.', video: curtainVideo, longDesc: "Premium blackout curtains provide privacy and light control. The elegant curtains complement the room's decor and help regulate room temperature." },
    { icon: faCircle, title: 'Mirror', desc: 'Full-length mirror for daily use.', video: mirrorVideo, longDesc: "Full-length mirrors to help you get ready with confidence. The mirrors are strategically placed to maximize light and create a sense of space." },
    { icon: faSnowflake, title: 'AC', desc: 'Air-conditioned comfort in select rooms.', video: acVideo, longDesc: "Modern air conditioning unit provides comfortable temperature control all year round. Our AC units are energy efficient and come with remote controls for easy temperature adjustment." }
  ];

  const carouselRef = useRef(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const videoRef = useRef(null);
  
  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  // New touch interaction tracking
  const touchStartTime = useRef(0);
  const touchDistance = useRef(0);
  const isTouchScrolling = useRef(false);

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
    if (e.touches.length !== 1) return; // Only single touch
    isDragging.current = true;
    isTouchScrolling.current = false;
    touchStartTime.current = Date.now();
    startX.current = e.touches[0].clientX;
    scrollLeft.current = carouselRef.current.scrollLeft;
    touchDistance.current = 0;
  };
  
  const handleTouchEnd = (e) => {
    const touchDuration = Date.now() - touchStartTime.current;
    isDragging.current = false;
    
    // If touch was short and movement was minimal, treat as a click/tap
    if (touchDuration < 250 && Math.abs(touchDistance.current) < 15 && !isTouchScrolling.current) {
      // Find which card was tapped
      const target = e.target;
      const card = target.closest('.whats-inside-room-card');
      if (card) {
        const allCards = Array.from(carouselRef.current.querySelectorAll('.whats-inside-room-card'));
        const cardIndex = allCards.indexOf(card);
        if (cardIndex !== -1) {
          setSelectedIdx(cardIndex);
        }
      }
    }
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging.current || e.touches.length !== 1) return;
    const x = e.touches[0].clientX;
    const diff = x - startX.current;
    touchDistance.current = diff;
    
    // If movement is significant, mark as scrolling to prevent click
    if (Math.abs(diff) > 5) {
      isTouchScrolling.current = true;
      // Calculate new scroll position - using negative diff for natural scrolling direction
      const newScrollPosition = scrollLeft.current - diff;
      
      // Make sure we don't scroll beyond boundaries
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      
      // Apply scroll with boundary check
      if (newScrollPosition >= 0 && newScrollPosition <= maxScroll) {
        carouselRef.current.scrollLeft = newScrollPosition;
      }
    }
  };

  // Effect to handle video reload when selected index changes
  useEffect(() => {
    // Force video reload when selection changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
    }
    
    // Scroll the selected card into view on mobile
    if (carouselRef.current) {
      const selectedCard = carouselRef.current.children[selectedIdx];
      if (selectedCard && window.innerWidth <= 768) {
        selectedCard.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedIdx]);

  return (
    <section className="whats-inside-room-section">
      <div className="whats-inside-room-container">
        <h2 className="whats-inside-room-title">What's Inside Your Room?</h2>
        <p className="whats-inside-room-subtitle">High-quality amenities and furnishings for your comfort</p>
        <div className="whats-inside-room-carousel-wrapper">
          <button className="carousel-arrow left" onClick={() => {
            const el = carouselRef.current;
            // Improved left arrow scrolling
            const scrollAmount = Math.min(el.clientWidth * 0.8, 300);
            el.scrollBy({ 
              left: -scrollAmount, 
              behavior: 'smooth' 
            });
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
                style={{ 
                  border: selectedIdx === idx ? '2px solid #c75c4a' : undefined,
                  backgroundColor: selectedIdx === idx ? '#fff6f0' : undefined,
                  transform: selectedIdx === idx ? 'translateY(-5px)' : undefined,
                  boxShadow: selectedIdx === idx ? '0 8px 16px rgba(0,0,0,0.12)' : undefined
                }}
              >
                <div className="whats-inside-room-icon" style={{ 
                  backgroundColor: selectedIdx === idx ? 'rgba(199, 92, 74, 0.2)' : 'rgba(199, 92, 74, 0.1)'
                }}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="whats-inside-room-item-title">{item.title}</div>
                <div className="whats-inside-room-item-desc">{item.desc}</div>
              </div>
            ))}
          </div>
          <button className="carousel-arrow right" onClick={() => {
            const el = carouselRef.current;
            // Improved right arrow scrolling
            const scrollAmount = Math.min(el.clientWidth * 0.8, 300);
            el.scrollBy({ 
              left: scrollAmount, 
              behavior: 'smooth' 
            });
          }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="whats-inside-videos">
          <div className="whats-inside-video-row">
            <div className="whats-inside-video-card big" key={`video-${selectedIdx}`}>
              <video
                className="whats-inside-video big"
                ref={videoRef}
                controls
                autoPlay
                loop
                muted
                poster={null}
                key={`video-src-${selectedIdx}`}
              >
                <source src={whatsInsideItems[selectedIdx].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="whats-inside-video-desc-card big" key={`desc-${selectedIdx}`}>
              <div className="whats-inside-video-desc-title">{whatsInsideItems[selectedIdx].title}</div>
              <div className="whats-inside-video-desc-text">
                {whatsInsideItems[selectedIdx].longDesc}
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default WhatsInsideRoomSection;
