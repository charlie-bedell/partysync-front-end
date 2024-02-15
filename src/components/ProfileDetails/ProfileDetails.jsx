import React from 'react';
import './ProfileDetails.css'; 

const ProfileDetails = ({ profile }) => {


    return (
        <div className="profile-details">
            <h2>{profile.first_name} {profile.last_name} </h2>
            <hr style={{ width: '45%', borderColor: 'orange', borderWidth: '1px', marginBottom: '11px' }} />
            <p>Username: {profile.username} </p>
            <p>Email: {profile.email} </p>
           
           
        </div>
    );
};

export default ProfileDetails;
