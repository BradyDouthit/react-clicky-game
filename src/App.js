import React from 'react';

import './App.css';

import images from './components/ClickImage/images.json';

import MyHeader from './components/MyHeader/MyHeader.js';

import ClickImage from './components/ClickImage/ClickImage';

function App() {
  return (
    
    <div className="App">
      <MyHeader />
      {images.map(image => 
        <ClickImage alt={image.alt} key={image.id} imageURL={image.imageURL} />
      )}
    </div>
  );
}

export default App;
