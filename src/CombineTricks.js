import React from 'react';


class CombineTricks extends React.Component {
    render() {
       return <input className="submit" type="submit" onClick={this.props.handleSubmit}/>
    }
}

export default CombineTricks;