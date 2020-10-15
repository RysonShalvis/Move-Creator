import React, { Component } from 'react';

class AllTricks extends Component {
    render() {
        let target = this.props.whichClicked;
        let allTricks = this.props.allTricks;
        let side = allTricks.filter(trick => trick.props.base === 'sideflip');
        let back = allTricks.filter(trick => trick.props.base === 'backflip');
        let front = allTricks.filter(trick => trick.props.base === 'frontflip');
        let oneEighty = allTricks.filter(trick => trick.props.base === '180');
        function whichOneClicked() {
            if (target === 'backflip') {
                return back
            } else if (target === 'sideflip') {
                return side 
            } else if (target === 'frontflip') {
                return front
            } else if (target === '180') {
                return oneEighty
            } else {
                return ''
            }
        }
        return (
            <div className="add-trick-container">
                {this.props.ogtrue ? whichOneClicked() : ''}
            </div>
        );
    }
}

export default AllTricks;