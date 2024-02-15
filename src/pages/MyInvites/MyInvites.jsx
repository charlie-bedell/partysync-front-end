
import Header from '../../components/Header/Header'
import Image  from '../../components/HomeImage/HomeImage'
import PartyForm from '../../components/PartyForm/PartyForm'
import api from '../../services/apiConfig'
import RespondToInvite from '../../components/RespondToInvite/RespondToInvite'
import { getInvites } from '../../services/invites'
import { useState, useEffect } from 'react'



const MyInvites = () => {
  const [profile, setProfile] = useState(null);
  const [invites, setInvites] = useState(null);

  useEffect(() => {
    
    const fetchProfile = async () => {
      try {
        const response = await getProfile(); 
        setProfile(response.data); 
        console.log('end of grab profile,', profile)
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []); 

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
};

export default MyInvites