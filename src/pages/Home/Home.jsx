import { useState, useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Image from '../../components/HomeImage/HomeImage';
import PurpleNavBar from '../../components/PurpleNavbar/PurpleNavbar';
import PartyDetail from '../../components/PartyDetail/PartyDetail';



const Home = (props) => {
	
	// const {  } = props;
  const [partyFilter, setPartyFilter] = useState('upcoming');
  const [allMyParties, setAllMyParties] = useState(null);

  const deets = {name: 'ere',
                 location: 'ijgaokdgj',
                 startDate: '2024/02/01',
                 endDate: '2024/02/05',
                 description: 'yaya',
                 invite: 'people'};

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
      <PartyDetail partyDetails={deets}/>
      <PartyDetail partyDetails={deets}/>
      <PartyDetail partyDetails={deets}/>
      <PartyDetail partyDetails={deets}/>
		</div>
	);
};

export default Home;
