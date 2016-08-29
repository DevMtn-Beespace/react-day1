import React from 'react'; // an ES6 require statement, like express, etc.
import ReactDOM from 'react-dom';

var App = React.createClass({ // inside here is all react components
  getInitialState() {
    return ({
      name: "Michael",
      tempName: "",
      list: ["1", "2", "3"],
    })
  },
  render() { // the method that returns what the component looks like
    return (
      <div>
        <div onClick={this.handleClick}>
          {this.state.name}
          {this.state.tempName}
        </div>
        <input onChange={this.handleChange}/>
        {this.state.list.map(value => {
          return (
            <div key={value}>{value}</div> // making an array filled with divs
          )
        })}
      </div>
    )
  },
  handleChange(event) {
    this.setState({
      tempName: event.target.value,
    })
  },
  handleClick() {
    this.setState({
      name: this.state.tempName,
    })
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
