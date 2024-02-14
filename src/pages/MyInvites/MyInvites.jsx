
import Header from '../../components/Header/Header'
import Image  from '../../components/HomeImage/HomeImage'
import api from '../../services/apiConfig';
import { getProfile } from '../../services/profile';
import { getInvites } from '../../services/invites';
import { useState, useEffect } from 'react';
import RespondToInvite from '../../components/RespondToInvite/RespondToInvite';

const MyInvites = () => {
  const [invites, setInvites] = useState(null);

  // handle button click  (function that triggers post)
  // add is invitation on party form
  // make yes no maybe radial button Component then tell charlie about it

  useEffect(()=>{
    const fetchInvites= async () =>{
      try {
        const response = await getInvites();
        setInvites(response[0]);
        console.log(`response to get invites, `)
      } catch (error){
        console.log(`failed to get invites, `, error)
      }
    }
    fetchInvites();
  }, [])

  return (
    <div>
      
      <Header text={invites ? `${invites.invitee.user.username}'s Invites` : 'My Invites'} />
      {/* map party invites */}
      <RespondToInvite />
      <Image />
      
    </div>
  );
};

export default MyInvites