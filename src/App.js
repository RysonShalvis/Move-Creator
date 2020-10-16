import React from 'react';
import './App.css';
import AddTrick from './AddTrick';
import CreatedElements from './createdElements'
import { listOfAllTricks } from './listOfAllTricksObject';
import CreatedMove from './CreatedMove';
import OrignalTricks from './OrignalTricks';
import AllTricks from './AllTricks';

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
      howManyTilWin: listOfAllTricks.listOfTricks.length - trickOptions.length - 1,
      orginalTricksClicked1: false,
      orginalTricksClicked2: false,
      whichOriginalClicked1: '',
      whichOriginalClicked2: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOriginalTricks = this.handleOriginalTricks.bind(this);
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
     this.setState({
      element: moves
  });
  if (clickedMoves.length === 2) {
    this.setState({
      orginalTricksClicked1: false,
      orginalTricksClicked2: false,
      
    })
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

  

  handleOriginalTricks(e) {
    if (e.target.classList[0] === 'first') {

      this.setState({
        orginalTricksClicked1: true,
        whichOriginalClicked1: e.target.value
      })
    }
    if (e.target.classList[0] === 'second') {

      this.setState({
        orginalTricksClicked2: true,
        whichOriginalClicked2: e.target.value
      })
    }
  }

  render() {
    
    const allTricks = trickOptions.map(trick => <AddTrick  key={trick} base={listOfAllTricks.listOfTricks[listOfAllTricks.listOfTricks.map(trickObject => trickObject.name).indexOf(trick)].base} handleClick={this.handleClick} name={trick}/>)
    return (
    <div className="all">
      <div className="add-trick-container">
        <OrignalTricks ogClass="first" handleClick={this.handleOriginalTricks} />
        <AllTricks whichClicked={this.state.whichOriginalClicked1} ogtrue={this.state.orginalTricksClicked1} allTricks={allTricks}/>
      </div>
      <div className="add-trick-container">
        <OrignalTricks ogClass="second" handleClick={this.handleOriginalTricks} />
        <AllTricks whichClicked={this.state.whichOriginalClicked2} ogtrue={this.state.orginalTricksClicked2} allTricks={allTricks}/>
      </div>
        <CreatedElements input={clickedMoves} counter={this.state.counter}/>
        <CreatedMove createdMove={this.state.createdMove} />
      <h1>{this.state.didWin}</h1>
      <h3>You have {this.state.howManyTilWin} tricks left to create</h3>
    </div>
    )
  }
}

export default App;
