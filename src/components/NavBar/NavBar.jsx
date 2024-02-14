import { Link } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';

const NavBar = (props) => {

	return (
		<footer className='bg-black'>
      <nav className="flex center justify-around py-2">
        <Link to="/home">
          <NavButton text="Home"/>
        </Link>
        <Link to="/myinvites">
          <NavButton text="My Invites"/>
        </Link>
        <Link to="/newparty">
          <NavButton text="New"/>
        </Link>
        <Link to="/user/profile">
          <NavButton text="Profile"/>
        </Link>
      </nav>
		</footer>
	);
};

export default NavBar;
