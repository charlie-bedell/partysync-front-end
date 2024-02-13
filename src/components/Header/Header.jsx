import React from 'react';

const styles = {
  Header: {
    top: '-4px',
    left: '0',
    width: '100vw',
    height: '123px',
    backgroundColor: '#030303',
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'flex-start', // Align content to the left
    alignItems: 'flex-end', // Align content to the bottom
    fontSize: '24px',
    fontFamily: 'Roboto',
    padding: '0 0 22px 35px', // Add bottom and left padding to position the text
    // Removed paddingTop and paddingRight and replaced with a combined padding
  },
};



const Header = (props) => {
 const {
  text
 } = props
  return (
    <div style={styles.Header}>
      {text}
    </div>
  );
};

export default Header;
