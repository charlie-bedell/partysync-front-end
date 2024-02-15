import React,{ useState } from "react"
import SquareBlueButton from "../Buttons/SquareBlueButton";
import { inviteStatus } from "../../services/invites";


const RespondToInvite = (props) => {
  const { invite_id } = props
  
  const handleChange = (response) => {
    console.log(`User responded with: ${response}`);
    inviteStatus(invite_id, response)
  }
 const additionalClasses = "px-5"

  return (
    <div className="flex flex-col items-center p-4 border-2 border-white bg-white ">
      
    <h1 className="mb-4">How would you like to respond to the invite?</h1>
      <div className="flex flex-1 justify-center my-4">
        <div className="">
        <SquareBlueButton handleClick={(e) => {
          e.preventDefault()
          handleChange('Yes');
        }
        } additionalClasses={additionalClasses} text="Yes" />
        </div>
        <SquareBlueButton handleClick={(e) => {
        
          e.preventDefault()
          handleChange('No');
        }  
        }  additionalClasses={additionalClasses}  text="No" />
        <SquareBlueButton handleClick={(e) => {
        
        e.preventDefault()
        handleChange('Maybe');
      }  
      }  additionalClasses={additionalClasses}  text="Maybe" />
      </div>
    </div>
  );
};

export default RespondToInvite;