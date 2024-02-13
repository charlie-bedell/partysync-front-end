// import './Signup.css';
import Header from '../../components/Header/Header';
import SignupForm from '../../components/SignupForm/SignupForm';
import Image from '../../components/SignupImage/SignupImage';

const Signup = (props) => {
	
	// const {  } = props;

	return (
		<div>
			<Header text="Sign up" />
			<Image />
      <SignupForm />
		</div>
	);
};

export default Signup;
