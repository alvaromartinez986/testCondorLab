import React from 'react';
import PropTypes from 'prop-types';
import './css/Button.css';

class PriceButton extends React.Component {
  render() {
    return this._createHtml();
  }

  _createHtml(className) {
    return (
      <div
        className = "component-button"
      >
        <button>
          {this.props.name}
        </button>
      </div>
    );
  }


}
PriceButton.propTypes = {
  name: PropTypes.string
};

export default PriceButton;
