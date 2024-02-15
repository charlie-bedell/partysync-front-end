import React from 'react';
import './ProfileDetails.css'; 

const ProfileDetails = ({ profile }) => {


    return (
        <div className="profile-details">
            <h2>Username: {profile.username} </h2>
            <p>Email: {profile.email} </p>
            <p>First Name: {profile.first_name} </p>
            <p>Last Name: {profile.last_name} </p>
        </div>
    );
};

export default ProfileDetails;
