import React, { useEffect, useState } from 'react';
import { API_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
import './ProfileForm.css';

const ProfileForm = ({ onProfileUpdate, userDetails }) => {
    const [updatedDetails, setUpdatedDetails] = useState({ ...userDetails });
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setUpdatedDetails(userDetails);
    }, [userDetails]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('social.')) {
            const socialField = name.split('.')[1];
            setUpdatedDetails(prev => ({
                ...prev,
                social: {
                    ...prev.social,
                    [socialField]: value,
                },
            }));
        } else {
            setUpdatedDetails({
                ...updatedDetails,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const authtoken = sessionStorage.getItem('auth-token');
            const email = sessionStorage.getItem('email');
            if (!authtoken || !email) {
                navigate('/login');
                return;
            }
            const payload = { ...updatedDetails };
            const response = await fetch(`${API_URL}/api/auth/user`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${authtoken}`,
                    'Content-Type': 'application/json',
                    'Email': email,
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                sessionStorage.setItem('name', updatedDetails.name);
                sessionStorage.setItem('phone', updatedDetails.phone);
                sessionStorage.setItem('address', updatedDetails.address);
                setEditMode(false);
                alert('Profile updated successfully!');
                if (onProfileUpdate) {
                    onProfileUpdate(updatedDetails);
                }
                navigate('/');
            } else {
                throw new Error("Failed to update profile");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return  (
        <div className='profile-container'>
                <form onSubmit={handleSubmit} className='profile-form'>
                    <h2>Profile Information</h2>
                    <label htmlFor='name'>
                        Name:
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={updatedDetails.name || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor='phone'>
                        Phone:
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={updatedDetails.phone}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor='email'>
                        Email:
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={updatedDetails.email}
                            disabled
                        />
                    </label>
                    <label htmlFor='address'>
                        Address:
                        <input
                            type='text'
                            id='address'
                            name='address'
                            value={updatedDetails.address}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor='bio'>
                        Bio:
                        <textarea
                            id='bio'
                            name='bio'
                            value={updatedDetails.bio}
                            onChange={handleInputChange}
                        />
                    </label>

                    {/* Social Media Links */}
                    <label>Social Links:</label>
                    <label htmlFor='twitter'>
                        Twitter:
                        <input
                            type='url'
                            id='twitter'
                            name='social.twitter'
                            value={updatedDetails.social?.twitter || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor='linkedin'>
                        LinkedIn:
                        <input
                            type='url'
                            id='linkedin'
                            name='social.linkedin'
                            value={updatedDetails.social?.linkedin || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor='github'>
                        GitHub:
                        <input
                            type='url'
                            id='github'
                            name='social.github'
                            value={updatedDetails.social?.github || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor='avatar'>
                        Avatar URL:
                        <input
                            type='url'
                            id='avatar'
                            name='avatar'
                            value={updatedDetails.avatar || ''}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type='submit'>Save</button>
                </form>
        </div>
    );
};

export default ProfileForm;