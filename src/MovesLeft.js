import React, { Component } from 'react';

class MovesLeft extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.didWin}</h1>
                <h3>You have {this.props.tilWin} tricks left to create</h3>
            </div>
        );
    }
}

export default MovesLeft;