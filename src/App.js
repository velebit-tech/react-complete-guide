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

  switchNameHandler = newName => {
    this.setState({
      people: [
        { name: newName, weight: 74 },
        { name: 'Joso', weight: 700 },
        { name: 'Karlo Markovic', weight: 81 }
      ]
    });
  }

  typingHandler = event => {
    this.setState({
      people: [
        { name: event.target.value, weight: 74 },
        { name: 'Joso', weight: 700 },
        { name: 'Karlo Markovic', weight: 81 }
      ]
    });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'lightgreen',
      border: '2px solid green',
      width: '350px',
      height: '50px'
    };

    return (
      <div className="App">
        <h1>{this.state.header_text}</h1>
        <button
          style={buttonStyle}
          onClick={this.switchNameHandler.bind(this, 'Mario Markovic')}
        >Switch something</button>
        <Person
          name={this.state.people[0].name}
          weight={this.state.people[0].weight}
          typing={this.typingHandler} />
        <Person
          name={this.state.people[1].name}
          weight={this.state.people[1].weight}
          click={() => this.switchNameHandler('Mario MARKOVIC')}
        >Also, I am fiction character.
        </Person>
        <Person
          name={this.state.people[2].name}
          weight={this.state.people[2].weight} />
      </div >
    );
  }
}

export default App;
