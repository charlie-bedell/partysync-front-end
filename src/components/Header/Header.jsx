import React from 'react';
import './Header.css'


const Header = (props) => {
 const {text} = props
  return (
    <div className="header"> 
      {text}
    </div>
  );
};

export default Header;
