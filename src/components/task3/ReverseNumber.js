import React, { Component } from "react";

class ReverseNumber extends Component {

  constructor() {
    super()
    this.myForm = React.createRef()
  }
  state = {
    numbers: "",
    reversed: 'Enter number',
    display: false
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clickedHandler = e => {
    e.preventDefault();

    let reversed = this.state.numbers + "";
    reversed = reversed
      .split("")
      .reverse()
      .join("");

    this.setState({
      reversed,
      display: true
    });

    this.myForm.current.reset()
  };

  render() {
    let reversedValue = null;

    if (this.state.display) {
      reversedValue = <h3>Reversed Value: {this.state.reversed}</h3>;
    }
    return (
      <div className="input-group">
        <form ref={this.myForm} className="form-inline" onSubmit={this.clickedHandler}>
          <input style={{marginRight: '5px'}} className="form-control form-control-lg" name="numbers" onChange={this.changeHandler} type="number" />
          <button className="btn btn-primary" type="submit">Reversed Number</button>
        </form>
        {reversedValue}
      </div>
    );
  }
}

export default ReverseNumber;
