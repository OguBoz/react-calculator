import React,  { Component } from 'react';


class Result extends Component {

    render() {
        let {result} = this.props;
        return(
            <div className="result">
            <h3>{result}</h3>
        </div>
        )
    }
}

export default Result;