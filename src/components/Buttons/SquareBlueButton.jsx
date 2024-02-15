// import './SquareBlueButton.css';

const SquareBlueButton = (props) => {
	
	const { handleClick, text, additionalClasses } = props;
	let classes = "bg-blue text-white h-12 mx-2 transition duration-150 ease-in-out rounded-lg hover:rounded-full active:border active:border-black " + additionalClasses

	return (
		<button 
			onClick={handleClick} className={classes}  >

			<h2>{text}</h2>
		</button>
	);
};

export default SquareBlueButton;


// original 
// bg-blue text-white h-12 mx-2