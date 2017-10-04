import React from 'react';
import PropTypes from 'prop-types';
import './css/Cards.css';
import PriceButton from '../Button/PriceButton'

class CourseCard extends React.Component {
  render() {
    return this._createHtml();
  }

  _createHtml() {
    return (
      <div className = "card-class">
        <p className = "title">
        {this.props.title}
        </p>
        <p className = "body">
          {this.props.institution}
        </p>
        <p className = "foot">
          {this.props.hours} Hrs  {this.props.description}
        </p>
        <hr class = "line"/>
        <div className = "button-course">
            <PriceButton name="$ 32.95"/>
        </div>
      </div>
    );
  }


}
CourseCard.propTypes = {
  title: PropTypes.string,
  institution: PropTypes.string,
  hours: PropTypes.int,
  description: PropTypes.string
};

export default CourseCard;
