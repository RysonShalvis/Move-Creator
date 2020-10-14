import React from 'react';

class AddTrick extends React.Component {
    render() {
        return <input className="add-trick-button" onClick={this.props.handleClick} type="button" value={this.props.name} />
    }
}

export default AddTrick;