import React from 'react';

import './App.css';

import images from './components/ClickImage/images.json';

import MyHeader from './components/MyHeader/MyHeader.js';

import ClickImage from './components/ClickImage/ClickImage';

const arrayShuffle = require('array-shuffle')


class App extends React.Component {
  state = {
    images: images,
    hasBeenClicked: false,
    score: 0
  };

  handleClick = () => {

    this.setState({images: arrayShuffle(this.state.images), score: this.state.score + 1 });
    //console.log(images)
    // arrayShuffle(images)
    
    if (this.state.score === 10) {
      alert("You lose")
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
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
