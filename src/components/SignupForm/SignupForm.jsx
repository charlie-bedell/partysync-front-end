// import './SignupForm.css';
import LoginFormField from "../FormFields/LoginFormField";
import TextOnlyButton from "../Buttons/TextOnlyButton";

const SignupForm = (props) => {
	
	const { handleClick } = props;

	return (
    <form>
		  <div className='flex flex-col items-end justify-center gap-4'>
			  <LoginFormField labelText="Email" TWFieldWidth='w-3/6' />
        <LoginFormField labelText="First Name" TWFieldWidth='w-3/6'/>
        <LoginFormField labelText="Last Name" TWFieldWidth='w-4/6'/>
        <LoginFormField labelText="Password" TWFieldWidth='w-5/6'/>
        <LoginFormField labelText="Retype Password" TWFieldWidth='w-5/6'/>
        <TextOnlyButton handleClick={handleClick} text="Sign Up"/>
		  </div>
    </form>
	);
};

export default SignupForm;
