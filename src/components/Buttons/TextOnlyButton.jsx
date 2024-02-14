// import './TextOnlyButton.css';

const TextOnlyButton = (props) => {
	
	const { text } = props;

	return (
		<button className='m-2' type="submit">
			{text}
		</button>
	);
};

export default TextOnlyButton;
