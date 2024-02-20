import React from 'react';

const OpenUrlButton = ({ url, name }) => {
  const handleClick = () => {
    console.log(`Button ${name} clicked`);
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick} style={{
      fontSize: '20px', 
      padding: '10px 20px', 
      margin: '0 10px',
      backgroundColor: '#3BDAF2', /* Green */
      border: 'none',
      color: 'white',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      borderRadius: '12px',
      transitionDuration: '0.4s',
      ':hover': {
        backgroundColor: '#45a049'
      }
    }}>
      {name}
    </button>
  );
};

export default OpenUrlButton;