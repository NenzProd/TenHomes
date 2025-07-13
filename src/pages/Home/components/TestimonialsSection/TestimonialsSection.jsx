import React, { useRef } from 'react';
import './TestimonialsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  const testimonialsData = [
    {
      stars: '★★★★★',
      text: '"TenHomes made renting my house so easy. I get my rent on time and my property is well taken care of!"',
      client: '— Priya Sharma',
      location: 'Chennai, Owner',
    },
    {
      stars: '★★★★★',
      text: '"The PG is super clean, safe, and feels like home. The team is always responsive!"',
      client: '— Rahul Verma',
      location: 'Chennai, Tenant',
    },
    {
      stars: '★★★★★',
      text: '"I never thought PG management could be this hassle-free. Highly recommend TenHomes!"',
      client: '— Mrs. Lakshmi',
      location: 'Chennai, Owner',
    },
  ];

  const testimonialsScrollRef = useRef(null);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonials-underline"></div>
        <div className="testimonials-slider-wrapper">
          <button 
            className="testimonials-slider-arrow left"
            onClick={() => {
              const el = testimonialsScrollRef.current;
              const scrollAmount = el.clientWidth * 0.8;
              el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }}
            aria-label="Previous testimonial"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div
            className="testimonials-horizontal-scroll"
            ref={testimonialsScrollRef}
          >
            {testimonialsData.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-stars">{testimonial.stars}</div>
                <div className="testimonial-text">{testimonial.text}</div>
                <div className="testimonial-client">{testimonial.client}</div>
                <div className="testimonial-location">{testimonial.location}</div>
              </div>
            ))}
          </div>
          <button 
            className="testimonials-slider-arrow right"
            onClick={() => {
              const el = testimonialsScrollRef.current;
              const scrollAmount = el.clientWidth * 0.8;
              el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }}
            aria-label="Next testimonial"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
