import React from 'react';

import './ClickImage.css';

class ClickImage extends React.Component {
    state = {
        hasBeenClicked: false
    }
    changeState = () => {
        this.setState({hasBeenClicked: true})
        console.log(this.state.hasBeenClicked)
        this.props.handleClick()
        if (this.state.hasBeenClicked === true) {
            alert("you lose")
        }
    }
    render() {
        return (
        
            <div id="click-image-div" key={this.props.id}>
                <img 
                className="click-image" 
                src={this.props.imageURL} alt={this.props.alt} 
                key={this.props.id} 
                onClick={this.changeState}
                >
                </img>
            </div>
        );
    }
};

export default ClickImage;