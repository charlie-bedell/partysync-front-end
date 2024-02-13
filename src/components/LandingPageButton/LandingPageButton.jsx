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
    cursor: 'pointer',
    width: '334px',
    height: '49px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: '19px',
    fontFamily: 'Roboto',
    lineHeight: '24px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Roll Out',
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
