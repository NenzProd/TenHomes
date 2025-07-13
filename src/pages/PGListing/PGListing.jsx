import React, { useState } from "react";
import "./PGListing.css";
import PropertyList from "./PropertyList";
import FilterSidebar from "./FilterSidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import mirrorVideo from '../../assets/Videos/mirror.mp4';

const PGListing = () => {
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState('Most Popular');
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleApplyFilters = (filterData) => {
    setFilters(filterData);
    console.log('Filters applied:', filterData);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    console.log('Sort option changed:', e.target.value);
  };

  return (
    <div className="pglisting-page">
      

      <section className="pglisting-hero new-hero-bg">
        <video className="pglisting-hero-video-bg" autoPlay loop muted playsInline>
          <source src={mirrorVideo} type="video/mp4" />
        </video>
        <div className="pglisting-hero-overlay new-hero-overlay">
          <h1 className="new-hero-title">Find Your Dream PG<br />Here</h1>
          <div className="new-hero-underline"></div>
          <p className="new-hero-subtitle">Comfortable, affordable and convenient PG accommodations</p>
          <form className="new-hero-searchbar" onSubmit={e => e.preventDefault()}>
            <span className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-orange" />
            </span>
            <input
              type="text"
              className="new-hero-search-input"
              placeholder="Enter location, area or landmark"
            />
            <button className="new-hero-search-btn" type="submit">Search<br />Now</button>
          </form>
        </div>
      </section>
      
      <section className="pglisting-content-section">
        <div className="pglisting-content-container">
          <h2 className="pglisting-properties-title">PG Accommodations</h2>
          
          <div className="pglisting-content-wrapper">
            {/* Sidebar for desktop */}
            <div className="pglisting-sidebar desktop-only">
              <FilterSidebar 
                onFilterChange={handleFilterChange}
                onApplyFilters={handleApplyFilters}
              />
            </div>
            
            {/* Floating filter button for mobile */}
            <button 
              className="floating-filter-btn mobile-only"
              onClick={() => setShowMobileFilter(true)}
              aria-label="Show Filters"
            >
              <FontAwesomeIcon icon={faFilter} /> Filters
            </button>
            
            {/* Modal for mobile filter */}
            {showMobileFilter && (
              <div className="mobile-filter-modal">
                <div className="mobile-filter-backdrop" onClick={() => setShowMobileFilter(false)} />
                <div className="mobile-filter-content">
                  <button className="close-mobile-filter" onClick={() => setShowMobileFilter(false)}>&times;</button>
                  <FilterSidebar 
                    onFilterChange={handleFilterChange}
                    onApplyFilters={(data) => { handleApplyFilters(data); setShowMobileFilter(false); }}
                  />
                </div>
              </div>
            )}
            
            <div className="pglisting-main-content">
              <div className="pglisting-sort-container">
                <div className="sort-label">Sort by:</div>
                <div className="custom-select">
                  <select 
                    value={sortOption}
                    onChange={handleSortChange}
                    className="sort-select"
                  >
                    <option value="Most Popular">Most Popular</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Rating: High to Low">Rating: High to Low</option>
                    <option value="Newest First">Newest First</option>
                  </select>
                  <FontAwesomeIcon icon={faChevronDown} className="select-arrow" />
                </div>
              </div>
              
              <PropertyList filters={filters} sortOption={sortOption} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PGListing;
