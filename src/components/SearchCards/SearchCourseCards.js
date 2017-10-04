import React from 'react';
import PropTypes from 'prop-types';
import './css/SearchCards.css';
import CourseCard from '../Cards/CourseCard'

const COLUMNS = 3;

class SearchCourseCards extends React.Component {


    render() {
        return this._createHtml();
    }

    _createHtml() {
      let cards = this.createGroupCards();
        return (
          <div class = "search-card-class" >
            <p class ="result">
              { this.props.numberResults }
            </p>
            <p class ="comp">
                Results
            </p>
            <div>
              {cards}
            </div>
          </div>
        );
    }

    createGroupCards(){
      let groupCards = []
      for (let i = 0; i < 3; i++) {
        let rowCards = [];
        for (let j = 0; j < COLUMNS; j++) {
          rowCards.push(<CourseCard title="Hola" institution = "hola" hours ="9" description ="hola"></CourseCard>);
        }
        groupCards.push(<div class ="row-cards">{rowCards}</div>);
      }

      return groupCards;


    }


}
SearchCourseCards.propTypes = {
    numberResults: PropTypes.int
};

export default SearchCourseCards;
