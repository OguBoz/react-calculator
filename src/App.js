import React, {Component} from 'react';
import './App.css';
import Result from './components/Result'
import Keypad from './components/Keypad'

class App extends Component {
  constructor() {
    super();
  }

  state = {
    result: ""
  }

  onClick = (name) => {
    if(name === "=") {
      this.calculate()
    } else if(name === "C") {
      this.reset();
    } else {
      this.setState({
        result : this.state.result + name
      })
    }
  }

  calculate = () => {
    let checkResult = '';
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+');
    } else {
      checkResult = this.state.result;
    }
    try {
      this.setState({
        result: (eval(checkResult))
      })
    } catch(e) {
      this.setState({
        result: 'error'
      })
    }
  }

  reset = () => {
    this.setState({
      result : ""
    })
  }

  render() {
    return(
      <div>
        <div className="calculator">
          <Result result={this.state.result} />
          <Keypad onClick={this.onClick}  />
        </div>
      </div>
    )
  }
}

export default App;
