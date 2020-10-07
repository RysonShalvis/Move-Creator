import React, { createElement } from 'react';
import AddTrick from './add-trick';
let hello = 'goodbye';
class AddTrickContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'goodbye',
            numOfChildren: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let newElement = React.createElement('h1',{},e.target.value);
        this.setState({
            hello: newElement,
            numOfChildren: this.state.numOfChildren + 1
        })
    }

    handleChildren() {
        const children = [];
        for (let i = 0; i < this.state.numOfChildren; i++) {
            children.push(<AddTrick handleClick={this.handleClick} name={this.state.hello} />)
        }
        return children
    }

    componentDidUpdate() {
        this.handleChildren()
    }
    render() {
        
        return (
            <div>
                {this.handleChildren()}
            </div>
            ) 
            
    }

};

export default AddTrickContainer;