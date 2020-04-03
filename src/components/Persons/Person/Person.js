import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import './Person.css';

const person = props => {
  return (
    <Auxiliary>
      <p>I am {props.name} and I have {props.weight} kgs.</p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" value={props.child} onChange={props.typing} />
    </Auxiliary>
  )
}

export default person;