import SquareBlueButton from "../Buttons/SquareBlueButton";
import PartyFormField from "../FormFields/PartyFormField";
import LoginForm from "../LoginForm/LoginForm";

import LoginFormField from "../FormFields/LoginFormField";

const PartyForm = (props) => {
	
	// const {  } = props;

	return (
    <div className='m-2 p-2 bg-white'>
      <h2>Party Name</h2>
		  <form className='flex flex-col gap-4'>
			    <PartyFormField labelName="location" placeholderText="Location"/>
        <div className='flex gap-5'>
          <PartyFormField labelName="start-date" placeholderText="Start Date"/>
          <PartyFormField labelName="end-date" placeholderText="End Date"/>
        </div>
        <PartyFormField labelName="description" placeholderText="Info"/>
        <PartyFormField labelName="invite" placeholderText="Invite Friends!"/>
        <SquareBlueButton text="Submit"></SquareBlueButton>
        <LoginFormField labelText="Email"/>
        <LoginFormField labelText="Password"/>
		  </form>
    </div>
	);
};

export default PartyForm;
