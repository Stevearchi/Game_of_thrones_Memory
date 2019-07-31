import React, { Component } from 'react';
import './App.css';
import characters from './characters.json';
import Header from './components/Header';
// import Footer from './components/Footer';
// import Game from `./components/Game`;
// import Jumbotron from `./components/Jumbotron`;

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    topMessage: "Click an image to begin!", // This can be three different messages
    characters 
  };

  render() {
    return (
      <Header topMessage={this.state.topMessage} score={this.state.score} topScore={this.state.topScore} />   
    );
  };
};
export default App;
