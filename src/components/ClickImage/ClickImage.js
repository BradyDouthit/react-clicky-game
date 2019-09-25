import React from 'react';

import './ClickImage.css';

function ClickImage(props) {
    return (
        <div id="click-image-div" key={props.id}>
            <img 
            className="click-image" 
            src={props.imageURL} alt={props.alt} 
            key={props.id} 
            onClick={() => props.handleClick(props.hasBeenClicked)}
            >
            </img>
        </div>
    );
};

export default ClickImage;