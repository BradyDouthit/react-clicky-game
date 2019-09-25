import React from 'react';

import './App.css';

import images from './components/ClickImage/images.json';

import MyHeader from './components/MyHeader/MyHeader.js';

import ClickImage from './components/ClickImage/ClickImage';

const arrayShuffle = require('array-shuffle')

const shuffledImages = arrayShuffle(images);

class App extends React.Component {
  state = {
    shuffledImages,
    hasBeenClicked: false
  };

  updateClicked = () => {
    this.setState({ hasBeenClicked: true });
  };

  render() {
    console.log(this.state)
    return (

      <div className="App">
        <MyHeader />
        <div className="container">
          {this.state.shuffledImages.map(image =>
            <ClickImage
              alt={image.alt}
              id={image.id}
              key={image.id}
              hasBeenClicked={image.hasBeenClicked}
              imageURL={image.imageURL}
              updateClicked={this.updateClicked}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
