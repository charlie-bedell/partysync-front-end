// NavBar.jsx
import { Link } from 'react-router-dom';
import PurpleNavButton from '../PurpleNavButton/PurpleNavButton';

const PurpleNavBar = (props) => {
  return (
    <footer style={{backgroundColor: '#0b4cff'}}> 
      <nav className="flex center justify-around py-2">
      <PurpleNavButton text="Upcoming" onClick={() => {/* Handle click */}} />
      <PurpleNavButton text="Hosting" onClick={() => {/* Handle click */}} />
      <PurpleNavButton text="Attended" onClick={() => {/* Handle click */}} />  
      </nav>
    </footer>
  );
};

export default PurpleNavBar;
