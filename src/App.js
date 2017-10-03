import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseCard from './components/Cards/CourseCard.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CourseCard title="SEXUAL VIOLENCE IN LATER LIFE" institution = "UNIVALLE" hours = "9" description="Computer" />
      </div>
    );
  }
}

export default App;
