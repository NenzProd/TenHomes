import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const FilterSidebar = ({ onFilterChange, onApplyFilters }) => {
  const [price, setPrice] = useState(8000);
  const [location, setLocation] = useState('');
  const [expandedSection, setExpandedSection] = useState('location');
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    onFilterChange({ price: e.target.value });
  };
  
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilterChange({ location: e.target.value });
  };
  
  const resetFilters = () => {
    setPrice(8000);
    setLocation('');
  };
  
  const handleApplyFilters = () => {
    onApplyFilters({ price, location });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <div className="filter-title">
          <FontAwesomeIcon icon={faFilter} className="filter-icon" />
          <h3>Filters</h3>
        </div>
        <button className="reset-filters">Reset Filters</button>
      </div>
      
      <div className="filter-section">
        <div 
          className={`filter-section-header ${expandedSection === 'location' ? 'active' : ''}`}
          onClick={() => toggleSection('location')}
        >
          <h4>Location & Price</h4>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`section-toggle ${expandedSection === 'location' ? 'rotated' : ''}`}
          />
        </div>
        
        {expandedSection === 'location' && (
          <div className="filter-section-content">
            <div className="filter-group">
              <label>Location</label>
              <div className="location-select-wrapper">
                <select 
                  value={location}
                  onChange={handleLocationChange}
                  className="location-select"
                >
                  <option value="">All Locations</option>
                  <option value="Anna Nagar">Anna Nagar</option>
                  <option value="Gerugambakkam">Gerugambakkam</option>
                  <option value="Porur">Porur</option>
                  <option value="T Nagar">T Nagar</option>
                </select>
              </div>
            </div>
            
            <div className="filter-group">
              <label>Budget: ₹{price}</label>
              <div className="price-range">
                <input 
                  type="range" 
                  min="5000" 
                  max="15000" 
                  value={price}
                  onChange={handlePriceChange}
                  className="price-slider"
                  step="500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="filter-section">
        <div 
          className={`filter-section-header ${expandedSection === 'room' ? 'active' : ''}`}
          onClick={() => toggleSection('room')}
        >
          <h4>Room Type & Gender</h4>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`section-toggle ${expandedSection === 'room' ? 'rotated' : ''}`}
          />
        </div>
        
        {expandedSection === 'room' && (
          <div className="filter-section-content">
            <div className="filter-group">
              <label>Room Type</label>
              <div className="checkbox-group">
                <div className="filter-checkbox">
                  <input type="checkbox" id="single" />
                  <label htmlFor="single">Single</label>
                </div>
                <div className="filter-checkbox">
                  <input type="checkbox" id="double" />
                  <label htmlFor="double">Double</label>
                </div>
                <div className="filter-checkbox">
                  <input type="checkbox" id="four" />
                  <label htmlFor="four">Four Sharing</label>
                </div>
              </div>
            </div>
            
            <div className="filter-group">
              <label>Gender</label>
              <div className="radio-group">
                <div className="filter-radio">
                  <input type="radio" id="male" name="gender" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="filter-radio">
                  <input type="radio" id="female" name="gender" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="filter-section">
        <div 
          className={`filter-section-header ${expandedSection === 'amenities' ? 'active' : ''}`}
          onClick={() => toggleSection('amenities')}
        >
          <h4>Amenities</h4>
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`section-toggle ${expandedSection === 'amenities' ? 'rotated' : ''}`}
          />
        </div>
        
        {expandedSection === 'amenities' && (
          <div className="filter-section-content">
            <div className="amenity-checkboxes">
              <div className="filter-checkbox">
                <input type="checkbox" id="wifi" />
                <label htmlFor="wifi">WiFi</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" id="ac" />
                <label htmlFor="ac">Air Conditioning</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" id="laundry" />
                <label htmlFor="laundry">Laundry</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" id="kitchen" />
                <label htmlFor="kitchen">Kitchen</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" id="cleaning" />
                <label htmlFor="cleaning">Cleaning</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" id="parking" />
                <label htmlFor="parking">Parking</label>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <button className="apply-filters-btn" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;