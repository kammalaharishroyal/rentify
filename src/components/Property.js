import React from 'react';
import './Property.css';
// import { Link } from 'react-router-dom';
import img from '../Images/p1.jpeg';
import { Link } from 'react-router-dom';
function Property({ property }) {
  
  return (
    <div className="property">
      <img src={img} alt="Property" className="property-image" />
      <div className="property-details">
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Parking:</strong> {property.parking}</p>
        
      </div>
      
      <Link to={`/property/${1}`} className="interested-button">I'm Interested</Link>
    </div>
  );
}

export default Property;
