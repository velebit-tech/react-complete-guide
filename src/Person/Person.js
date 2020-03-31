import React from 'react';

const person = props => {
  return (
    <div>
      <p>I am {props.name} and I have {props.weight} kgs.</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;