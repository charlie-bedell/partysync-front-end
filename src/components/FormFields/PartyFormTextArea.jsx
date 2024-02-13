// import './PartyFormTextArea.css';

const PartyFormTextArea = (props) => {
	
	const { labelName, placeholderText } = props;
  const classes = 'focus:outline-none resize-y bg-light-grey placeholder-grey pl-2 py-2 w-full min-h-5';
	return (
		<textarea
      placeholder={placeholderText}
      className={classes}
    >      
		</textarea>
	);
};

export default PartyFormTextArea;
