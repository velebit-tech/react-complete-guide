import React from 'react';
import Person from './Person/Person';

const persons = props => {
  return (
    props.persons.map((person, index) => {
      return <Person
        click={() => props.clicked(index)}
        name={person.name}
        weight={person.weight}
        child={person.child}
        key={person.id}
        typing={(event) => props.typed(event, index)}
        >
        {person.child}
      </Person>
    })
  );
}

export default persons;