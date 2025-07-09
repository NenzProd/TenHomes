import React, { useState, useRef } from 'react';
import './ForOwners_new.css';

const ForOwners = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    propertyTitle: '',
    propertyLocation: '',
    propertyType: '',
    propertyAge: '',
    propertyArea: '',
    bedrooms: 1,
    bathrooms: 1,
    furnishing: [],
    needsTenhomesSupport: false,
    propertyPhotos: [],
    waterSupply: '',
    electricityMetering: '',
    amenities: [],
    nearbyLandmarks: '',
    propertyDeed: null,
    ownerAadhar: null,
    ownerPan: null,
    contactMobile: '',
    contactAltMobile: '',
    contactEmail: '',
    rentPerPerson: '',
    sharingType: '',
    utilitiesBilling: '',
    houseRules: '',
    agreement: false
  });
  
  const [errors, setErrors] = useState({});
  const fileInputRefs = {
    propertyPhotos: useRef(null),
    propertyDeed: useRef(null),
    ownerAadhar: useRef(null),
    ownerPan: useRef(null)
  };

  const propertyTypes = [
    { value: '', label: 'Select Property Type' },
    { value: 'pg', label: 'Paying Guest (PG)' },
    { value: 'hostel', label: 'Hostel' },
    { value: 'apartment', label: 'Apartment/Flat' },
    { value: 'independent-house', label: 'Independent House' },
    { value: 'villa', label: 'Villa' },
    { value: 'studio', label: 'Studio Apartment' }
  ];

  const furnishingOptions = [
    { value: 'bed', label: 'Bed', icon: 'fas fa-bed' },
    { value: 'mattress', label: 'Mattress', icon: 'fas fa-square' },
    { value: 'wardrobe', label: 'Wardrobe', icon: 'fas fa-door-open' },
    { value: 'study-table', label: 'Study Table', icon: 'fas fa-table' },
    { value: 'chair', label: 'Chair', icon: 'fas fa-chair' },
    { value: 'fan', label: 'Fan', icon: 'fas fa-fan' },
    { value: 'ac', label: 'Air Conditioner', icon: 'fas fa-snowflake' },
    { value: 'geyser', label: 'Geyser', icon: 'fas fa-fire' },
    { value: 'fridge', label: 'Refrigerator', icon: 'fas fa-cube' }
  ];

  const waterSupplyOptions = [
    { value: '', label: 'Select Water Supply' },
    { value: 'corporation', label: 'Corporation Water' },
    { value: 'borewell', label: 'Borewell' },
    { value: 'tanker', label: 'Tanker Supply' },
    { value: 'mixed', label: 'Mixed Sources' }
  ];

  const electricityMeteringOptions = [
    { value: '', label: 'Select Electricity Metering' },
    { value: 'individual', label: 'Individual Meter' },
    { value: 'shared', label: 'Shared Meter' },
    { value: 'included', label: 'Included in Rent' }
  ];

  const amenitiesOptions = [
    { value: 'wifi', label: 'Wi-Fi', icon: 'fas fa-wifi' },
    { value: 'parking', label: 'Parking', icon: 'fas fa-car' },
    { value: 'security', label: '24/7 Security', icon: 'fas fa-shield-alt' },
    { value: 'laundry', label: 'Laundry', icon: 'fas fa-tshirt' },
    { value: 'kitchen', label: 'Kitchen Access', icon: 'fas fa-utensils' },
    { value: 'gym', label: 'Gym', icon: 'fas fa-dumbbell' },
    { value: 'swimming-pool', label: 'Swimming Pool', icon: 'fas fa-swimming-pool' },
    { value: 'power-backup', label: 'Power Backup', icon: 'fas fa-bolt' },
    { value: 'lift', label: 'Elevator/Lift', icon: 'fas fa-arrow-up' },
    { value: 'cctv', label: 'CCTV Surveillance', icon: 'fas fa-video' },
    { value: 'food', label: 'Food Service', icon: 'fas fa-utensils' },
    { value: 'housekeeping', label: 'Housekeeping', icon: 'fas fa-broom' }
  ];

  const sharingTypeOptions = [
    { value: '', label: 'Select Sharing Type' },
    { value: 'single', label: 'Single Occupancy' },
    { value: '2-sharing', label: '2 Sharing' },
    { value: '3-sharing', label: '3 Sharing' },
    { value: '4-sharing', label: '4+ Sharing' },
    { value: 'mixed', label: 'Mixed Options Available' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  const handleCheckboxChange = (name, value) => {
    setFormData(prev => {
      const currentArray = prev[name] || [];
      const isChecked = currentArray.includes(value);
      
      return {
        ...prev,
        [name]: isChecked 
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value]
      };
    });
  };

  const handleCounterChange = (name, increment) => {
    setFormData(prev => ({
      ...prev,
      [name]: Math.max(1, prev[name] + (increment ? 1 : -1))
    }));
  };

  const handleFileUpload = (name, files) => {
    if (name === 'propertyPhotos') {
      const fileArray = Array.from(files);
      setFormData(prev => ({
        ...prev,
        [name]: [...(prev[name] || []), ...fileArray]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: files[0] || null
      }));
    }
  };

  const removeFile = (name, index = null) => {
    if (name === 'propertyPhotos' && index !== null) {
      setFormData(prev => ({
        ...prev,
        [name]: prev[name].filter((_, i) => i !== index)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 0: // Basic Info
        if (!formData.propertyTitle.trim()) newErrors.propertyTitle = 'Property title is required';
        if (!formData.propertyLocation.trim()) newErrors.propertyLocation = 'Location is required';
        if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
        break;
        
      case 1: // Space & Photos
        if (formData.propertyPhotos.length === 0) newErrors.propertyPhotos = 'At least one photo is required';
        break;
        
      case 2: // Utilities & Amenities
        if (!formData.waterSupply) newErrors.waterSupply = 'Water supply information is required';
        if (!formData.electricityMetering) newErrors.electricityMetering = 'Electricity metering information is required';
        break;
        
      case 3: // Verification & Pricing
        if (!formData.propertyDeed) newErrors.propertyDeed = 'Property deed is required';
        if (!formData.ownerAadhar) newErrors.ownerAadhar = 'Aadhar card is required';
        if (!formData.ownerPan) newErrors.ownerPan = 'PAN card is required';
        if (!formData.contactMobile.trim()) newErrors.contactMobile = 'Mobile number is required';
        if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Email is required';
        if (!formData.rentPerPerson) newErrors.rentPerPerson = 'Rent per person is required';
        if (!formData.sharingType) newErrors.sharingType = 'Sharing type is required';
        if (!formData.utilitiesBilling.trim()) newErrors.utilitiesBilling = 'Utilities billing information is required';
        if (!formData.agreement) newErrors.agreement = 'You must agree to the terms';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Property listing submitted successfully! Our team will review and contact you soon.');
      
      // Reset form
      setFormData({
        propertyTitle: '',
        propertyLocation: '',
        propertyType: '',
        propertyAge: '',
        propertyArea: '',
        bedrooms: 1,
        bathrooms: 1,
        furnishing: [],
        needsTenhomesSupport: false,
        propertyPhotos: [],
        waterSupply: '',
        electricityMetering: '',
        amenities: [],
        nearbyLandmarks: '',
        propertyDeed: null,
        ownerAadhar: null,
        ownerPan: null,
        contactMobile: '',
        contactAltMobile: '',
        contactEmail: '',
        rentPerPerson: '',
        sharingType: '',
        utilitiesBilling: '',
        houseRules: '',
        agreement: false
      });
      setCurrentStep(0);
      
    } catch (error) {
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFileIcon = (file) => {
    const type = file.type;
    if (type.includes('pdf')) return 'fas fa-file-pdf';
    if (type.includes('word')) return 'fas fa-file-word';
    if (type.includes('excel') || type.includes('sheet')) return 'fas fa-file-excel';
    if (type.includes('video')) return 'fas fa-file-video';
    if (type.includes('image')) return 'fas fa-file-image';
    return 'fas fa-file';
  };

  return (
    <div className="wizard-container">
      {/* Wizard Header */}
      <div className="wizard-header">
        <h1>List Your Property</h1>
        <p>Complete the steps below to get your property listed on TenHomes marketplace. Our verification team will review your information before publishing.</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-step active" data-step="1">
            <div className="progress-step-icon">
              <i className="fas fa-home"></i>
            </div>
            <div className="progress-step-label">Basic Info</div>
          </div>
          <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`} data-step="2">
            <div className="progress-step-icon">
              <i className="fas fa-images"></i>
            </div>
            <div className="progress-step-label">Space & Photos</div>
          </div>
          <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`} data-step="3">
            <div className="progress-step-icon">
              <i className="fas fa-plug"></i>
            </div>
            <div className="progress-step-label">Utilities & Amenities</div>
          </div>
          <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`} data-step="4">
            <div className="progress-step-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="progress-step-label">Verification & Pricing</div>
          </div>
          <div className="progress-line">
            <div className="progress-line-fill" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
          </div>
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic Property Info */}
        {currentStep === 0 && (
          <div className="wizard-step active">
            <div className="step-header">
              <div className="step-icon">
                <i className="fas fa-home"></i>
              </div>
              <div>
                <h2>Basic Property Information</h2>
                <span className="step-subtitle">Tell us about your property location and type</span>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-info-circle"></i> Property Details</h3>
              
              <div className="form-group">
                <label htmlFor="property-title">Property Title *</label>
                <input 
                  type="text" 
                  id="property-title" 
                  name="propertyTitle" 
                  className={`form-control ${errors.propertyTitle ? 'required-error' : ''}`}
                  placeholder="e.g., Cozy 3 Sharing PG near IT Park" 
                  value={formData.propertyTitle}
                  onChange={handleInputChange}
                  required 
                />
                <small>A catchy title helps attract tenants.</small>
                {errors.propertyTitle && <div className="error-message">{errors.propertyTitle}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="property-location">Location *</label>
                <input 
                  type="text" 
                  id="property-location" 
                  name="propertyLocation" 
                  className={`form-control ${errors.propertyLocation ? 'required-error' : ''}`}
                  placeholder="Start typing address (e.g., Anna Nagar, Chennai)" 
                  value={formData.propertyLocation}
                  onChange={handleInputChange}
                  required 
                />
                <small>Full address will be verified during our inspection process.</small>
                {errors.propertyLocation && <div className="error-message">{errors.propertyLocation}</div>}
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-building"></i> Property Specifications</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="property-type">Property Type *</label>
                  <select 
                    id="property-type" 
                    name="propertyType" 
                    className={`form-control ${errors.propertyType ? 'required-error' : ''}`}
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    required
                  >
                    {propertyTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                  {errors.propertyType && <div className="error-message">{errors.propertyType}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="property-age">Year Built</label>
                  <input 
                    type="number" 
                    id="property-age" 
                    name="propertyAge" 
                    className="form-control" 
                    placeholder="e.g., 2018" 
                    min="1900" 
                    max="2025"
                    value={formData.propertyAge}
                    onChange={handleInputChange}
                  />
                  <small>Optional, but helpful for tenants to know.</small>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="property-area">Total Area (sq ft)</label>
                <input 
                  type="number" 
                  id="property-area" 
                  name="propertyArea" 
                  className="form-control" 
                  placeholder="e.g., 1200"
                  value={formData.propertyArea}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-navigation">
              <div></div>
              <button type="button" className="btn btn-primary btn-next" onClick={nextStep}>
                <i className="fas fa-arrow-right btn-icon"></i> Continue to Space Details
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Space & Furnishings */}
        {currentStep === 1 && (
          <div className="wizard-step active">
            <div className="step-header">
              <div className="step-icon">
                <i className="fas fa-images"></i>
              </div>
              <div>
                <h2>Space Details & Photos</h2>
                <span className="step-subtitle">Tell us about rooms and upload property images</span>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-door-open"></i> Room Count</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="bedrooms">Bedrooms *</label>
                  <div className="counter">
                    <button 
                      type="button" 
                      className="counter-btn minus" 
                      onClick={() => handleCounterChange('bedrooms', false)}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      className="counter-value" 
                      value={formData.bedrooms} 
                      min="1" 
                      readOnly 
                    />
                    <button 
                      type="button" 
                      className="counter-btn plus" 
                      onClick={() => handleCounterChange('bedrooms', true)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="bathrooms">Bathrooms *</label>
                  <div className="counter">
                    <button 
                      type="button" 
                      className="counter-btn minus" 
                      onClick={() => handleCounterChange('bathrooms', false)}
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      className="counter-value" 
                      value={formData.bathrooms} 
                      min="1" 
                      readOnly 
                    />
                    <button 
                      type="button" 
                      className="counter-btn plus" 
                      onClick={() => handleCounterChange('bathrooms', true)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-couch"></i> Furnishing Details</h3>
              
              <div className="form-group">
                <label>Furnishing Provided by Owner</label>
                <div className="checkbox-grid">
                  {furnishingOptions.slice(0, 9).map(option => (
                    <div key={option.value} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        id={`furnishing-${option.value}`}
                        value={option.value}
                        checked={formData.furnishing.includes(option.value)}
                        onChange={() => handleCheckboxChange('furnishing', option.value)}
                      />
                      <label htmlFor={`furnishing-${option.value}`}>
                        <i className={option.icon}></i> {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="checkbox-item full-width" style={{ marginTop: '15px' }}>
                  <input 
                    type="checkbox" 
                    id="needs-tenhomes-support"
                    name="needsTenhomesSupport"
                    checked={formData.needsTenhomesSupport}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="needs-tenhomes-support">
                    <i className="fas fa-hands-helping"></i> 
                    Need TenHomes support? We can help furnish your property for a small fee and make it tenant-ready.
                  </label>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-camera"></i> Property Photos</h3>
              
              <div className="form-group">
                <label htmlFor="property-photos">Photos & Videos *</label>
                <div 
                  className={`file-upload ${errors.propertyPhotos ? 'required-error' : ''}`} 
                  onClick={() => fileInputRefs.propertyPhotos.current.click()}
                >
                  <div className="file-icon">
                    <i className="fas fa-camera"></i>
                  </div>
                  <div className="file-info">
                    <strong>Upload Photos & Videos</strong><br />
                    Drag and drop or click to browse
                  </div>
                  <div className="file-button">Choose Files</div>
                  <input 
                    ref={fileInputRefs.propertyPhotos}
                    type="file" 
                    id="property-photos"
                    multiple 
                    accept="image/*,video/*"
                    onChange={(e) => handleFileUpload('propertyPhotos', e.target.files)}
                    style={{ display: 'none' }}
                  />
                </div>
                {errors.propertyPhotos && <div className="error-message">{errors.propertyPhotos}</div>}
                
                {formData.propertyPhotos.length > 0 && (
                  <div className="preview-area">
                    {formData.propertyPhotos.map((file, index) => (
                      <div key={index} className="preview-item">
                        {file.type.startsWith('image/') ? (
                          <img src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
                        ) : (
                          <div className="file-preview">
                            <i className={getFileIcon(file)}></i>
                            <span>{file.name}</span>
                          </div>
                        )}
                        <div className="preview-remove" onClick={() => removeFile('propertyPhotos', index)}>
                          <i className="fas fa-times"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="form-navigation">
              <button type="button" className="btn btn-secondary btn-prev" onClick={prevStep}>
                <i className="fas fa-arrow-left btn-icon"></i> Previous
              </button>
              <button type="button" className="btn btn-primary btn-next" onClick={nextStep}>
                <i className="fas fa-arrow-right btn-icon"></i> Continue to Utilities
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Utilities & Amenities */}
        {currentStep === 2 && (
          <div className="wizard-step active">
            <div className="step-header">
              <div className="step-icon">
                <i className="fas fa-plug"></i>
              </div>
              <div>
                <h2>Utilities & Amenities</h2>
                <span className="step-subtitle">Tell us about the utilities and amenities available</span>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-wrench"></i> Essential Utilities</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="water-supply">Water Supply *</label>
                  <select 
                    id="water-supply" 
                    name="waterSupply" 
                    className={`form-control ${errors.waterSupply ? 'required-error' : ''}`}
                    value={formData.waterSupply}
                    onChange={handleInputChange}
                    required
                  >
                    {waterSupplyOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {errors.waterSupply && <div className="error-message">{errors.waterSupply}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="electricity-metering">Electricity Metering *</label>
                  <select 
                    id="electricity-metering" 
                    name="electricityMetering" 
                    className={`form-control ${errors.electricityMetering ? 'required-error' : ''}`}
                    value={formData.electricityMetering}
                    onChange={handleInputChange}
                    required
                  >
                    {electricityMeteringOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {errors.electricityMetering && <div className="error-message">{errors.electricityMetering}</div>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-concierge-bell"></i> Amenities</h3>
              
              <div className="form-group">
                <label>Common Amenities Available</label>
                <div className="checkbox-grid">
                  {amenitiesOptions.map(option => (
                    <div key={option.value} className="checkbox-item">
                      <input 
                        type="checkbox" 
                        id={`amenity-${option.value}`}
                        value={option.value}
                        checked={formData.amenities.includes(option.value)}
                        onChange={() => handleCheckboxChange('amenities', option.value)}
                      />
                      <label htmlFor={`amenity-${option.value}`}>
                        <i className={option.icon}></i> {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-map-marker-alt"></i> Location Highlights</h3>
              
              <div className="form-group">
                <label htmlFor="nearby-landmarks">Nearby Landmarks</label>
                <input 
                  type="text" 
                  id="nearby-landmarks" 
                  name="nearbyLandmarks" 
                  className="form-control" 
                  placeholder="e.g., Near ABC Tech Park, 5 mins from Metro Station"
                  value={formData.nearbyLandmarks}
                  onChange={handleInputChange}
                />
                <small>Helps tenants understand the location better.</small>
              </div>
            </div>

            <div className="form-navigation">
              <button type="button" className="btn btn-secondary btn-prev" onClick={prevStep}>
                <i className="fas fa-arrow-left btn-icon"></i> Previous
              </button>
              <button type="button" className="btn btn-primary btn-next" onClick={nextStep}>
                <i className="fas fa-arrow-right btn-icon"></i> Continue to Verification
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Verification & Contact */}
        {currentStep === 3 && (
          <div className="wizard-step active">
            <div className="step-header">
              <div className="step-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div>
                <h2>Verification & Pricing</h2>
                <span className="step-subtitle">Final details to complete your listing</span>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-file-contract"></i> Ownership Documents</h3>
              
              <div className="form-group">
                <label htmlFor="property-deed">Property Ownership Document *</label>
                <div 
                  className={`file-upload ${errors.propertyDeed ? 'required-error' : ''}`}
                  onClick={() => fileInputRefs.propertyDeed.current.click()}
                >
                  <div className="file-icon">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <div className="file-info">
                    <strong>Upload Property Deed</strong><br />
                    PDF, JPG or PNG format
                  </div>
                  <div className="file-button">Choose File</div>
                  <input 
                    ref={fileInputRefs.propertyDeed}
                    type="file" 
                    id="property-deed"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileUpload('propertyDeed', e.target.files)}
                    style={{ display: 'none' }}
                  />
                </div>
                {formData.propertyDeed && (
                  <div className="file-name">{formData.propertyDeed.name}</div>
                )}
                {errors.propertyDeed && <div className="error-message">{errors.propertyDeed}</div>}
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="owner-aadhar">Owner Aadhar Card *</label>
                  <div 
                    className={`file-upload ${errors.ownerAadhar ? 'required-error' : ''}`}
                    onClick={() => fileInputRefs.ownerAadhar.current.click()}
                  >
                    <div className="file-icon">
                      <i className="fas fa-id-card"></i>
                    </div>
                    <div className="file-info">
                      <strong>Upload Aadhar Card</strong><br />
                      PDF, JPG or PNG format
                    </div>
                    <div className="file-button">Choose File</div>
                    <input 
                      ref={fileInputRefs.ownerAadhar}
                      type="file" 
                      id="owner-aadhar"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('ownerAadhar', e.target.files)}
                      style={{ display: 'none' }}
                    />
                  </div>
                  {formData.ownerAadhar && (
                    <div className="file-name">{formData.ownerAadhar.name}</div>
                  )}
                  {errors.ownerAadhar && <div className="error-message">{errors.ownerAadhar}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="owner-pan">Owner PAN Card *</label>
                  <div 
                    className={`file-upload ${errors.ownerPan ? 'required-error' : ''}`}
                    onClick={() => fileInputRefs.ownerPan.current.click()}
                  >
                    <div className="file-icon">
                      <i className="fas fa-id-card-alt"></i>
                    </div>
                    <div className="file-info">
                      <strong>Upload PAN Card</strong><br />
                      PDF, JPG or PNG format
                    </div>
                    <div className="file-button">Choose File</div>
                    <input 
                      ref={fileInputRefs.ownerPan}
                      type="file" 
                      id="owner-pan"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload('ownerPan', e.target.files)}
                      style={{ display: 'none' }}
                    />
                  </div>
                  {formData.ownerPan && (
                    <div className="file-name">{formData.ownerPan.name}</div>
                  )}
                  {errors.ownerPan && <div className="error-message">{errors.ownerPan}</div>}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-phone-alt"></i> Contact Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-mobile">Contact Mobile *</label>
                  <input 
                    type="tel" 
                    id="contact-mobile" 
                    name="contactMobile" 
                    className={`form-control ${errors.contactMobile ? 'required-error' : ''}`}
                    placeholder="Your primary mobile number" 
                    value={formData.contactMobile}
                    onChange={handleInputChange}
                    required 
                  />
                  {errors.contactMobile && <div className="error-message">{errors.contactMobile}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-alt-mobile">Alternate Mobile</label>
                  <input 
                    type="tel" 
                    id="contact-alt-mobile" 
                    name="contactAltMobile" 
                    className="form-control" 
                    placeholder="Optional alternate number"
                    value={formData.contactAltMobile}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-email">Contact Email *</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="contactEmail" 
                  className={`form-control ${errors.contactEmail ? 'required-error' : ''}`}
                  placeholder="Your email for notifications" 
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  required 
                />
                {errors.contactEmail && <div className="error-message">{errors.contactEmail}</div>}
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title"><i className="fas fa-tags"></i> Pricing Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rent-per-person">Rent per Person *</label>
                  <input 
                    type="number" 
                    id="rent-per-person" 
                    name="rentPerPerson" 
                    className={`form-control ${errors.rentPerPerson ? 'required-error' : ''}`}
                    placeholder="Monthly rent in rupees" 
                    value={formData.rentPerPerson}
                    onChange={handleInputChange}
                    required 
                  />
                  {errors.rentPerPerson && <div className="error-message">{errors.rentPerPerson}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="sharing-type">Sharing Type *</label>
                  <select 
                    id="sharing-type" 
                    name="sharingType" 
                    className={`form-control ${errors.sharingType ? 'required-error' : ''}`}
                    value={formData.sharingType}
                    onChange={handleInputChange}
                    required
                  >
                    {sharingTypeOptions.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  {errors.sharingType && <div className="error-message">{errors.sharingType}</div>}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="utilities-billing">Utilities Billing *</label>
                <input 
                  type="text" 
                  id="utilities-billing" 
                  name="utilitiesBilling" 
                  className={`form-control ${errors.utilitiesBilling ? 'required-error' : ''}`}
                  placeholder="e.g., Included in rent / Sub-metered, billed monthly / Fixed ₹500/month" 
                  value={formData.utilitiesBilling}
                  onChange={handleInputChange}
                  required 
                />
                <small>Explain how electricity, water, Wi-Fi etc., are billed.</small>
                {errors.utilitiesBilling && <div className="error-message">{errors.utilitiesBilling}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="house-rules">House Rules (Optional)</label>
                <textarea 
                  id="house-rules" 
                  name="houseRules" 
                  className="form-control" 
                  rows="4" 
                  placeholder="e.g., No smoking inside rooms, No loud music after 11 PM, Visitors allowed until 9 PM..."
                  value={formData.houseRules}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <div className="form-group agreement">
                <div className="checkbox-item">
                  <input 
                    type="checkbox" 
                    id="agreement"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="agreement">
                    <i className="fas fa-check-circle"></i> 
                    I certify that the information provided is accurate and complete. I am the legal owner or authorized representative for this property.
                  </label>
                </div>
                {errors.agreement && <div className="error-message">{errors.agreement}</div>}
              </div>
            </div>

            <div className="form-navigation">
              <button type="button" className="btn btn-secondary btn-prev" onClick={prevStep}>
                <i className="fas fa-arrow-left btn-icon"></i> Previous
              </button>
              <button type="submit" className="btn btn-success btn-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin btn-icon"></i> Submitting...
                  </>
                ) : (
                  <>
                    <i className="fas fa-check-circle btn-icon"></i> Submit Listing
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ForOwners;
