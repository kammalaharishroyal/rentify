import React, { useEffect, useState } from 'react';
import PropertyItem from './PropertyItem';
import axios from 'axios';
import Property from './Property';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getall')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);
  console.log("properties",properties);
  const property={
    location:"banglore",
    parking:"availble"

  }
  return (
    <div className="property-list">
      <h3>Properties</h3>
    
      <div className='propertList'>
        <Property property={property}/>
        <Property property={property}/>
        <Property property={property}/>
        <Property property={property}/>
        <Property property={property}/>
        <Property property={property}/>
        <Property property={property}/>
        <Property property={property}/>
        
      
      {
        properties.map(x=><Property property={x}/>)
      }
      </div>
    </div>
  );
}

export default PropertyList;
