// import './Profile.css';
import Image from '../../components/HomeImage/HomeImage'
import { getProfile } from '../../services/profile.js'
import { useState, useEffect } from 'react';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails.jsx';

const Profile = (props) => {
	const [profileDetails, setProfileDetails] = useState({});

	useEffect(() => {
		const fetchProfiledata = async () => {
			try {
				const profiledata = await getProfile(); 
				console.log(profiledata.user); 
				setProfileDetails(profiledata.user); 
			} catch (error) {
				console.error('Error fetching profile data:', error);
			}
		};
	
		fetchProfiledata();
	}, []);
	
	

	return (
		<div className="centered-container">
			<Image />
			<ProfileDetails profile={profileDetails} />
		</div>
	);
};

export default Profile;
