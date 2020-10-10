import React from 'react';

class AddTrick extends React.Component {
    render() {
        return <input onChange={this.props.handleChange} onClick={this.props.handleClick} type="button" value={this.props.name} />
    }
}

export default AddTrick;