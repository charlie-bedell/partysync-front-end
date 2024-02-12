// import './PartyForm.css';

const PartyFormField = (props) => {
	
	const { labelName, placeholderText } = props;
  const classes = 'focus:outline-none bg-light-grey placeholder-grey pl-2 py-2 w-full';
  
	return (
		<>
      <label name={labelName}>
		    <input className={classes} placeholder={placeholderText} name="my-input"/>
      </label>
		</>
	);
};

export default PartyFormField;
