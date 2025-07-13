import React, { useRef, useEffect } from 'react';
import './ExtrasSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCouch, faUtensils, faWifi, faBath, faBook, faBlender, 
  faSnowflake, faBroom, faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const ExtrasSection = () => {
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

  const extrasScrollRef = useRef(null);

  useEffect(() => {
    // On mount, scroll to the very left to avoid phantom left offset
    if (extrasScrollRef.current) {
      extrasScrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section className="extras-section">
      <div className="extras-container">
        <h2 className="extras-title">Extras That Make Life Easier</h2>
        <p className="extras-subtitle">All the little things that make your stay truly comfortable and hassle-free.</p>
        <div className="extras-carousel-wrapper">
          <button className="carousel-arrow left" onClick={() => {
            const el = extrasScrollRef.current;
            const scrollAmount = Math.min(el.clientWidth * 0.8, 300);
            el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div
            className="extras-horizontal-scroll"
            ref={extrasScrollRef}
            tabIndex={0}
            role="region"
            aria-label="Extras that make your life better"
          >
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
          <button className="carousel-arrow right" onClick={() => {
            const el = extrasScrollRef.current;
            const scrollAmount = Math.min(el.clientWidth * 0.8, 300);
            el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExtrasSection;
