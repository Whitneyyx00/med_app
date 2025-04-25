import React, { useState, useRef, useEffect } from 'react';
import './FindDoctorSearch.css';

const FindDoctorSearch = ({ onSearch }) => {
    const [speciality, setSpeciality] = useState('');
    const [showSpecialties, setShowSpecialties] = useState(false);
    const searchInputRef = useRef(null);

    // List of specialties
    const specialties = [
        'Dentist',
        'Gynecologist/Obstetrician',
        'General Physician',
        'Cardiologist',
        'Dermatologist',
        'Endocrinologist',
        'Gastroenterologist',
        'Neurologist',
        'Ophthalmologist',
        'Orthopedist',
        'Pediatrician',
        'Psychiatrist',
        'Urologist',
        'Ear-Nose-Throat (ENT) Specialist',
        'Homeopath',
        'Ayurveda Practitioner',
    ];

    // Handle input change
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSpeciality(value);
        onSearch(value);
    };

    // Handle speciality click
    const handleSpecialityClick = (selectedSpeciality) => {
        setSpeciality(selectedSpeciality);
        onSearch(selectedSpeciality);
        setShowSpecialties(false);
    };

    // Handle input focus
    const handleInputFocus = () => {
        setShowSpecialties(true);
    };

    // Handle input blur
    const handleInputBlur = (e) => {
        // Use setTimeout to allow click event on specialties to fire before hiding the list
        setTimeout(() => {
            if (!searchInputRef.current?.contains(document.activeElement)) {
                setShowSpecialties(false);
            }
        }, 100);
    };

    // Handle key press (e.g., pressing Enter to search)
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(speciality);
            setShowSpecialties(false);
        }
    };

    // Close the suggestion box if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
                setShowSpecialties(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='search-container' ref={searchInputRef}>
            <input
                type='text'
                placeholder='Search for a speciality...'
                value={speciality}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onClick={handleKeyPress}
                className='search-input'
            />

            {showSpecialties && (
                <ul className='speciality-list'>
                    {specialties.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSpecialityClick(item)}
                            className='speciality-item'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FindDoctorSearch;