import React from 'react';

import './ClickImage.css';

class ClickImage extends React.Component {
    state = {
        score: 0,
        hasBeenClicked: false
    }
    changeState = () => {
        //if image has never been clicked before
        if (this.state.hasBeenClicked === false) {
            this.setState({hasBeenClicked: true, score: this.state.score + 1})
            console.log(this.state.score)
            let newScore = this.props.score + 1
            this.props.handleClick(newScore);
        }
        //if image has been clicked before
        //notify that you lost
        //reset all image hasBeenClicked state to false
        else if (this.state.hasBeenClicked === true) {
            alert("you lose")
            this.setState({hasBeenClicked: false})
            this.props.handleClick(0)
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