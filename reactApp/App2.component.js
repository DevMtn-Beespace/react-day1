import React from 'react';
import ReactDOM from 'react-dom';

var App2 = React.createClass({
  getInitialState() {
    return ({
      name: "To Do List",
      list: [],
      currentItem: "",
    })
  },
  render () {
    return (
      <div>
      Hello World
      <div onClick={this.handleClick}>
        {this.state.name}
      </div>
      <input
      value={this.state.currentItem}
      onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Add</button>
      {this.state.list.map((value, index) => {
        return (
          <div
            onClick={this.handleRemove.bind(this, index)} // partial application. Binds the proper index as well as 'this'
            key={index}>
            {value} &nbsp;X&nbsp;
          </div> // making an array filled with divs
        )
      })}
      </div>
    )
  },
  handleRemove(removeIndex) {
    this.setState ({
      list: this.state.list.filter((value, index) => index !== removeIndex) // implicit return one line ES6
    });
  },
  handleChange(event) {
    this.setState({
      currentItem: event.target.value,
    })
  },
  handleClick() {
    this.setState({
      list: this.state.list.concat([this.state.currentItem]),
      currentItem: "",
    })
  }
});

ReactDOM.render(<App2 />, document.getElementById('app2'));
