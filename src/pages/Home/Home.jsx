import './Home.css';
import { useState, useEffect } from 'react';
import Image from '../../components/HomeImage/HomeImage';
import PurpleNavBar from '../../components/PurpleNavbar/PurpleNavbar';
import PartyDetail from '../../components/PartyDetail/PartyDetail';


const Home = (props) => {
	
	// const {  } = props;

  const [partyFilter, setPartyFilter] = useState('upcoming');
  const [allMyParties, setAllMyParties] = useState(null);

    useEffect(() => {
	  // query all parties on a specific user
    // asign to allMyParties
    }, []);

  const changePartyFilter = (filter) => {
    setPartyFilter(filter);
  };

	return (
		<div>
			<PurpleNavBar handleChange={changePartyFilter}/>
			<Image />
		</div>
	);
};

export default Home;
