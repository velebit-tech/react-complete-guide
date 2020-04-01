import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    header_text: 'Hello Croatia',
    people: [
      { id: 'asdgasdg', name: 'Mario', weight: 75, child: 'default text' },
      { id: 'dfhsbvbx', name: 'Josso', weight: 99, child: 'default text' },
      { id: 'asfdasef', name: 'Karlo', weight: 80, child: 'default text' }
    ],
    listVisibility: true
  }

  typingHandler = (event, index) => {
    const person = {
      ...this.state.people[index]
    }

    person.child = event.target.value;

    const people = [...this.state.people];
    people[index] = person;

    this.setState({ people: people });
  }

  deletePersonHandler = personIndex => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  }

  toggleVisibilityHandler = () => {
    let visibility = this.state.listVisibility;
    this.setState({ listVisibility: !visibility });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'lightgreen',
      border: '2px solid green',
      width: '350px',
      height: '50px'
    };

    let persons = null;
    if (this.state.listVisibility) {
      persons = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              weight={person.weight}
              child={person.child}
              key={person.id}
              typing={(event) => this.typingHandler(event, index)} >
              {person.child}
            </Person>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>{this.state.header_text}</h1>
        <button
          style={buttonStyle}
          onClick={this.toggleVisibilityHandler}
        >Switch Visibility
        </button>
        {persons}
      </div >
    );
  }
}

export default App;
