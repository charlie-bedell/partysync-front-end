import { Link } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';

const NavBar = (props) => {

	return (
		<header>
      <nav className="flex center">
        <Link to="/home">
          <NavButton text="Home"/>
        </Link>
        <Link to="/messages">
          <NavButton text="Messages"/>
        </Link>
        <Link to="/newparty">
          <NavButton text="New"/>
        </Link>
        <Link to="/profile">
          <NavButton text="Profile"/>
        </Link>    
      </nav>
		</header>
	);
};

export default NavBar;
