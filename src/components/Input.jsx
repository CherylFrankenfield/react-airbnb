import React from 'react';
import Button from 'react-bootstrap/lib/Button';

function Input(){
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
      <form>
        <label>City:</label>
        <input type="text" name="city" />
        <label>State:</label>
        <input type="text" name="state" />
        <label>Property type:</label>
        <input type="text" name="type" />
        <label>Price per night:</label>
        <input type="number" name="price" />
        <label>Number of bedrooms:</label>
        <input type="number" name="bedrooms" />
        <label>Property title:</label>
        <input type="text" name="title" />
        <label>URL of your property image</label>
        <input type="text" name="image" />


        <Button bsStyle="success">Add this property</Button>

      </form>

    </div>

  );
}

export default Input;
