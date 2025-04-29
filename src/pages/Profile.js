import React, { useState } from 'react';
import ProfileForm from '../Components/ProfileForm/ProfileForm';
import ProfileCard from '../Components/ProfileCard/ProfileCard';

const Profile = () => {
    const [userDetails, setUserDetails] = useState({
        name: sessionStorage.getItem('name') || '',
        phone: sessionStorage.getItem('phone') || '',
        email: sessionStorage.getItem('email') || '',
        address: sessionStorage.getItem('address') || '',
        bio: '',
        social: {
            twitter: '',
            linkedin: '',
            github: '',
        },
        avatar: '',
    });

    const [editMode, setEditMode] = useState(false);

    const handleProfileUpdate = (updatedProfile) => {
        // Update the userDetails state with the updated profile information
        setUserDetails(updatedProfile);
        setEditMode(false);
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    return (
        <div className='profile-container'>
            <ProfileCard
                userDetails={userDetails}
                onEdit={handleEditClick}
            />
            {editMode && (
                <div className='profile-container'>
                    <ProfileForm
                        userDetails={userDetails}
                        onProfileUpdate={handleProfileUpdate}
                    />ProfileUpdate={}
                </div>
            )}
        </div>
    );
};

export default Profile;