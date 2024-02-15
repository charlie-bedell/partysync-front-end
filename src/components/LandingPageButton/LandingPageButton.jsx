import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh', 
    width: '100vw', 
    position: 'absolute',
    top: '116px', /* Adjust the value as needed */
    left: 0,
  },
  button: {
    position: 'fixed',
    cursor: 'pointer',
    width: '120px',
    height: '49px',
    padding: '0px 8px',
    boxSizing: 'border-box',
    borderRadius: '11px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: '19px',
    fontFamily: "Fredoka sans-serif",
    lineHeight: '24px',
    outline: 'none',
    border: '1px solid white',
    marginLeft: '-200px',
    marginTop: '-582px',
    letterSpacing: '0.5px'
  },
};

const defaultProps = {
  label: 'Roll Out ',
};

const Button = (props) => {
const navigate = useNavigate();

const handleClick = () => {
    navigate('/user/login'); 
  };

  return (
    <div style={styles.container}> 
      <button style={styles.button} onClick={handleClick}>
        {props.label ?? defaultProps.label}
      </button>
    </div>
  );
};

export default Button;


