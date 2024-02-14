import LoginForm from '../../components/LoginForm/LoginForm';
import Image from '../../components/LoginImage/LoginImage';
import Text from '../../components/LoginText/LoginText';
import SquareBlueButton  from '../../components/Buttons/SquareBlueButton';
import { Link } from 'react-router-dom';


const Login = (props) => {
	
	// const {  } = props;

	return (
		<div>
		  <Image />
		  <Text />
      <LoginForm />
	  <Link to="/user/signup">
	  <SquareBlueButton text="Sign Up" />
	  </Link>
		</div>
	);
};

export default Login;
