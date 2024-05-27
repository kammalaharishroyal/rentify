import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyModal from './PropertyModal';
import './SellerView.css';

function SellerView() {
  const [showModal, setShowModal] = useState(false);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getall')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []); // Empty dependency array to run only once on component mount

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addProperty = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  return (
    <div className="seller-view">
      <h2>Seller View</h2>
      <button className="add-button" onClick={openModal}>Add Property</button>
      {showModal && <PropertyModal onClose={closeModal} onAddProperty={addProperty} />}
      <div className="property-list">
        <h3>Added Properties</h3>
        <ul>
          {properties.map(property => (
            <li key={property.id}>
              {property.location} - {property.size}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SellerView;
