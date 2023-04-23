import React from 'react';
import './Button.css';
function Button(props) {
  const buttonStyle = {
    backgroundColor: props.color,
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
  };

  return (
   <> 
   <button style={buttonStyle}>
      {props.label}
    </button>

   </>
  );
}

export default Button;
