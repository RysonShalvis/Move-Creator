import React from 'react';

class AddTrick extends React.Component {
    render() {
        return <input onClick={this.props.handleClick} type="button" value={this.props.name} />
    }
}

export default AddTrick;