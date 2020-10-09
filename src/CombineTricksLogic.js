import React from 'react';
import CombineTricks from './CombineTricks';


class CombineTricksLogic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        let moves = this.props.input;
        console.log('hello')
    }

    render() {
       return (
       <div>
           <CombineTricks handleSubmit={this.handleSubmit} />
        </div>
       )
    }
}

export default CombineTricksLogic;