import React, { useState } from "react";
import properties from "../../properties.json";
import "./PropertyList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, faUser, faWifi, faSnowflake, faTshirt, faUtensils, 
  faBroom, faCar, faBolt, faStar
} from "@fortawesome/free-solid-svg-icons";
import PropertyDetailModal from "./PropertyDetailModal";

const amenityIcons = {
  wifi: <FontAwesomeIcon icon={faWifi} />,
  ac: <FontAwesomeIcon icon={faSnowflake} />,
  laundry: <FontAwesomeIcon icon={faTshirt} />,
  cleaning: <FontAwesomeIcon icon={faBroom} />,
  kitchen: <FontAwesomeIcon icon={faUtensils} />,
  parking: <FontAwesomeIcon icon={faCar} />,
  power: <FontAwesomeIcon icon={faBolt} />
};

const occupancyLabels = {
  single: "Single",
  double: "Double",
  four: "Four",
};

const PropertyList = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="property-list">
      {properties.map((property) => (
        <div className="property-card" key={property.id}>
          <img
            className="property-image"
            src={`/src/assets/${property.image.replace('images/', '')}`}
            alt={property.name}
          />
          <div className="property-info">
            <div className="property-title-row">
              <h3 className="property-title">
                {property.name.length > 22 ? property.name.slice(0, 20) + "..." : property.name}
              </h3>
              <span className="property-rating">
                <FontAwesomeIcon icon={faStar} style={{ color: '#FFA534', marginRight: 2, fontSize: '1.1em' }} />
                {property.rating}
              </span>
            </div>
            <div className="property-location-row">
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#CD5D4E', marginRight: 4 }} />
              <span>{property.location}</span>
            </div>
            <div className="property-price-box">
              <span className="property-price-label">Starts from</span>
              <span className="property-price-highlight">{property.priceDisplay}</span>
            </div>
            <hr className="property-divider" />
            <div className="property-room-options">
              <span className="property-room-label">Room Options</span>
              {property.occupancy.map((type) => (
                <span className="property-room-badge" key={type}>
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: 3, color: '#CD5D4E' }} /> {occupancyLabels[type] || type}
                </span>
              ))}
            </div>
            <div className="property-key-amenities">
              <span className="property-amenities-label">Key Amenities</span>
              <div className="property-amenities-icons">
                {property.amenities.slice(0, 5).map((amenity) => (
                  <span className="property-amenity-icon" key={amenity} title={amenity} style={{ color: '#CD5D4E' }}>
                    {amenityIcons[amenity] || amenity}
                  </span>
                ))}
              </div>
            </div>
            <button className="property-view-details-btn" onClick={() => handleViewDetails(property)}>
              View Details
            </button>
          </div>
        </div>
      ))}
      {modalOpen && selectedProperty && (
        <PropertyDetailModal property={selectedProperty} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PropertyList;
