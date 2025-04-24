import React, { useState, useEffect } from 'react';
import FindDoctorSearch from '../Components/FindDoctorSearch/FindDoctorSearch';
import DoctorCard from '../Components/DoctorCard/DoctorCard';
import doctorsData from '../doctors.json';
import './FindDoctorPage.css';

function FindDoctorPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const loadLocalDoctors = () => {
            try {
                // Simulate loading
                setTimeout(() => {
                    setDoctors(doctorsData);
                    setLoading(false);
                }, 500); // Simulate a delay of 0.5 seconds
            } catch (e) {
                setError(e);
                console.error("Could not load doctors from local file:", e);
                setLoading(false);
            }
        };

        loadLocalDoctors();
    }, []);

    const handleSearch = (speciality) => {
        const results = doctors.filter(doctor =>
            doctor.speciality.toLowerCase().includes(speciality.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div className='find-doctor-page'>
            <h1>Find A Doctor</h1>
            <FindDoctorSearch onSearch={handleSearch} />

            {loading && <p>Loading doctors...</p>}
            {error && <p>Error: {error.message}</p>}

            <div className='search-results-container'>
                {searchResults.length > 0 ? (
                    searchResults.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))
                ) : (
                    <p className='no-doctors-found'>No doctors found for that speciality.</p>
                )}
            </div>
        </div>
    );
}

export default FindDoctorPage;