import React, { Component } from 'react';
import './App.css';
import ResultComponent from '../src/components/ResultComponent';
import KeyPadComponent from '../src/components/KeyPadComponent';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }
    componentDidMount=() =>{
        let btn = document.createElement("BUTTON");
        let t = document.createTextNode("Description");
        btn.appendChild(t);
        document.body.appendChild(btn);
        btn.addEventListener("click", function() {
            let paragraph = document.createElement("p");
            let t = document.createTextNode("A calculator with functions for basic arithmetic");
            paragraph.appendChild(t);
            document.body.appendChild(paragraph);
        });
    }
    
    onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "CE"){
          this.backspace()
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };

    calculate = () => {
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(this.state.result) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Simple Calculator</h1>
                    <p>CMC front end class</p>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;