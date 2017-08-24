import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsBar from './NewsBar';
import Quote from './Quote';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Bloomberg</h2>
        </div>
        <p className="App-intro">
          Latest News from Bloomberg and Reuters
        </p>
        <NewsBar></NewsBar>
        <p className="App-intro">
          Latest price S&P500
        </p>
        <Quote></Quote>
      </div>
    );
  }
}

export default App;
