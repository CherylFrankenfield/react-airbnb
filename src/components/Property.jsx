import React from 'react';
import PropTypes from 'prop-types';

class Property extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      detailsVisibleOnPage: false
    }
  this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => ({
     detailsVisibleOnPage: !prevState.detailsVisibleOnPage
   }));

  }

  render() {
    let currentlyVisibleOnPage = null;
    if (this.state.detailsVisibleOnPage) {
      currentlyVisibleOnPage =
      <ul>
        <li>{this.props.bedrooms}</li>
        <li>{this.props.type}</li>
      </ul>
    } else {
      currentlyVisibleOnPage = null;
    }
    return(
      <div className="property-listing">
        <style jsx> {`
            img {
              width: 300px;
              border: 1px solid darkgray;
            }
            .property-listing {
              padding: 5px;
              border: solid black 2px;
            }
              `}
        </style>
        <div>
          <img src={this.props.image}/>
        </div>
        <h3>{this.props.title}</h3>
        <h4>{this.props.city}, {this.props.state}</h4>
        <h4>From {this.props.price} per night</h4>
        <div>
          {currentlyVisibleOnPage}
        </div>
        <p onClick={this.handleClick}>Click here to see more details.</p>
      </div>
    );
  }
}



Property.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string,
  type: PropTypes.string,
  price: PropTypes.number,
  bedrooms: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string

};

export default Property;
