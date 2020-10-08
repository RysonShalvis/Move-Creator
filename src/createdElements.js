import React from 'react';

class CreatedElements extends React.Component {
    componentDidUpdate() {
        console.log(this.props.input)
    }
    render() {
        return <h1>{this.props.input}</h1>
    }
}

export default CreatedElements;