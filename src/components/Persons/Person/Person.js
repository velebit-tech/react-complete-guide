import React from 'react';
import './Person.css';

const person = props => {
  return (
    <div className="Person">
      <p>I am {props.name} and I have {props.weight} kgs.</p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" value={props.child} onChange={props.typing} /> 
    </div>
  )
}

export default person;