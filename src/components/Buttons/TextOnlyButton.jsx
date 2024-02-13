// import './TextOnlyButton.css';

const TextOnlyButton = (props) => {
	
	const { handleClick, text } = props;

	return (
		<button className='m-2' onClick={handleClick}>
			{text}
		</button>
	);
};

export default TextOnlyButton;
