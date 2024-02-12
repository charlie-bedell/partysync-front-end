// import './PartyForm.css';

const PartyFormField = (props) => {
	
	const { labelName, placeholderText } = props;

	return (
		<>
      <label name={labelName}>
		    <input className='focus:outline-none bg-light-grey placeholder-grey py-1' placeholder={placeholderText} name="my-input"/>
      </label>
		</>
	);
};

export default PartyFormField;
