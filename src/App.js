import React, { Component } from 'react';
import ScheduleComponent from './Components/ScheduleComponent';
import PropertyComponent from './Components/PropertyComponent';
import WeatherComponent from './Components/WeatherComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <p className="headerText">HEADER</p>
        </header>
        <PropertyComponent />
        <WeatherComponent />
        <ScheduleComponent />
        <footer className="appFooter">
          <p className="footerText">FOOTER</p>
        </footer>

      </div>
    );
  }
}

export default App;
