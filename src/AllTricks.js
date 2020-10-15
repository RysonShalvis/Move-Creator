import React, { Component } from 'react';

class AllTricks extends Component {
    render() {
        return (
            <div className="add-trick-container">
                {this.props.ogtrue ? this.props.allTricks : ''}
            </div>
        );
    }
}

export default AllTricks;