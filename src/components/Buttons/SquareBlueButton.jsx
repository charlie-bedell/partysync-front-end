// import './SquareBlueButton.css';

const SquareBlueButton = (props) => {
	
	const { handleClick, text } = props;

	return (
		<button onClick={handleClick} className="bg-blue text-white h-12 mx-2">
			<h2>{text}</h2>
		</button>
	);
};

export default SquareBlueButton;
