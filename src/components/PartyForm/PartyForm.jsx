import SquareBlueButton from "../Buttons/SquareBlueButton";
import PartyFormField from "../FormFields/PartyFormField";
import LoginForm from "../LoginForm/LoginForm";
import LoginFormField from "../FormFields/LoginFormField";

const PartyForm = (props) => {
	
	// const {  } = props;

	return (
    <div>
      <h2>Party Name</h2>
		  <form className='flex flex-col gap-4'>
        <div className='flex flex-row gap-2'>
			    <PartyFormField labelName="location" placeholderText="Location"/>
          <PartyFormField labelName="start-date" placeholderText="Start Date"/>
        </div>
        <div className='flex flex-row gap-2'>
          <PartyFormField labelName="end-date" placeholderText="End Date"/>
          <PartyFormField labelName="description" placeholderText="Info"/>
        </div>
        <PartyFormField labelName="invite" placeholderText="Invite Friends!"/>
        <LoginFormField labelText="Email"/>
        <SquareBlueButton text="Submit"></SquareBlueButton>
		  </form>
    </div>
	);
};

export default PartyForm;
