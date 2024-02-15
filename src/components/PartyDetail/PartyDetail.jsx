import PartyForm from "../PartyForm/PartyForm";

const PartyDetail = (props) => {

	const { partyDetails } = props;
  const partyInformation = {
    name: partyDetails.party_name,
    location: partyDetails.location,
    startDate: new Date(partyDetails.start_time),
    endDate: partyDetails.end_time,
    description: partyDetails.description,
  };


	return (
		<div>
			<PartyForm
        isReadOnly={true}
        partyDetails={partyInformation}
      />
		</div>
	);
};

export default PartyDetail;
