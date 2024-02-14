// import './Profile.css';
import Header from '../../components/Header/Header'
import Image from '../../components/HomeImage/HomeImage'
import { getProfile } from '../../services/profile.js'
import api from '../../services/apiConfig.js';


const Profile = (props) => {
	
	// const {  } = props;

	return (
		<div>
			<Header text='Profile' />
			<Image />
		</div>
	);
};

export default Profile;
