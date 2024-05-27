import React from 'react';
import PropertyForm from './PropertyForm';
import './PropertyModal.css';

function PropertyModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Add Property</h2>
        <PropertyForm/>
      </div>
    </div>
  );
}

export default PropertyModal;
