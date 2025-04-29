import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ userDetails, onEdit }) => {
    return (
        <div className='profile-card'>
            <div className='profile-card-header'>
                {userDetails.avatar ? (
                    <img src={userDetails.avatar} alt='User Avatar' className='profile-avatar' />
                ) : (
                    <div className='profile-avatar-placeholder'>
                        {userDetails.name ? userDetails.name[0].toUpperCase() : '?'}
                    </div>
                )}
                <h1 className='profile-name'>{userDetails.name || 'Unknown'}</h1>
            </div>

            <div className='profile-details'>
                <p>
                    <strong>Email:</strong> {userDetails.email}
                </p>
                <p>
                    <strong>Phone:</strong> {userDetails.phone || 'N/A'}
                </p>
                <p>
                    <strong>Address:</strong> {userDetails.address || 'N/A'}
                </p>
                <p>
                    <strong>Bio:</strong> {userDetails.bio || 'No bio available.'}
                </p>
            </div>

            {userDetails.social && (
                <div className='social-links'>
                    {userDetails.social.twitter && (
                        <a href={userDetails.social.twitter} target='_blank' rel='noopener noreferrer'>
                            Twitter
                        </a>
                    )}
                    {userDetails.social.linkedin && (
                        <a href={userDetails.social.linkedin} target='_blank' rel='noopener noreferrer'>
                            LinkedIn
                        </a>
                    )}
                    {userDetails.social.github && (
                        <a href={userDetails.social.github} target='_blank' rel='noopener noreferrer'>
                            GitHub
                        </a>
                    )}
                    {/* Add more social media links as needed */}
                </div>
            )}
            <button onClick={onEdit} className='edit-button'>Edit</button>
        </div>
    );
};

export default ProfileCard;