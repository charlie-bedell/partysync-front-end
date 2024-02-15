// import './PartyForm.css';

const PartyFormField = (props) => {
	
	const { labelName, placeholderText, isReadOnly, handleChange, fieldValue} = props;
  const classes = 'focus:outline-none bg-light-grey placeholder-grey pl-2 py-2 w-full min-h-5';
  
	return (
		<>
      <label name={labelName}>
		    <input readOnly={isReadOnly}
               className={classes}
               placeholder={placeholderText}
               value={fieldValue}
               name={labelName}
               onChange={(e) => {
                 handleChange(labelName, e.target.value);
               }}
        />
      </label>
		</>
	);
};

PartyFormField.defaultProps = {
  isReadOnly: false
};

export default PartyFormField;
