import React, { Component } from 'react';
import characters from './characters.json';
import Header from './components/Header';
import Game from './components/Game';
// import Footer from './components/Footer';
// import Game from `./components/Game`;
// import Jumbotron from `./components/Jumbotron`;

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    topMessage: "Click an image to begin!", // This can be three different messages
    characters,
    charsClicked: characters
  };

  changeState = (newState) => {
    this.setState(newState)
  }

  render() {
    return (
      <>
        <Header topMessage={this.state.topMessage} score={this.state.score} topScore={this.state.topScore} />
        <Game state={this.state} changeState={this.changeState} />
      </>
    );
  };
};
export default App;
