import React from 'react';
import './PurpleNavButton.css'; // Import the CSS file

const PurpleNavButton = ({ text, onClick }) => (
  <button className="purple-nav-button" onClick={onClick}>
    {text}
  </button>
);

export default PurpleNavButton;

