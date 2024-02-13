import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SquareBlueButton from "../Buttons/SquareBlueButton";
import PartyFormField from "../FormFields/PartyFormField";
import PartyFormTextArea from "../FormFields/PartyFormTextArea";
const PartyForm = (props) => {
	const { handleClick } = props;

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

	return (
    <div className='m-2 p-2 bg-white'>
      <h2>Party Name</h2>
		  <form className='flex flex-col gap-4'>
			  <PartyFormField labelName="location" placeholderText="Location"/>
        <div className='flex gap-5'>
          <DatePicker
            placeholderText='Start Date'
            selected={selectedStartDate}
            onChange={date => setSelectedStartDate(date)}
            className='focus:outline-none bg-light-grey placeholder-grey pl-2 py-2 w-full'
          />
          <DatePicker
            placeholderText='End Date'
            selected={selectedEndDate}
            onChange={date => setSelectedEndDate(date)}
            className='focus:outline-none bg-light-grey placeholder-grey pl-2 py-2 w-full'
          />
    </div>
        <PartyFormTextArea labelName='description' placeholderText="Info"/>
        <PartyFormField labelName="invite" placeholderText="Invite Friends!"/>
        <SquareBlueButton handleClick={handleClick} text="Submit"></SquareBlueButton>
		  </form>
    </div>
	);
};

export default PartyForm;
/* <PartyFormField labelName="description" placeholderText="Info"/> */
