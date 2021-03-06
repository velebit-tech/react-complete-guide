import React, { useEffect } from 'react';

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect 1');
  });

  useEffect(() => {
    console.log('[Cockpit.js] useEffect 2');
  }, []);

  const buttonStyle = {
    fontSize: '16px',
    backgroundColor: '#ff4d4d',
    border: '2px solid gray',
    width: '350px',
    height: '50px'
  };

  if (props.visibility) {
    buttonStyle.backgroundColor = 'lightgreen';
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <button
        style={buttonStyle}
        onClick={props.toggleVisibility}
      >Switch Visibility
      </button>
    </div>
  );
}

export default cockpit;