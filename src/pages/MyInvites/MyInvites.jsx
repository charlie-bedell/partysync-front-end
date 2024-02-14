
import Header from '../../components/Header/Header'
import Image  from '../../components/HomeImage/HomeImage'
import api from '../../services/apiConfig';
import { getProfile } from '../../services/profile';
import { useState, useEffect } from 'react';

const MyInvites = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    
    const fetchProfile = async () => {
      try {
        const response = await getProfile(); 
        setProfile(response.data); 
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []); 

  return (
    <div>
      
      <Header text={profile ? `${profile.user.username}'s Invites` : 'My Invites'} />
      <Image />
      
    </div>
  );
};

export default MyInvites