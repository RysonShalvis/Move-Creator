import React, { Component } from 'react';

class OrignalTricks extends Component {
    render() {
        return (
            <div className="og-container">
                <input className={`${this.props.ogClass} add-trick-button`} onClick={this.props.handleClick} type="button" value="180" />
                <input className={`${this.props.ogClass} add-trick-button`} onClick={this.props.handleClick} type="button" value="sideflip" />
                <input className={`${this.props.ogClass} add-trick-button`} onClick={this.props.handleClick} type="button" value="frontflip" />
                <input className={`${this.props.ogClass} add-trick-button`} onClick={this.props.handleClick} type="button" value="backflip" />
            </div>
        );
    }
}

export default OrignalTricks;