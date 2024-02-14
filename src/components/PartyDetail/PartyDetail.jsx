import PartyForm from "../PartyForm/PartyForm";

const PartyDetail = (props) => {
	
	const { partyDetails } = props;
  

	return (
		<div>
			<PartyForm
        isReadOnly={true}
        partyDetails={partyDetails}
      />
		</div>
	);
};

export default PartyDetail;
