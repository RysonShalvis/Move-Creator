import React from 'react';


class CombineTricks extends React.Component {
    render() {
       return <input type="submit" onClick={this.props.handleSubmit}/>
    }
}

export default CombineTricks;