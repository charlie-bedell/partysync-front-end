import React, { useState } from "react";
import InviteButton from "../Buttons/InviteButton";
import { inviteStatus, deleteInvite } from "../../services/invites";

const RespondToInvite = ({ invite_id }) => {
  const [selectedResponse, setSelectedResponse] = useState('');

  const handleChange = (response) => {
    console.log(`User responded with: ${response}`);
    setSelectedResponse(response); 
    inviteStatus(invite_id, response);
  };

  const handleClick = (invite_id) =>{
    deleteInvite(invite_id)
  }

  const responses = ['Yes', 'No', 'Maybe'];

  return (
    <div className="flex flex-col items-center p-4 border-2 border-white bg-white">
      <h1 className="mb-4">How would you like to respond to the invite?</h1>
      <div className="flex justify-center my-4 gap-2">
        {responses.map((response) => (
          <InviteButton
            key={response}
            handleClick={(e) => {
              e.preventDefault();
              if (!selectedResponse) { 
                handleChange(response);
              }
            }}
            text={response}
            additionalClasses={`px-5 ${selectedResponse === response ? 'border-black' : ''}`} // Add border-black class if this button was clicked
            disabled={selectedResponse !== '' && selectedResponse !== response} // Disable other buttons
          />
          
        ))}
        <a href="#" onClick={handleClick} className="mt-4 text-blue-600 hover:text-blue-800 visited:text-purple-600">
      Remove Invite
    </a>
      </div>
    </div>
  );
};

export default RespondToInvite;
