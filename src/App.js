import React from 'react';

import './App.css';

import images from './components/ClickImage/images.json';

import MyHeader from './components/MyHeader/MyHeader.js';

import ClickImage from './components/ClickImage/ClickImage';

const arrayShuffle = require('array-shuffle')


class App extends React.Component {

  state = {
    images: images,
    score: 0,
    hasBeenClicked: []
  };

  handleClick = (id) => {
    console.log(id)
    this.setState({ images: arrayShuffle(this.state.images) });

    if (this.state.score === images.length - 1) {
      alert('You win')
    }
    else if (!this.state.hasBeenClicked.includes(id)) {

      let clickArray = this.state.hasBeenClicked;
      clickArray.push(id);

      this.setState({ hasBeenClicked: clickArray, score: this.state.score + 1 })
      console.log(this.state.hasBeenClicked)
    }
    else if (this.state.hasBeenClicked.includes(id)) {
      this.setState({ hasBeenClicked: [], score: 0 });
      alert("You lost!")
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
              imageURL={image.imageURL}
              hasLost={this.state.hasLost}
              hasBeenClicked={this.state.hasBeenClicked}
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
