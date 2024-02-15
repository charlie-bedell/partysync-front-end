
import Header from '../../components/Header/Header'
import Image  from '../../components/HomeImage/HomeImage'
import api from '../../services/apiConfig';
import { getProfile } from '../../services/profile';
import { getInvites } from '../../services/invites';
import { useState, useEffect } from 'react';

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
        setInvites(response.data);
        console.log(`end of get invites, `, invites)
      } catch (error){
        console.log(`failed to get invites, `, error)
      }
    }
    fetchInvites();
  }, [])

  return (
    <div>
      
      <Header text={profile ? `${profile.user.username}'s Invites` : 'My Invites'} />
      <Image />
      
    </div>
  );
};

export default MyInvites