import React from 'react';

import './App.css';

import images from './components/ClickImage/images.json';

import MyHeader from './components/MyHeader/MyHeader.js';

import ClickImage from './components/ClickImage/ClickImage';

const arrayShuffle = require('array-shuffle')


class App extends React.Component {
  state = {
    images,
    hasBeenClicked: false,
    score: 0
  };

  handleClick = () => {

    this.setState({ hasBeenClicked: true, images: arrayShuffle(images), score: this.state.score + 1 });
    
    // if (this.state.hasBeenClicked === true) {
    //   alert("you lose")
    // }
  };

  render() {
    console.log(this.state.hasBeenClicked)
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
