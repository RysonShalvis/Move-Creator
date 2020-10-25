import React from 'react';
import './App.css';
import AddTrick from './AddTrick';
import CreatedElements from './createdElements'
import { listOfAllTricks } from './listOfAllTricksObject';
import CreatedMove from './CreatedMove';
import OrignalTricks from './OrignalTricks';
import AllTricks from './AllTricks';
import MovesLeft from './MovesLeft'

let trickOptions = ['sideflip','frontflip','backflip','180'];
trickOptions = trickOptions.sort();
let clickedMoves = [0,<p>+</p>,0];
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
      allTricks: '',
      eventTarget: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOriginalTricks = this.handleOriginalTricks.bind(this);
  }


  handleClick(e) {
    
    this.setState({ 
      input: e.target.value,
      counter: this.state.counter + 1,
      createdMove: '',
    })
    if (clickedMoves[0] === 0 || clickedMoves[2] === 0) {

      if (this.state.eventTarget === 'first') {
        console.log(e.target.value)
        moves.splice(0,1,e.target.value)
        clickedMoves.splice(0,1,<p key={this.state.counter} id={`move${this.state.counter}`}>{e.target.value}</p>) 
      } else if (this.state.eventTarget === 'second') {
        moves.splice(1,1,e.target.value);
        clickedMoves.splice(2,1,<p key={this.state.counter} id={`move${this.state.counter}`}>{e.target.value}</p>) 
      }
     }
     this.setState({
      element: moves
  });
  if (clickedMoves[0] !== 0 && clickedMoves[2] !== 0) {
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
      clickedMoves = [0,<p>+</p>,0];
  }
  if (trickOptions.length === listOfAllTricks.listOfTricks.length - 1) {
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
    this.setState({eventTarget: e.target.classList[0]})
    if (e.target.classList[0] === 'first') {
      if (e.target.value === '180' && this.whichOneClicked() === '180' && this.state.orginalTricksClicked1) {
        this.setState({
          orginalTricksClicked1: false
        })
      } else if (e.target.value === 'sideflip' && this.whichOneClicked() === 'sideflip' && this.state.orginalTricksClicked1) {
        this.setState({
          orginalTricksClicked1: false
        })
      } else if (e.target.value === 'frontflip' && this.whichOneClicked() === 'frontflip' && this.state.orginalTricksClicked1) {
        this.setState({
          orginalTricksClicked1: false
        })
      } else if (e.target.value === 'backflip' && this.whichOneClicked() === 'backflip' && this.state.orginalTricksClicked1) {
        this.setState({
          orginalTricksClicked1: false
        })
      } else {
        this.setState({
          orginalTricksClicked1: true,
          whichOriginalClicked1: e.target.value
        })
      }
    }
    if (e.target.classList[0] === 'second') {
      if (e.target.value === '180' && this.whichOneClicked2() === '180' && this.state.orginalTricksClicked2) {
        this.setState({
          orginalTricksClicked2: false
        })
      } else if (e.target.value === 'sideflip' && this.whichOneClicked2() === 'sideflip' && this.state.orginalTricksClicked2) {
        this.setState({
          orginalTricksClicked2: false
        })
      } else if (e.target.value === 'frontflip' && this.whichOneClicked2() === 'frontflip' && this.state.orginalTricksClicked2) {
        this.setState({
          orginalTricksClicked2: false
        })
      } else if (e.target.value === 'backflip' && this.whichOneClicked2() === 'backflip' && this.state.orginalTricksClicked2) {
        this.setState({
          orginalTricksClicked2: false
        })
      } else {
        this.setState({
          orginalTricksClicked2: true,
          whichOriginalClicked2: e.target.value
        })
      }
    }
  }

  whichOneClicked() {
    let target = this.state.whichOriginalClicked1;
    return target;
}

whichOneClicked2() {
  let target = this.state.whichOriginalClicked2;
  return target;
}

  render() {
    
    const allTricks = trickOptions.map(trick => {
       return (
          <AddTrick
            eventTarget={this.state.eventTarget}
            className="add-trick"  
            key={trick} base={listOfAllTricks.listOfTricks[listOfAllTricks.listOfTricks.map(trickObject => trickObject.name).indexOf(trick)].base} 
            handleClick={this.handleClick} 
            name={trick}/>
          )
        }
      )
    return (
    <div className="all">
       <CreatedElements input={clickedMoves} counter={this.state.counter}/>
        <CreatedMove createdMove={this.state.createdMove} />
        <MovesLeft didWin={this.state.didWin} tilWin={this.state.howManyTilWin} />
      <div className="button-container">
        <div className="add-trick-container-one">
          <h1>First Trick</h1>
          <OrignalTricks ogClass="first" handleClick={this.handleOriginalTricks} />
        </div>
          <AllTricks whichClicked={this.state.whichOriginalClicked1} ogtrue={this.state.orginalTricksClicked1} allTricks={allTricks}/>
          <AllTricks whichClicked={this.state.whichOriginalClicked2} ogtrue={this.state.orginalTricksClicked2} allTricks={allTricks}/>
        <div className="add-trick-container-two">
          <h1>Second Trick</h1>
          <OrignalTricks ogClass="second" handleClick={this.handleOriginalTricks} />
      </div>
         
    </div>
       
    </div>
    )
  }
}

export default App;
