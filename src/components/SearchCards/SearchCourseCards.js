import React from 'react';
import PropTypes from 'prop-types';
import './css/Cards.css';
import PriceButton from '../Cards/CourseCard'

class SearchCourseCards extends React.Component {
    render() {
        return this._createHtml();
    }

    _createHtml() {
        return ( <
            div className = "search-card-class" >
            <
            p > {
                this.props.numberResults
            }
            Results <
            /p> < /
            div >
        );
    }


}
SearchCourseCards.propTypes = {
    numberResults: PropTypes.int
};

export default SearchCourseCards;
