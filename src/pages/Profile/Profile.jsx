// import './Profile.css';
import Image from '../../components/HomeImage/HomeImage'
import { getProfile } from '../../services/profile.js'
import { useState, useEffect } from 'react';

const Profile = (props) => {
	const [profileDetails, setProfileDetails] = useState({});

	useEffect(() => {
		const fetchProfiledata = async () => {
			const profiledata = await getProfile();
			setProfileDetails(profiledata);
		};

		fetchProfiledata();
		console.log('profileDetails', profileDetails.user);
	}, []);

	return (
		<div>
			<Image />

			
		</div>
	);
};

export default Profile;
