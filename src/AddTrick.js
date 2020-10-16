import React from 'react';

class AddTrick extends React.Component {
   
    render() {
        let base = this.props.base;
        if (base === '180') {
            base = 'one-eighty'
        }
        return <input className={`${base} add-trick-button`} onClick={this.props.handleClick} type="button" value={this.props.name} />
    }
}

export default AddTrick;