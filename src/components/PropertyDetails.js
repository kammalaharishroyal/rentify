import React from 'react';
import './PropertyDetails.css';

function PropertyDetails({ property }) {
  return (
    <div className="property-details">
      <h2>Property Details</h2>
      <div className="attribute">
        <span className="label">Location:</span>
        <span className="value">property.location</span>
      </div>
      <div className="attribute">
        <span className="label">Size:</span>
        <span className="value">property.siz</span>
      </div>
      <div className="attribute">
        <span className="label">Layout:</span>
        <span className="value">property.layout</span>
      </div>
      <div className="attribute">
        <span className="label">Condition:</span>
        <span className="value">property.condition</span>
      </div>
      <div className="attribute">
        <span className="label">Outdoor Space:</span>
        <span className="value">property.outdoorSpace</span>
      </div>
      <div className="attribute">
        <span className="label">Views:</span>
        <span className="value">property.views</span>
      </div>
      <div className="attribute">
        <span className="label">Parking:</span>
        <span className="value">property.parking</span>
      </div>
      <div className="attribute">
        <span className="label">Amenities:</span>
        <span className="value">property.amenities</span>
      </div>
      <div className="attribute">
        <span className="label">School District:</span>
        <span className="value">property.schoolDistrict</span>
      </div>
      <div className="attribute">
        <span className="label">Safety and Security:</span>
        <span className="value">property.security</span>
      </div>
      <div className="attribute">
        <span className="label">Energy Efficiency:</span>
        <span className="value">property.energyEfficiency</span>
      </div>
      <div className="attribute">
        <span className="label">HOA:</span>
        <span className="value">property.hoa</span>
      </div>
      <div className="attribute">
        <span className="label">Unique Features:</span>
        <span className="value">property.uniqueFeatures</span>
      </div>
    </div>
  );
}

export default PropertyDetails;
