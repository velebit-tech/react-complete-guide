import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    header_text: 'Hello Croatia',
    people: [
      { name: 'Mario', weight: 75 },
      { name: 'Joso', weight: 700 },
      { name: 'Karlo', weight: 80 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      people: [
        { name: 'Mario Markovic', weight: 74 },
        { name: 'Joso', weight: 700 },
        { name: 'Karlo Markovic', weight: 81 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.header_text}</h1>
        <button onClick={this.switchNameHandler}>Switch something</button>
        <Person name={this.state.people[0].name} weight={this.state.people[0].weight} />
        <Person name={this.state.people[1].name} weight={this.state.people[1].weight}>Also, I am fiction character.</Person>
        <Person name={this.state.people[2].name} weight={this.state.people[2].weight} />
      </div>
    );
  }
}

export default App;
