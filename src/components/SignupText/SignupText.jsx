import React from 'react';
import './SignupText.css'

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: '31px',
  },
};

const defaultProps = {
  text: 'Sign Up',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;

