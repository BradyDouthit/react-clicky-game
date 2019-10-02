import React from 'react';

import './ClickImage.css';

class ClickImage extends React.Component {
    
    render() {
        return (
        
            <div id="click-image-div" key={this.props.id}>
                <img 
                className="click-image" 
                src={this.props.imageURL} alt={this.props.alt} 
                key={this.props.id} 
                onClick={() => this.props.handleClick(this.props.id)}
                >
                </img>
            </div>
        );
    }
};

export default ClickImage;