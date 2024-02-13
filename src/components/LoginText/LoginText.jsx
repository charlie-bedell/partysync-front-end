import React from 'react';

const styles = {
  Text: {
    color: '#ff9500',
    fontSize: '34px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: '42px',
    position: 'absolute',
    right: '52px',
    top: '184px'
  },
};

const defaultProps = {
  text: 'Login',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;