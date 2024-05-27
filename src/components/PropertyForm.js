import React, { useState } from 'react';
import axios from 'axios';
import './PropertyForm.css';

function PropertyForm({ onClose, onAddProperty }) {
  const[propertyreturnResult,setPropertyreturnResult]=useState("")
  const [property, setProperty] = useState({
    location: '',
    size: '',
    layout: '',
    outdoorSpace: '',
    views: '',
    parking: '',
    amenities: '',
    schoolDistrict: '',
    safetyAndSecurity: '',
    energyEfficiency: '',
    hoa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/save', property)
      .then(response => {
        console.log('Property saved successfully:', response.data);
        setPropertyreturnResult(response.data)
        onAddProperty({ id: response.data.id, ...property }); // Add the new property to the list
        onClose(); // Close the modal after successful submission
      })
      .catch(error => {
        console.error('Error saving property:', error);
      });
  };

  return (
    <div className="property-form-container">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={property.location} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Size:</label>
          <input type="text" name="size" value={property.size} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Layout:</label>
          <input type="text" name="layout" value={property.layout} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Outdoor Space:</label>
          <input type="text" name="outdoorSpace" value={property.outdoorSpace} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Views:</label>
          <input type="text" name="views" value={property.views} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Parking:</label>
          <input type="text" name="parking" value={property.parking} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Amenities:</label>
          <input type="text" name="amenities" value={property.amenities} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>School District:</label>
          <input type="text" name="schoolDistrict" value={property.schoolDistrict} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Safety and Security:</label>
          <input type="text" name="safetyAndSecurity" value={property.safetyAndSecurity} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Energy Efficiency:</label>
          <input type="text" name="energyEfficiency" value={property.energyEfficiency} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>HOA:</label>
          <input type="text" name="hoa" value={property.hoa} onChange={handleChange} />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
      {propertyreturnResult&&"saved"}
    </div>
  );
}

export default PropertyForm;
