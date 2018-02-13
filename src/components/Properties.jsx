import React from 'react';
import Property from './Property';
import PropTypes from 'prop-types';

function Properties(props) {

  return(
    <div>
      <h1>Available Properties</h1>
      {props.properties.map((place) =>
        <Property city={place.city}
          state={place.state}
          type={place.type}
          price={place.price}
          bedrooms={place.bedrooms}
          title={place.title}
          image={place.image}
          key={place.id}/>
      )}
    </div>
  );

}

Properties.propTypes = {
  properties: PropTypes.array
};

export default Properties;
