import React, { Component } from 'react';

class OrignalTricks extends Component {

    

    render() {
        let classList1 = this.props.classList1;
        let classList2 = this.props.classList2
        let ogValue1 = this.props.ogValue1;
        let ogValue2 = this.props.ogValue2;
        if (this.props.ogClass1 === 'first') {
   
            return (
                <div className="og-container">
                    <input className={ogValue1 === '180' ? `${this.props.ogClass} og-trick-button first-clicked` : `${this.props.ogClass} og-trick-button first-not-clicked`} onClick={this.props.handleClick} type="button" value="180" />
                    <input className={ogValue1 === 'sideflip' ?  `${this.props.ogClass} og-trick-button first-clicked` : `${this.props.ogClass} og-trick-button first-not-clicked`} onClick={this.props.handleClick} type="button" value="sideflip" />
                    <input className={ogValue1 === 'frontflip' ?  `${this.props.ogClass} og-trick-button first-clicked` : `${this.props.ogClass} og-trick-button first-not-clicked`} onClick={this.props.handleClick} type="button" value="frontflip" />
                    <input className={ogValue1 === 'backflip' ?  `${this.props.ogClass} og-trick-button first-clicked` : `${this.props.ogClass} og-trick-button first-not-clicked`} onClick={this.props.handleClick} type="button" value="backflip" />
                </div>
            );
        } else {

            return (
                <div className="og-container">
                    <input className={ogValue2 === '180' ?  `${this.props.ogClass} og-trick-button second-clicked` : `${this.props.ogClass} og-trick-button second-not-clicked`} onClick={this.props.handleClick} type="button" value="180" />
                    <input className={ogValue2 === 'sideflip' ?  `${this.props.ogClass} og-trick-button second-clicked` : `${this.props.ogClass} og-trick-button second-not-clicked`} onClick={this.props.handleClick} type="button" value="sideflip" />
                    <input className={ogValue2 === 'frontflip' ?  `${this.props.ogClass} og-trick-button second-clicked` : `${this.props.ogClass} og-trick-button second-not-clicked`} onClick={this.props.handleClick} type="button" value="frontflip" />
                    <input className={ogValue2 === 'backflip' ?  `${this.props.ogClass} og-trick-button second-clicked` : `${this.props.ogClass} og-trick-button second-not-clicked`} onClick={this.props.handleClick} type="button" value="backflip" />
                </div>
            );
        }
    }
}

export default OrignalTricks;