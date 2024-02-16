import './Home.css';
import { useState, useEffect } from 'react';
import Image from '../../components/HomeImage/HomeImage';
import PurpleNavBar from '../../components/PurpleNavbar/PurpleNavbar';
import PartyDetail from '../../components/PartyDetail/PartyDetail';
import { getHostedParties, getParties, getParty } from '../../services/party';
import { getInvites } from '../../services/invites';
import { getProfile } from '../../services/profile';
import HorizontalDivider from '../../components/HorizontalDivider/HorizontalDivider';


const Home = (props) => {
	
	// const {  } = props;

  const [partyFilter, setPartyFilter] = useState('upcoming');
  const [allMyParties, setAllMyParties] = useState(null);
  const [userId, setUserId] = useState(null);

  const filterConditions = {
    'upcoming': (party) => {
      let today = new Date();
      today.setHours(23, 59, 0, 0);
      return (today < new Date(party.party.start_time) && (party.party.host.id !== userId));
    },
    'attended': (party) => {
      let today = new Date();
      return (today > (party.party.end_time ? new Date(party.party.end_time) : new Date(party.party.start_time)));
    },
    'hosting': (party) => { 
      return ((userId == party.party.host.id) && !filterConditions.attended(party));
    },
  };

    useEffect(() => {
	    const allParties = async () => {
        // get parties that you're invited to
        let invited_parties = await getInvites();
        // get parties that you are hosting
        let hosted_parties = await getHostedParties();
        hosted_parties = hosted_parties.map((party) => {return {party: party};});
        let allParties = Array.from(invited_parties).concat(hosted_parties);
        allParties = allParties.filter((party) => {return filterConditions[`${partyFilter}`](party);});
        console.log('after filter: ', allParties);
        setAllMyParties([
         ...allParties
        ]);
      };
      const getUserId = async () => {
        const profileInfo = await getProfile();
        setUserId(profileInfo.id);
      };
      getUserId();
      allParties();
    }, [partyFilter]);

  const changePartyFilter = (filter) => {
    setPartyFilter(filter);
  };

	return (
		<div>
			<PurpleNavBar handleChange={changePartyFilter}/>
      <HorizontalDivider />
      {allMyParties?.map((party, idx) => {
        return <PartyDetail key = {idx} partyDetails={party.party}/>;
      })}
			<Image />
		</div>
	);
};

export default Home;
