import React, { useState } from "react";
import SquareBlueButton from "../Buttons/SquareBlueButton";


const RespondToInvite = (props) => {
  
  const handleChange = (response) => {
    console.log(`User responded with: ${response}`);
    // Here you would typically send the response back to your server via an API call
    // For example:
    // api.post('/respond-to-invite', { response })
    //   .then(...)
    //   .catch(...);
  };

  return (
    <div className="flex flex-col items-center">
      <h1>How would you like to respond to the invite?</h1>
      <div className="flex justify-center my-4">
        <SquareBlueButton handleClick={() => handleChange('Yes')} text="Yes" />
        <SquareBlueButton handleClick={() => handleChange('No')} text="No" />
        <SquareBlueButton handleClick={() => handleChange('Maybe')} text="Maybe" />
      </div>
    </div>
  );
};

export default RespondToInvite;