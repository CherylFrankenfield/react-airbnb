import React from 'react';
import InputForm from './InputForm';
import PropTypes from 'prop-types';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };
  }

  render() {
    if (this.state.formVisibleOnPage) {
      return (
        <InputForm onNewPropertyCreation={this.props.onNewPropertyCreation}/>
      );
    }
  }
}

Admin.propTypes = {
  onNewPropertyCreation: PropTypes.func
};

export default Admin;
