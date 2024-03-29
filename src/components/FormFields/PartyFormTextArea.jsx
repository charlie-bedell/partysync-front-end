// import './PartyFormTextArea.css';

const PartyFormTextArea = (props) => {
	
	const { labelName, placeholderText, isReadOnly, handleChange, fieldValue } = props;
  const classes = 'focus:outline-none resize-y bg-light-grey placeholder-grey pl-2 py-2 w-full min-h-5';
	return (
		<textarea
      placeholder={placeholderText}
      value={fieldValue}
      name={labelName}
      className={classes}
      readOnly={isReadOnly}
      onChange={(e) => {
        handleChange(labelName, e.target.value);
      }}
    >
		</textarea>
	);
};

PartyFormTextArea.defaultProps = {
  isReadOnly: false
};

export default PartyFormTextArea;
