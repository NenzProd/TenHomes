import React, { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import "./PGListing.css";
import PropertyList from "./PropertyList";
import FilterSidebar from "./FilterSidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const PGListing = () => {
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState('Most Popular');

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
      <Navbar />
      <section className="pglisting-hero">
        <video className="pglisting-hero-video" autoPlay loop muted playsInline>
          <source src="/src/assets/Videos/mirror.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="pglisting-hero-overlay">
          <h1>Find Your Perfect PG</h1>
          <p>Discover the best Paying Guest accommodations tailored for you.</p>
        </div>
      </section>
      
      <section className="pglisting-content-section">
        <div className="pglisting-content-container">
          <h2 className="pglisting-properties-title">PG Accommodations</h2>
          
          <div className="pglisting-content-wrapper">
            <div className="pglisting-sidebar">
              <FilterSidebar 
                onFilterChange={handleFilterChange}
                onApplyFilters={handleApplyFilters}
              />
            </div>
            
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
