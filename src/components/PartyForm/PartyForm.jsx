import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SquareBlueButton from "../Buttons/SquareBlueButton";
import PartyFormField from "../FormFields/PartyFormField";
import PartyFormTextArea from "../FormFields/PartyFormTextArea";

const PartyForm = (props) => {
	const { handleClick, isReadOnly, partyDetails } = props;

  let [partyFormData, setPartyFormData] = useState({name: '',
                                                    location: '',
                                                    startDate: '',
                                                    endDate: '',
                                                    description: '',
                                                    invite: ''});

  useEffect(() => {
    if (isReadOnly) {
      setPartyFormData(partyDetails);
    }
  }, [isReadOnly, partyDetails]);

  const updatePartyFormData = (field, newData) => {
    setPartyFormData(
      {
        ...partyFormData,
        [field]: newData,
      }
    );
  };

	return (
    <div className='m-2 p-2 bg-white'>
      { isReadOnly && <h2 className='m-2'>{partyDetails.name}</h2>}
		  <form className='flex flex-col gap-4'>
        { !isReadOnly &&
          <PartyFormField
            isReadOnly={isReadOnly}
            labelName='name'
            handleChange={updatePartyFormData}
            fieldValue={partyFormData.name}
            placeholderText='Party Name'
          /> }
			  <PartyFormField
          isReadOnly={isReadOnly}
          labelName="location"
          handleChange={updatePartyFormData}
          fieldValue={partyFormData.location}
          placeholderText="Location"
        />
        <div className='flex gap-5'>
          <DatePicker
            readOnly={isReadOnly}
            placeholderText='Start Date'
            selected={partyFormData.startDate}
            onChange={date => updatePartyFormData('startDate', date)}
            className='focus:outline-none bg-light-grey placeholder-grey pl-2 py-2 w-full'
          />
          <DatePicker
            placeholderText='End Date'
            selected={partyFormData.endDate}
            onChange={date => updatePartyFormData('endDate', date)}
            className='focus:outline-none bg-light-grey placeholder-grey pl-2 py-2 w-full'
          />
    </div>
        <PartyFormTextArea
          isReadOnly={isReadOnly}
          labelName='description'
          handleChange={updatePartyFormData}
          fieldValue={partyFormData.description}
          placeholderText="Info"
        />
        <PartyFormField
          isReadOnly={isReadOnly}
          labelName="invite"
          handleChange={updatePartyFormData}
          fieldValue={partyFormData.invite}
          placeholderText="Invite Friends!"
        />
        {!isReadOnly && (
          <SquareBlueButton
            disabled={isReadOnly}
            handleClick={handleClick} text="Submit">
          </SquareBlueButton>
        )}
		  </form>
    </div>
	);
};

PartyForm.defaultProps = {
  isReadOnly: false,
  partyDetails: {},
};

export default PartyForm;
/* <PartyFormField labelName="description" placeholderText="Info"/> */
