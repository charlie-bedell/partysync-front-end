
import Header from '../../components/Header/Header'
import Image  from '../../components/HomeImage/HomeImage'
import PartyForm from '../../components/PartyForm/PartyForm'
import { getInvites } from '../../services/invites'
import { useState, useEffect } from 'react'



const MyInvites = () => {
  const [invites, setInvites] = useState([]);

  useEffect(()=>{
    const fetchInvites= async () =>{
      try {
        const response = await getInvites();
        setInvites(response);
        console.log(`invites`, invites)
      } catch (error){
        console.log(`failed to get invites, `, error)
      }
    }
    fetchInvites();
    
  }, [])


  return (
    <div>
      <Header text= 'My Invites' />
      {/* <Header text={invites ? `${invites[0].invitee.user.username}'s Invites` : 'My Invites'} /> */}

      {invites.length > 0 ? (
        invites.map((invite) =>
          <PartyForm key={invite.id} isReadOnly={true} partyDetails={invite.party} isInvite={true} inviteId={invite.id}/>
        )
      ) : (
        <p>No invites found.</p> 
      )}
      
      
      <Image />
      
    </div>
  );
}

export default MyInvites;