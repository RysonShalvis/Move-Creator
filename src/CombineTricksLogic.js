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
        this.setState({
            element: moves
        })
    }

    render() {
       return (
       <div>
           <input type="button" value={this.state.element} />
           <CombineTricks handleSubmit={this.handleSubmit} />
        </div>
       )
    }
}

export default CombineTricksLogic;