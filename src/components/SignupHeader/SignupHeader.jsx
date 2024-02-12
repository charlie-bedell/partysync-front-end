import React from 'react';
import './SignupHeader.css'

const styles = {
  Header: {
    top: '-4px',
    left: '100px',
    width: '526px',
    height: '123px',
    backgroundColor: '#030303',
  },
};

const Header = (props) => {
  return (
    <div style={styles.Header}>
      {props.children}
    </div>
  );
};

export default Header;