// import './LoginForm.css';
import TextOnlyButton from "../Buttons/TextOnlyButton";
import LoginFormField from "../FormFields/LoginFormField";


const LoginForm = (props) => {
	
	const { handleClick } = props;

	return (
		<div className='flex flex-col items-end justify-center gap-4'>
			<LoginFormField labelText="Email" TWFieldWidth='w-4/6' />
      <LoginFormField labelText="Password" TWFieldWidth='w-3/6'/>
      <TextOnlyButton handleClick={handleClick} text="Login"/>
    </div>
	);
};

export default LoginForm;
