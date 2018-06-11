import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/main.css';
import Header from './Header.js';
import Banner from './Banner.js';
import HomePageSection from './HomePageSection.js';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="main">
            <div className="inner">
              <Header/>
              <Banner/>
              <HomePageSection />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
