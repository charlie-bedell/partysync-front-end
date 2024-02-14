import React,{ useState } from "react"
import SquareBlueButton from "../Buttons/SquareBlueButton";
import { inviteStatus } from "../../services/invites";


const RespondToInvite = (props) => {
  const { invite_id } = invite_id

  // export const inviteStatus = async (id,inviteData) => {
  //   try {
  //     const response = await api.post(`/profile/invite/${id}/response/`, inviteData);
  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };const { firstName, lastName, city } = person;
  
  const handleChange = (response) => {
    console.log(`User responded with: ${response}`);
    inviteStatus(invite_id, response)
  }
const additionalClasses = ""

  return (
    <div className="flex flex-col items-center p-4 border-2 border-white bg-white ">
      
    <h1 className="mb-4">How would you like to respond to the invite?</h1>
      <div className="flex flex-1 justify-center my-4">
        <div className="">
        <SquareBlueButton handleClick={() => handleChange('Yes')} additionalClasses={additionalClasses} text="Yes" />
        </div>
        <SquareBlueButton handleClick={() => handleChange('No')} text="No" />
        <SquareBlueButton handleClick={() => handleChange('Maybe')} text="Maybe" />
      </div>
    </div>
  );
};

export default RespondToInvite;