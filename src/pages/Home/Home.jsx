import './Home.css';
import Header from '../../components/Header/Header'
import Image from '../../components/HomeImage/HomeImage'
import PurpleNavBar from '../../components/PurpleNavbar/PurpleNavbar';


const Home = (props) => {
	
	// const {  } = props;

	return (
		<div>
			<Header text='Home' />
			<PurpleNavBar />
			<Image />
		</div>
	);
};

export default Home;
