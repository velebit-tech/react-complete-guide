import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'asdgasdg', name: 'Mario', weight: 75, child: 'default text' },
      { id: 'dfhsbvbx', name: 'Josso', weight: 99, child: 'default text' },
      { id: 'asfdasef', name: 'Karlo', weight: 80, child: 'default text' }
    ],
    listVisibility: false
  }

  typingHandler = (event, index) => {
    const person = {
      ...this.state.persons[index]
    }

    person.child = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  toggleVisibilityHandler = () => {
    let visibility = this.state.listVisibility;
    this.setState({ listVisibility: !visibility });
  }

  render() {
    let persons = null;
    if (this.state.listVisibility) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        typed={this.typingHandler}
      />;
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.title}
          visibility={this.state.listVisibility}
          toggleVisibility={this.toggleVisibilityHandler}
        />
        {persons}
      </div >
    );
  }
}

export default App;
