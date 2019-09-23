import React from 'react';

import './ClickImage.css';

function ClickImage(props) {
    console.log(props.imageURL)
    return (
        <div className="container">
            <div id="click-image-div" key={props.id}>
                <img className="click-image" src={props.imageURL} alt={props.alt} key={props.id}></img>
            </div>
        </div>
    );
};

export default ClickImage;