import React from 'react';

import './MyHeader.css'

function MyHeader(props) {
    return (
        <div className="MyHeader">
            <h1>Clicky Game</h1>
            <p>The goal of this game is to never click the same block twice!</p>
                <h2 className="header-score">Score: {props.score}</h2>
        </div>
    )
}

export default MyHeader;