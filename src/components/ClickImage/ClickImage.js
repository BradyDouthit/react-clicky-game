import React from 'react';

import './ClickImage.css';

function handleClick () {
    
}

function ClickImage(props) {
    console.log(props)
    return (
        <div id="click-image-div" key={props.id}>
            <img className="click-image" src={props.imageURL} alt={props.alt} key={props.id} onClick={handleClick}></img>
        </div>
    );
};

export default ClickImage;