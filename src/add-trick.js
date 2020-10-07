import React, { createElement } from 'react';
let hello = 'goodbye';
class AddTrick extends React.Component {
  

    render() {
        
        return (
            <div>
                <input onClick={this.props.handleClick} type="button" value="add spin" />
                <input onClick={this.props.handleClick} type="button" value="add forward" />
                <input onClick={this.props.handleClick} type="button" value="add backward" />
                <input onClick={this.props.handleClick} type="button" value="add sidewards" />
                {this.props.name}
            </div>
                )
    }
};

export default AddTrick;