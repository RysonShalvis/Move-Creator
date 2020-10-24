import React from 'react';

class AddTrick extends React.Component {
   
    render() {
        let base = this.props.base;
        if (base === '180') {
            base = 'one-eighty'
        }
        console.log(<input id={this.props.eventTarget} className={`${base} add-trick-button`} onClick={this.props.handleClick} type="button" value={this.props.name} />
        )
        return <input id={this.props.eventTarget} className={`${base} add-trick-button`} onClick={this.props.handleClick} type="button" value={this.props.name} />
    }
}

export default AddTrick;