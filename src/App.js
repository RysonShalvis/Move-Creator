import React from 'react';
import './App.css';
import AddTrick from './AddTrick';
import CreatedElements from './createdElements'
import CombineTricksLogic from './CombineTricksLogic';
let arr = [];
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      counter: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    
    this.setState({ 
      input: e.target.value,
      counter: this.state.counter + 1
    })
    if (arr.length < 2) {
      arr.push(<p key={this.state.counter} id={`move${this.state.counter}`}>{e.target.value}</p>) 
     }
  }

  render() {

    return (
    <div>
      <AddTrick handleClick={this.handleClick} name="sideflip"/>
      <AddTrick handleClick={this.handleClick} name="frontflip"/>
      <AddTrick handleClick={this.handleClick} name="backflip"/>
      <AddTrick handleClick={this.handleClick} name="180"/>
      <CreatedElements input={arr} counter={this.state.counter}/>
      <CombineTricksLogic input={arr}/>
    </div>
    )
  }
}

export default App;
