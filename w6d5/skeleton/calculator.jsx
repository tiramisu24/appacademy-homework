import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    debugger
    super(props);

    this.state = {
      result:0,
      num1:"",
      num2:""
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.plusButton = this.plusButton.bind(this);
    this.minusButton = this.minusButton.bind(this);
    this.divideButton = this.divideButton.bind(this);
    this.multButton = this.multButton.bind(this);
    this.reset = this.reset.bind(this);
  }
  setNum1(event){
    event.preventDefault();
    this.state["num1"] = event.target.value;
    this.setState({result:this.state.num1})

    // debugger
  }
  setNum2(event){
    event.preventDefault();
    this.state["num2"] = event.target.value;
    this.setState({result:this.state.num2})

  }

  plusButton(event){
    event.preventDefault();
    this.state.result = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({result:this.state.result})
  }
  minusButton(event){
    event.preventDefault();
    this.state.result = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({result:this.state.result})

  }
  divideButton(event){
    event.preventDefault();
    this.state.result = parseInt(this.state.num1) / parseInt(this.state.num2);
    this.setState({result:this.state.result})

  }
  multButton(event){
    event.preventDefault();
    this.state.result = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({result:this.state.result})

  }
  reset(event){
    event.preventDefault();
    // this.state = {
    //   result:0,
    //   num1:"",
    //   num2:""
    // }
    this.setState({ num1: "", num2: "", result: 0 });

    // this.setState({result:0, num1:});
    // this.setState({num1:""});
    // this.setState({num2:"0"});
    // debugger;
    // alert(this.state.num1);

  }




  // your code here

  render() {
    return (
      <div>
        <input  onChange = {this.setNum1} value={this.state.num1}/>
        <button type="button" onClick = {this.plusButton}>+</button>
        <button type="button" onClick = {this.minusButton}>-</button>
        <button type="button" onClick = {this.divideButton}>/</button>
        <button type="button" onClick = {this.multButton}>*</button>
        <input onChange = {this.setNum2} value={this.state.num2}/>
        <button type = "button" onClick = {this.reset}>clear</button>

        <h1> {this.state.result}</h1>

      </div>
    );
  }
}

export default Calculator;
