import { Link } from 'react-router-dom';
import './NavBar.css';
const NavBar = (props) => {
	
	// const {  } = props;

	return (
		<header>
			<nav className="font-bold flex item-center">
        <Link to="/home">Home</Link>
        <Link to="/user/login">Login</Link>
        <Link to="/user/signup">Signup</Link>
      </nav>
		</header>
	);
};

export default NavBar;
