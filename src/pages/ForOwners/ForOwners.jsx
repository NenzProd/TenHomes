import React, { useState } from 'react';
import './ForOwners.css';

const ForOwners = () => {
  // State for tracking the current step
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form data state
  const [formData, setFormData] = useState({
    // Step 1: Basic Property Info
    propertyTitle: '',
    location: '',
    propertyType: '',
    propertyAge: '',
    area: '',
    
    // Step 2: Space & Furnishings
    bedrooms: 1,
    bathrooms: 1,
    furnishings: [],
    needSupport: false,
    photos: [],
    video: null,
    
    // Step 3: Utilities & Amenities
    waterSupply: '',
    electricityMetering: '',
    amenities: [],
    nearbyLandmarks: [],
    
    // Step 4: Verification & Contact
    propertyDeed: null,
    ownerIdAadhar: null,
    ownerIdPan: null,
    mobile: '',
    alternatePhone: '',
    email: '',
    rentPerPerson: '',
    sharingType: '',
    utilitiesBilling: '',
    houseRules: ''
  });
  
  // Generic input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Checkbox handler
  const handleCheckboxChange = (e, group) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentArray = [...prev[group]];
      if (checked) {
        return { ...prev, [group]: [...currentArray, value] };
      } else {
        return { ...prev, [group]: currentArray.filter(item => item !== value) };
      }
    });
  };
  
  // Counter handlers
  const updateCounter = (field, operation) => {
    setFormData(prev => ({
      ...prev,
      [field]: operation === 'increment' ? prev[field] + 1 : Math.max(1, prev[field] - 1)
    }));
  };
  
  // File upload handler
  const handleFileUpload = (e, field) => {
    const files = Array.from(e.target.files);
    if (field === 'photos') {
      // Limit to 10 photos
      const newPhotos = [...formData.photos, ...files].slice(0, 10);
      setFormData(prev => ({ ...prev, photos: newPhotos }));
    } else if (field === 'video' && files.length > 0) {
      // Only one video
      setFormData(prev => ({ ...prev, video: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [field]: files[0] }));
    }
  };
  
  // Navigation functions
  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };
  
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  
  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // API call would go here
  };

  // Progress indicator component
  const ProgressBar = () => {
    return (
      <div className="progress-bar">
        <div className="steps">
          {[1, 2, 3, 4].map(step => (
            <div 
              key={step} 
              className={`step ${currentStep >= step ? 'active' : ''}`}
              onClick={() => step < currentStep ? setCurrentStep(step) : null}
            >
              {currentStep > step ? '●' : currentStep === step ? '●' : '○'}
            </div>
          ))}
        </div>
        <div className="step-title">
          {currentStep === 1 && 'Basic Property Info'}
          {currentStep === 2 && 'Space & Furnishings'}
          {currentStep === 3 && 'Utilities & Amenities'}
          {currentStep === 4 && 'Verification & Contact'}
          {currentStep === 5 && 'Review & Submit'}
        </div>
      </div>
    );
  };

  // Basic Property Info (Step 1)
  const renderBasicInfo = () => (
    <div className="form-step">
      <h2>Basic Property Information</h2>
      
      <div className="form-group">
        <label htmlFor="propertyTitle">Property Title</label>
        <input
          type="text"
          id="propertyTitle"
          name="propertyTitle"
          placeholder="e.g. 2BHK in Anna Nagar"
          value={formData.propertyTitle}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Search for a location"
          value={formData.location}
          onChange={handleInputChange}
          required
          // In a real implementation, integrate with Google Places API
          className="location-picker"
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="propertyType">Property Type</label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House/Villa</option>
            <option value="pg">PG/Co-living</option>
            <option value="hostel">Hostel</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="propertyAge">Property Age</label>
          <select
            id="propertyAge"
            name="propertyAge"
            value={formData.propertyAge}
            onChange={handleInputChange}
            required
          >
            <option value="">Built in</option>
            {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="area">Area (sq ft)</label>
        <input
          type="number"
          id="area"
          name="area"
          placeholder="Total carpet area"
          value={formData.area}
          onChange={handleInputChange}
          required
          min="100"
        />
      </div>
    </div>
  );

  // Space & Furnishings (Step 2)
  const renderSpaceAndFurnishings = () => (
    <div className="form-step">
      <h2>Space & Furnishings</h2>
      
      <div className="counter-section">
        <div className="counter-group">
          <label>Bedrooms</label>
          <div className="counter-controls">
            <button type="button" onClick={() => updateCounter('bedrooms', 'decrement')}>-</button>
            <span>{formData.bedrooms}</span>
            <button type="button" onClick={() => updateCounter('bedrooms', 'increment')}>+</button>
          </div>
        </div>
        
        <div className="counter-group">
          <label>Bathrooms</label>
          <div className="counter-controls">
            <button type="button" onClick={() => updateCounter('bathrooms', 'decrement')}>-</button>
            <span>{formData.bathrooms}</span>
            <button type="button" onClick={() => updateCounter('bathrooms', 'increment')}>+</button>
          </div>
        </div>
      </div>
      
      <div className="furnishing-section">
        <h3>Furnishing Options</h3>
        <div className="checkbox-group">
          {['Bed', 'Wardrobe', 'Fan', 'AC', 'TV', 'Fridge', 'Washing Machine', 'Sofa', 'Dining Table'].map(item => (
            <label key={item} className="checkbox-label">
              <input
                type="checkbox"
                value={item}
                checked={formData.furnishings.includes(item)}
                onChange={(e) => handleCheckboxChange(e, 'furnishings')}
              />
              <span className="option-text">{item}</span>
            </label>
          ))}
        </div>
        
        <div className="support-option">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="needSupport"
              checked={formData.needSupport}
              onChange={(e) => setFormData(prev => ({ ...prev, needSupport: e.target.checked }))}
            />
            <span className="option-text">Need TenHomes support? (we'll furnish for a fee)</span>
          </label>
        </div>
      </div>
      
      <div className="media-upload-section">
        <h3>Photos & Videos</h3>
        <div className="file-upload-area">
          <div className="upload-box">
            <label htmlFor="photos">
              <div className="upload-icon">+</div>
              <p>Upload Photos (max 10)</p>
              <span className="uploaded-count">{formData.photos.length}/10</span>
            </label>
            <input
              type="file"
              id="photos"
              accept="image/*"
              multiple
              onChange={(e) => handleFileUpload(e, 'photos')}
              style={{ display: 'none' }}
            />
          </div>
          
          <div className="upload-box">
            <label htmlFor="video">
              <div className="upload-icon">+</div>
              <p>Upload Video</p>
              <span className="uploaded-count">{formData.video ? '1/1' : '0/1'}</span>
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={(e) => handleFileUpload(e, 'video')}
              style={{ display: 'none' }}
            />
          </div>
        </div>
        
        {formData.photos.length > 0 && (
          <div className="thumbnail-preview">
            <h4>Uploaded Photos</h4>
            <div className="thumbnails">
              {formData.photos.map((photo, index) => (
                <div key={index} className="thumbnail">
                  <img src={URL.createObjectURL(photo)} alt={`Thumbnail ${index}`} />
                  <button type="button" onClick={() => {
                    setFormData(prev => ({
                      ...prev,
                      photos: prev.photos.filter((_, i) => i !== index)
                    }))
                  }}>✕</button>
                </div>
              ))}
            </div>
            <button type="button" className="reorder-btn">Reorder</button>
          </div>
        )}
      </div>
    </div>
  );

  // Utilities & Amenities (Step 3)
  const renderUtilitiesAndAmenities = () => (
    <div className="form-step">
      <h2>Utilities & Amenities</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="waterSupply">Water Supply</label>
          <select
            id="waterSupply"
            name="waterSupply"
            value={formData.waterSupply}
            onChange={handleInputChange}
            required
          >
            <option value="">Select option</option>
            <option value="municipal">Municipal</option>
            <option value="borewell">Borewell</option>
            <option value="both">Municipal + Borewell</option>
            <option value="tank">Water Tank</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="electricityMetering">Electricity Metering</label>
          <select
            id="electricityMetering"
            name="electricityMetering"
            value={formData.electricityMetering}
            onChange={handleInputChange}
            required
          >
            <option value="">Select option</option>
            <option value="single">Single Meter</option>
            <option value="sub">Sub-metered</option>
          </select>
        </div>
      </div>
      
      <div className="amenities-section">
        <h3>Amenities</h3>
        <div className="checkbox-group">
          {['AC', 'Wi-Fi', 'Kitchen Access', 'Washing Machine', 'Fridge', 'Sofa', 'Dining Table', 'TV', 'Gym', 'Swimming Pool', 'Security'].map(item => (
            <label key={item} className="checkbox-label">
              <input
                type="checkbox"
                value={item}
                checked={formData.amenities.includes(item)}
                onChange={(e) => handleCheckboxChange(e, 'amenities')}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
      
      <div className="landmarks-section">
        <h3>Nearby Landmarks</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Search for nearby landmarks (Metro, Schools, Offices)"
            className="landmark-search"
            // In a real implementation, integrate with Places API
          />
          <div className="selected-landmarks">
            {formData.nearbyLandmarks.map((landmark, index) => (
              <div key={index} className="landmark-tag">
                {landmark}
                <button type="button" onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    nearbyLandmarks: prev.nearbyLandmarks.filter((_, i) => i !== index)
                  }))
                }}>✕</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Verification & Contact (Step 4)
  const renderVerificationAndContact = () => (
    <div className="form-step">
      <h2>Verification & Contact</h2>
      
      <div className="document-section">
        <h3>Document Upload</h3>
        <div className="upload-group">
          <label htmlFor="propertyDeed">
            Property Deed (PDF/JPG)
            <span className="required">*</span>
          </label>
          <div className="file-upload">
            <input
              type="file"
              id="propertyDeed"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileUpload(e, 'propertyDeed')}
            />
            {formData.propertyDeed && <span className="file-name">{formData.propertyDeed.name}</span>}
          </div>
        </div>
        
        <h4>Owner ID Verification</h4>
        <div className="upload-group">
          <label htmlFor="ownerIdAadhar">Aadhar Card</label>
          <div className="file-upload">
            <input
              type="file"
              id="ownerIdAadhar"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileUpload(e, 'ownerIdAadhar')}
            />
            {formData.ownerIdAadhar && (
              <div className="file-preview">
                <span className="file-name">{formData.ownerIdAadhar.name}</span>
                <label className="blur-option">
                  <input type="checkbox" /> Blur for privacy
                </label>
              </div>
            )}
          </div>
        </div>
        
        <div className="upload-group">
          <label htmlFor="ownerIdPan">PAN Card</label>
          <div className="file-upload">
            <input
              type="file"
              id="ownerIdPan"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileUpload(e, 'ownerIdPan')}
            />
            {formData.ownerIdPan && (
              <div className="file-preview">
                <span className="file-name">{formData.ownerIdPan.name}</span>
                <label className="blur-option">
                  <input type="checkbox" /> Blur for privacy
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="contact-section">
        <h3>Contact Details</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="alternatePhone">Alternate Number (Optional)</label>
            <input
              type="tel"
              id="alternatePhone"
              name="alternatePhone"
              value={formData.alternatePhone}
              onChange={handleInputChange}
              pattern="[0-9]{10}"
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      
      <div className="pricing-section">
        <h3>House Rules & Pricing</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="rentPerPerson">Rent per Person</label>
            <div className="input-with-prefix">
              <span>₹</span>
              <input
                type="number"
                id="rentPerPerson"
                name="rentPerPerson"
                value={formData.rentPerPerson}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="sharingType">Sharing Type</label>
            <select
              id="sharingType"
              name="sharingType"
              value={formData.sharingType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select option</option>
              <option value="single">Single</option>
              <option value="double">Double sharing</option>
              <option value="triple">Triple sharing</option>
              <option value="family">Family</option>
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="utilitiesBilling">Utilities Billing</label>
          <select
            id="utilitiesBilling"
            name="utilitiesBilling"
            value={formData.utilitiesBilling}
            onChange={handleInputChange}
            required
          >
            <option value="">Select option</option>
            <option value="included">Included in rent</option>
            <option value="sub-metered">Sub-metered, billed monthly</option>
            <option value="fixed">Fixed additional charge</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="houseRules">House Rules (Optional)</label>
          <textarea
            id="houseRules"
            name="houseRules"
            placeholder="e.g., No smoking, pets allowed, etc."
            value={formData.houseRules}
            onChange={handleInputChange}
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );

  // Review & Submit (Step 5)
  const renderReviewAndSubmit = () => (
    <div className="form-step review-step">
      <h2>Review & Submit</h2>
      
      <div className="property-preview-card">
        {formData.photos.length > 0 && (
          <div className="preview-image">
            <img src={URL.createObjectURL(formData.photos[0])} alt="Property" />
          </div>
        )}
        
        <div className="preview-details">
          <h3>{formData.propertyTitle}</h3>
          <p><strong>Location:</strong> {formData.location}</p>
          <p><strong>Type:</strong> {formData.propertyType}, <strong>Built:</strong> {formData.propertyAge}</p>
          <p><strong>Area:</strong> {formData.area} sq ft</p>
          <p><strong>Configuration:</strong> {formData.bedrooms} BHK, {formData.bathrooms} bathrooms</p>
          <p><strong>Rent:</strong> ₹{formData.rentPerPerson} per person ({formData.sharingType} sharing)</p>
          
          <div className="edit-sections">
            <button type="button" onClick={() => setCurrentStep(1)}>Edit Basic Info</button>
            <button type="button" onClick={() => setCurrentStep(2)}>Edit Space & Furnishings</button>
            <button type="button" onClick={() => setCurrentStep(3)}>Edit Utilities & Amenities</button>
            <button type="button" onClick={() => setCurrentStep(4)}>Edit Verification & Contact</button>
          </div>
        </div>
      </div>
      
      <div className="agreement">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            required
          />
          I certify that the information provided is accurate and complete. I am the legal owner or authorized 
          representative for this property.
        </label>
      </div>
      
      <button type="submit" className="submit-button">Send for Verification</button>
    </div>
  );

  return (
    <div className="listing-wizard">
      <ProgressBar />
      
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && renderBasicInfo()}
        {currentStep === 2 && renderSpaceAndFurnishings()}
        {currentStep === 3 && renderUtilitiesAndAmenities()}
        {currentStep === 4 && renderVerificationAndContact()}
        {currentStep === 5 && renderReviewAndSubmit()}
        
        <div className="form-navigation">
          {currentStep > 1 && currentStep < 5 && (
            <button type="button" className="back-button" onClick={prevStep}>
              Back
            </button>
          )}
          
          {currentStep < 5 && (
            <button type="button" className="next-button" onClick={nextStep}>
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForOwners;
