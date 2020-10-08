import React from 'react';
import './App.css';
import AddTrick from './AddTrick';
import CreatedElements from './createdElements'
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
    arr.push(e.target.value)
    this.setState({ 
      input: e.target.value,
      counter: this.state.counter + 1
    })
  }

  render() {

    return (
    <div>
      <AddTrick handleClick={this.handleClick} name="side"/>
      <AddTrick handleClick={this.handleClick} name="forward"/>
      <AddTrick handleClick={this.handleClick} name="backward"/>
      <AddTrick handleClick={this.handleClick} name="spin"/>
      <CreatedElements input={arr} counter={this.state.counter}/>
    </div>
    )
  }
}

export default App;
