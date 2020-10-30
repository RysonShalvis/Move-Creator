import React from 'react';
import './App.css';
import CreatedElements from './createdElements'
import { listOfAllTricks } from './listOfAllTricksObject';
import CreatedMove from './CreatedMove';
import OrignalTricks from './OrignalTricks';
import AllTricks from './AllTricks';
import MovesLeft from './MovesLeft'

let trickOptions = ['sideflip','frontflip','backflip','180'];
let clickedMoves = ['?',<p style={{display: 'inline'}}> + </p>,'?'];
let moves = [0,0];
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
      ogValue1: '',
      ogValue2: '',
      oneEightyClassName1: 'first-not-clicked',
      sideClassName1: 'first-not-clicked',
      frontClassName1: 'first-not-clicked',
      backClassName1: 'first-not-clicked',
      sideClassName2: 'first-not-clicked',
      frontClassName2: 'first-not-clicked',
      backClassName2: 'first-not-clicked',
      oneEightyClassName2: 'first-not-clicked',
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
    if (clickedMoves[0] === '?' || clickedMoves[2] === '?') {

      console.log(e.target.id)
      if (e.target.id === 'first') {
        moves.splice(0,1,e.target.value)
        clickedMoves.splice(0,1,<p style={{display: 'inline'}} key={this.state.counter} id={`move${this.state.counter}`}>{e.target.value}</p>) 
        
      } else if (e.target.id === 'second') {
        moves.splice(1,1,e.target.value);
        
        clickedMoves.splice(2,1,<p style={{display: 'inline'}} key={this.state.counter} id={`move${this.state.counter}`}>{e.target.value}</p>) 
      }
     }
     this.setState({
      element: moves
  });
  if (clickedMoves[0] !== '?' && clickedMoves[2] !== '?') {
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
  if (clickedMoves[0] !== '?' && clickedMoves[2] !== '?') {
    this.setState({
      oneEightyClassName1: 'first-not-clicked',
      sideClassName1: 'first-not-clicked',
      frontClassName1: 'first-not-clicked',
      backClassName1: 'first-not-clicked',
      sideClassName2: 'first-not-clicked',
      frontClassName2: 'first-not-clicked',
      backClassName2: 'first-not-clicked',
      oneEightyClassName2: 'first-not-clicked',
    })
  }
  }

  

  handleOriginalTricks(e) {
    console.log(this.state.ogValue1);
    if (e.target.classList[0] === 'first') {
      e.target.value === 'sideflip' && this.state.sideClassName1 === 'first-not-clicked' ? this.setState({sideClassName1: 'first-clicked'}) : this.setState({sideClassName1: 'first-not-clicked'});
      e.target.value === 'frontflip' && this.state.frontClassName1 === 'first-not-clicked' ? this.setState({frontClassName1: 'first-clicked'}) : this.setState({frontClassName1: 'first-not-clicked'});
      e.target.value === 'backflip' && this.state.backClassName1 === 'first-not-clicked' ? this.setState({backClassName1: 'first-clicked'}) : this.setState({backClassName1: 'first-not-clicked'});
      e.target.value === '180' && this.state.oneEightyClassName1 === 'first-not-clicked' ? this.setState({oneEightyClassName1: 'first-clicked'}) : this.setState({oneEightyClassName1: 'first-not-clicked'});
      this.setState({ogValue1: e.target.value})
    } 
    else if (e.target.classList[0] === 'second') {
      e.target.value === 'sideflip' && this.state.sideClassName2 === 'first-not-clicked' ? this.setState({sideClassName2: 'first-clicked'}) : this.setState({sideClassName2: 'first-not-clicked'});
      e.target.value === 'frontflip' && this.state.frontClassName2 === 'first-not-clicked' ? this.setState({frontClassName2: 'first-clicked'}) : this.setState({frontClassName2: 'first-not-clicked'});
      e.target.value === 'backflip' && this.state.backClassName2 === 'first-not-clicked' ? this.setState({backClassName2: 'first-clicked'}) : this.setState({backClassName2: 'first-not-clicked'});
      e.target.value === '180' && this.state.oneEightyClassName2 === 'first-not-clicked' ? this.setState({oneEightyClassName2: 'first-clicked'}) : this.setState({oneEightyClassName2: 'first-not-clicked'});

      this.setState({ogValue2: e.target.value})
    }
    if (clickedMoves[0] !== '?' && clickedMoves[2] !== '?') {
      moves = [0,0];
      clickedMoves = ['?',<p style={{display: 'inline'}}>+</p>,'?'];
    }
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
    
    return (
    <div className="all">
      <div className="text-container">
       <CreatedElements input={clickedMoves} counter={this.state.counter}/>
        <CreatedMove createdMove={this.state.createdMove} />
        <MovesLeft didWin={this.state.didWin} tilWin={this.state.howManyTilWin} />
      </div>
      <div className="button-container">
        <div className="add-trick-container-one">
          <h1>Trick Type</h1>
          <OrignalTricks 
            sideClassName={this.state.sideClassName1} 
            frontClassName={this.state.frontClassName1} 
            backClassName={this.state.backClassName1} 
            oneEightyClassName={this.state.oneEightyClassName1}  
            ogClass="first" 
            handleClick={this.handleOriginalTricks} 
             />
        </div>
          <AllTricks 
            whichClicked={this.state.whichOriginalClicked1} 
            ogtrue={this.state.orginalTricksClicked1} 
            handleClick={this.handleClick}
            trickOptions={trickOptions}
            firstOrSecond="first"/>
          <AllTricks 
            whichClicked={this.state.whichOriginalClicked2} 
            ogtrue={this.state.orginalTricksClicked2} 
            handleClick={this.handleClick}
            trickOptions={trickOptions}
            firstOrSecond="second"/>
        <div className="add-trick-container-two">
          <h1>Trick Type</h1>
          <OrignalTricks 
            sideClassName={this.state.sideClassName2} 
            frontClassName={this.state.frontClassName2} 
            backClassName={this.state.backClassName2} 
            oneEightyClassName={this.state.oneEightyClassName2}   
            ogClass="second" 
            handleClick={this.handleOriginalTricks} />
        </div>
         
      </div>
       
    </div>
    )
  }
}

export default App;
