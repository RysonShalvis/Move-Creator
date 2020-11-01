import React, { Component } from 'react';

class OrignalTricks extends Component {

    

    render() {
        if (this.props.ogClass === 'first') {
            
        }
            return (
                <div className="og-container">
                    <input className={`${this.props.ogClass} og-trick-button ${this.props.oneEightyClassName}`} onClick={this.props.handleClick} type="button" value="180" />
                    <input className={`${this.props.ogClass} og-trick-button ${this.props.sideClassName}`} onClick={this.props.handleClick} type="button" value="sideflip" />
                    <input className={`${this.props.ogClass} og-trick-button ${this.props.frontClassName}`} onClick={this.props.handleClick} type="button" value="frontflip" />
                    <input className={`${this.props.ogClass} og-trick-button ${this.props.backClassName}`} onClick={this.props.handleClick} type="button" value="backflip" />
                </div>
            );
      
        
    }
}

export default OrignalTricks;