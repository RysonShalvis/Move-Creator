import React from 'react';

class AddTrick extends React.Component {
   
    render() {
        let base = this.props.base;
        return <input className={`${base} add-trick-button`} onClick={this.props.handleClick} type="button" value={this.props.name} />
    }
}

export default AddTrick;