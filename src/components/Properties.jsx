import React from 'react';
import Property from './Property';
import PropTypes from 'prop-types';

// const propertiesList = [
//   { city: 'Santa Barbara',
//     state: 'California',
//     type: 'house',
//     price: 150,
//     bedrooms: 2,
//     title: 'Amazing View! Beach front bungalow',
//     image: 'https://a0.muscache.com/im/pictures/4987161/7b8afcae_original.jpg'
//   },
//   { city: 'Austin',
//     state: 'Texas',
//     type: 'airstream',
//     price: 130,
//     bedrooms: 1,
//     title: 'Super cute retro airstream',
//     image: 'https://a0.muscache.com/im/pictures/7151074/aecc9790_original.jpg'
//   },
//   { city: 'Pioneertown',
//     state: 'California',
//     type: 'house',
//     price: 300,
//     bedrooms: 4,
//     title: 'Off-grid modern house in the desert',
//     image: 'https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg'
//   }
// ]

function Properties(props) {
  return(
    <div>
      <h1>Available Properties</h1>
      {props.properties.map((place, i) =>
        <Property city={place.city}
          state={place.state}
          type={place.type}
          price={place.price}
          bedrooms={place.bedrooms}
          title={place.title}
          image={place.image}
          key={i}/>
      )}
    </div>
  );

}

Properties.propTypes = {
  properties: PropTypes.array
};

export default Properties;
