
import Header from '../../components/Header/Header'
import Image  from '../../components/HomeImage/HomeImage'
import PartyForm from '../../components/PartyForm/PartyForm'
import api from '../../services/apiConfig'

import { getInvites } from '../../services/invites'
import { useState, useEffect } from 'react'



const MyInvites = () => {
  const [invites, setInvites] = useState(null);

  useEffect(()=>{
    const fetchInvites= async () =>{
      try {
        const response = await getInvites();
        setInvites(response[0]);
        console.log(`response to get invites, `, invites.party)
      } catch (error){
        console.log(`failed to get invites, `, error)
      }
    }
    fetchInvites();
  }, [])

  return (
    <div>
      
      <Header text={invites ? `${invites.invitee.user.username}'s Invites` : 'My Invites'} />

      {/* {invites.map((invite) =>
          <PartyForm key={party.id} isReadOnly={true} partyDetails={invite.party} read/>
      )} */}
      

      {/* <RespondToInvite /> */}
      <Image />
      
    </div>
  );
};

export default MyInvites