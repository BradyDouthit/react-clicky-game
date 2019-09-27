import React from 'react';

import './App.css';

import images from './components/ClickImage/images.json';

import MyHeader from './components/MyHeader/MyHeader.js';

import ClickImage from './components/ClickImage/ClickImage';

const arrayShuffle = require('array-shuffle')


class App extends React.Component {
  state = {
    images: images,
    score: 0
  };

  handleClick = (score) => {

    this.setState({images: arrayShuffle(this.state.images), score: score });
    
    if (this.state.score === images.length - 1) {
      alert('You win')
    }

  };

  render() {
    return (

      <div className="App">
        <MyHeader score={this.state.score} />
        <div className="container">
          {this.state.images.map(image =>
            <ClickImage
              alt={image.alt}
              id={image.id}
              key={image.id}
              hasBeenClicked={image.hasBeenClicked}
              imageURL={image.imageURL}
              handleClick={this.handleClick}
              score={this.state.score}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
