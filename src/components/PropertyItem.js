import React from 'react';

function PropertyItem({ property }) {
  return (
    <div className="property-item">
      <h4>{property.place}</h4>
      <p>Area: {property.area}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Hospitals Nearby: {property.hospitals}</p>
      <p>Colleges Nearby: {property.colleges}</p>
      {/* Add more property attributes as needed */}
    </div>
  );
}

export default PropertyItem;
