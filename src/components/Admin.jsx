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
        <div>
            <style jsx> {`
                div {
                  margin-left: 20px;
                }

                  `}
            </style>
          <InputForm onNewPropertyCreation={this.props.onNewPropertyCreation}/>
        </div>
      );
    }
  }
}

Admin.propTypes = {
  onNewPropertyCreation: PropTypes.func
};

export default Admin;
