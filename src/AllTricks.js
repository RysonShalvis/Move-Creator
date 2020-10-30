import React, { Component } from 'react';
import { listOfAllTricks } from './listOfAllTricksObject';
import AddTrick from './AddTrick';

class AllTricks extends Component {
    render() {
        let trickOptions = this.props.trickOptions
        const allTricks = trickOptions.map(trick => {
            return (
               <AddTrick
                 eventTarget={this.props.eventTarget}
                 className="add-trick"  
                 key={trick} 
                 base={listOfAllTricks.listOfTricks[listOfAllTricks.listOfTricks.map(trickObject => trickObject.name).indexOf(trick)].base} 
                 handleClick={this.props.handleClick}
                 firstOrSecond={this.props.firstOrSecond} 
                 name={trick}/>
               )
             }
           );
           let firstOrSecond = this.props.firstOrSecond;
        let target = this.props.whichClicked;
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
        function which() {
            return (
                <div className="add-trick-container">
                    <h2>{firstOrSecond} Trick</h2>
                    {whichOneClicked()}
                </div>

            )
        }
        return (
            <div className="add-trick-container">
                
                {this.props.ogtrue ? which()  : ''}
            </div>
        );
    }
}

export default AllTricks;