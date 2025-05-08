import React, { useState, useEffect } from "react";
import "./PropertyDetailModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faXmark, 
  faChevronLeft, 
  faChevronRight, 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faStar, 
  faBed, 
  faShower, 
  faWifi,
  faUtensils,
  faLock,
  faMoneyBill,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";

const getImagePath = (img) => `/src/assets/${img.replace('images/', '')}`;

const PropertyDetailModal = ({ property, onClose }) => {
  const images = Array.from(new Set([property.image, ...(property.gallery || [])]));
  const [current, setCurrent] = useState(0);

  const prevImg = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const nextImg = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  // Trap focus and close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="property-modal-overlay" onClick={onClose}>
      <div className="property-modal property-modal-fancy" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </button>
        
        <div className="modal-gallery-fancy">
          <img 
            className="modal-gallery-img-fancy" 
            src={getImagePath(images[current])} 
            alt={`${property.name} - Image ${current + 1}`} 
          />
          {images.length > 1 && (
            <>
              <button className="modal-gallery-nav-fancy left" onClick={prevImg} aria-label="Previous image">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="modal-gallery-nav-fancy right" onClick={nextImg} aria-label="Next image">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </>
          )}
        </div>
        
        <div className="modal-gallery-thumbs-fancy">
          {images.map((img, idx) => (
            <img
              key={img}
              src={getImagePath(img)}
              alt={`Thumbnail ${idx + 1}`}
              className={`modal-thumb-fancy ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
        
        <div className="modal-details-fancy">
          <h2>{property.name}</h2>
          
          <div className="modal-rating">
            <FontAwesomeIcon icon={faStar} />
            <span>{property.rating} <span className="review-count">({property.reviews} reviews)</span></span>
          </div>
          
          <p className="modal-location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>{property.location}</span>
          </p>
          
          <p className="modal-intro">{property.introText}</p>
          
          <div className="modal-section-grid">
            {property.roomFeatures?.length > 0 && (
              <div>
                <h4><FontAwesomeIcon icon={faBed} className="section-icon" /> Room Features</h4>
                <ul>{property.roomFeatures.map((f) => <li key={f}>{f}</li>)}</ul>
              </div>
            )}
            
            {property.sharedAmenities?.length > 0 && (
              <div>
                <h4><FontAwesomeIcon icon={faWifi} className="section-icon" /> Shared Amenities</h4>
                <ul>{property.sharedAmenities.map((a) => <li key={a}>{a}</li>)}</ul>
              </div>
            )}
            
            {property.kitchenAccess?.length > 0 && (
              <div>
                <h4><FontAwesomeIcon icon={faUtensils} className="section-icon" /> Kitchen Access</h4>
                <ul>{property.kitchenAccess.map((k) => <li key={k}>{k}</li>)}</ul>
              </div>
            )}
            
            {property.utilities?.length > 0 && (
              <div>
                <h4><FontAwesomeIcon icon={faShower} className="section-icon" /> Utilities</h4>
                <ul>{property.utilities.map((u) => <li key={u}>{u}</li>)}</ul>
              </div>
            )}
            
            {property.safety?.length > 0 && (
              <div>
                <h4><FontAwesomeIcon icon={faShieldAlt} className="section-icon" /> Safety</h4>
                <ul>{property.safety.map((s) => <li key={s}>{s}</li>)}</ul>
              </div>
            )}
            
            {property.rentDetails?.length > 0 && (
              <div>
                <h4><FontAwesomeIcon icon={faMoneyBill} className="section-icon" /> Rent Details</h4>
                <ul>{property.rentDetails.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
            )}
          </div>
          
          <div className="modal-section-contact">
            <h4><FontAwesomeIcon icon={faPhone} className="contact-icon" /> Contact</h4>
            <p>
              <a href={`tel:${property.contact?.phone}`}>
                <FontAwesomeIcon icon={faPhone} />
                {property.contact?.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${property.contact?.email}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                {property.contact?.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
