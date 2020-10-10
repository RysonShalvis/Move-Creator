import React from 'react';
import './App.css';
import AddTrick from './AddTrick';
import CreatedElements from './createdElements'
import CombineTricksLogic from './CombineTricksLogic';
import { listOfAllTricks } from './listOfAllTricksObject';

console.log(listOfAllTricks);
let trickOptions = ['sideflip','frontflip','backflip','180'];
let arr = [];
let moves = [];
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      counter: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    if (moves.length === 2) {
      moves = [];
      arr = [];
    }
    console.log(moves)
  }

  handleClick(e) {
    
    this.setState({ 
      input: e.target.value,
      counter: this.state.counter + 1
    })
    if (arr.length < 2) {
      moves.push(e.target.value);
      arr.push(<p key={this.state.counter} id={`move${this.state.counter}`}>{e.target.value}</p>) 
     }
     if (arr.length === 2) {
      trickOptions.push(moves)
    }
  }

  componentDidUpdate() {
    this.handleChange();
  }
  render() {
    const allTricks = trickOptions.map(trick => <AddTrick key={trick} handleChange={this.handleChange} handleClick={this.handleClick} name={trick}/>)
    return (
    <div>
      {allTricks}
      <CreatedElements input={arr} counter={this.state.counter}/>
      <CombineTricksLogic input={moves}/>
    </div>
    )
  }
}

export default App;
