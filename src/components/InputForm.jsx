import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function InputForm(props){
  let _city = null;
  let _state = null;
  let _type = null;
  let _price = null;
  let _bedrooms = null;
  let _title = null;
  let _image = null;

  function handleNewPropertySubmission(event) {
    event.preventDefault();
    // console.log(_city.value);
    // console.log(_state.value);
    props.onNewPropertyCreation({city: _city.value, state: _state.value, type: _type.value, price: _price.value, bedrooms: _bedrooms.value, title: _title.value, image: _image.value, id: v4()});
    _city.value = '';
    _state.value = '';
    _type.value = '';
    _price.value = '';
    _bedrooms.value = '';
    _title.value = '';
    _image.value = '';
  }

  return (
    <div>
      <style jsx>{`

      input {
        width: 100%;
      }
      label {
        margin-top: 15px;
      }
      `}</style>

      <form onSubmit={handleNewPropertySubmission}>
        <label>City:</label>
        <input
          type="text"
          id="city"
          ref={(input) => {_city = input;}}/>

        <label>State:</label>
        <input
          type="text"
          id="state"
          ref={(input) => {_state = input;}}/>

        <label>Property type:</label>
        <input
          type="text"
          id="type"
          ref={(input) => {_type = input;}} />

        <label>Price per night:</label>
        <input
          type="number"
          id="price"
          ref={(input) => {_price = input;}}/>

        <label>Number of bedrooms:</label>
        <input
          type="number"
          id="bedrooms"
          ref={(input) => {_bedrooms = input;}}/>

        <label>Property title:</label>
        <input
          type="text"
          id="title"
          ref={(input) => {_title = input;}}/>

        <label>URL of your property image</label>
        <input
          type="text"
          name="image"
          ref={(input) => {_image = input;}}/>

        <Button bsStyle="success" type="submit">Add this property</Button>
      </form>

    </div>

  );
}

InputForm.propTypes = {
  onNewPropertyCreation: PropTypes.func
};

export default InputForm;
