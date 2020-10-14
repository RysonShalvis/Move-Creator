import React from 'react';
import './App.css';
import AddTrick from './AddTrick';
import CreatedElements from './createdElements'
import CombineTricks from './CombineTricks';
import { listOfAllTricks } from './listOfAllTricksObject';
import CreatedMove from './CreatedMove';

let trickOptions = ['sideflip','frontflip','backflip','180'];
trickOptions = trickOptions.sort();
let clickedMoves = [];
let moves = [];
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      counter: 0,
      element: '',
      createdMove: '',
      didWin: '',
      howManyTilWin: listOfAllTricks.listOfTricks.length - trickOptions.length - 1
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleClick(e) {
    
    this.setState({ 
      input: e.target.value,
      counter: this.state.counter + 1,
      createdMove: ''
    })
    if (clickedMoves.length < 2) {
      moves.push(e.target.value);
      clickedMoves.push(<p key={this.state.counter} id={`move${this.state.counter}`}>{e.target.value}</p>) 
     }
    
  }

  handleSubmit() {
    this.setState({
        element: moves
    });
    if (clickedMoves.length === 2) {

      let trick = listOfAllTricks.listOfTricks;
      let copyTrickOptions = [...trickOptions]
      loopTrickOptions:
        for(let j = 0; j < copyTrickOptions.length; j++) {
          for (let i = 0; i < trick.length; i++) {
          let recipe = trick[i].recipe;
            if (recipe)  {
            
              if (recipe.join('') === moves.join('')) {
                if (copyTrickOptions[j] === trick[i].name) {
                  this.setState({
                    createdMove: `${trick[i].name} has already been created`
                  });
                  console.log('already a move');
                  break loopTrickOptions; 
                } else if (trickOptions.length - 1 === j && trickOptions[j] !== trick[i].name) {
                  console.log('Congrats you created a new move');
                  
                  this.setState({
                    createdMove: `Congrats, You have created a ${trick[i].name}${trick[i].alias ? `, A.K.A ${trick[i].alias}` : ''}.` //checks if move has alias and will display if it does
                  });
                  trickOptions.push(trick[i].name);
                  trickOptions = trickOptions.sort();
                  break loopTrickOptions; 
                }
              }
            
            }
          }
           if (copyTrickOptions.length - 1 === j ) {
            console.log('not a trick')
            this.setState({
              createdMove: 'Not a trick'
            });
          }
          
      }
      
      moves = [];
      clickedMoves = [];
    }
    if (trickOptions.length === listOfAllTricks.listOfTricks.length) {
      this.setState({
        didWin: 'You have created every move, You win!'
      })
      console.log('you have cerated every move')
    }
    this.setState({
      howManyTilWin: listOfAllTricks.listOfTricks.length - trickOptions.length - 1
    })
  }

  render() {
    const allTricks = trickOptions.map(trick => <AddTrick key={trick} handleClick={this.handleClick} name={trick}/>)
    return (
    <div className="all">
      {allTricks}
      <CreatedElements input={clickedMoves} counter={this.state.counter}/>
      <CreatedMove createdMove={this.state.createdMove} />
      <CombineTricks handleSubmit={this.handleSubmit}/>
      <h1>{this.state.didWin}</h1>
      <h3>You have {this.state.howManyTilWin} tricks left to create</h3>
    </div>
    )
  }
}

export default App;
