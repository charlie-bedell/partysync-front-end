// NavBar.jsx
import { Link } from 'react-router-dom';
import PurpleNavButton from '../PurpleNavButton/PurpleNavButton';
import './PurpleNavBar.css'



const PurpleNavBar = (props) => {

  const { handleChange } = props;
  
  return (
    <footer style={{backgroundColor: '#0b4cff'}}> 
      <nav className="flex center justify-around py-2 navBarText">
        <PurpleNavButton text="Upcoming" onClick={() => { handleChange('upcoming'); }} />
        <PurpleNavButton text="Hosting"  onClick={() => { handleChange('hosting'); }} />
        <PurpleNavButton text="Attended" onClick={() => { handleChange('attended'); }} />
      </nav>
    </footer>
  );
};

export default PurpleNavBar;
