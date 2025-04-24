import React, { useState, useEffect } from 'react';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard';
import doctorsData from '../doctors.json';
import './BookingConsultation.css';

function BookingConsultation() {
    const [searchResults, setSearchResults] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLocalDoctors = () => {
            try {
                // Simulate loading
                setTimeout(() => {
                    setDoctors(doctorsData);
                    setLoading(false);
                }, 500);
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
        <div className='booking-consultation-container'>
            <h1>Book a Consultation</h1>
            <FindDoctorSearch onSearch={handleSearch} />

            {loading && <p>Loading doctors...</p>}
            {error && <p>Error: {error.message}</p>}

            <div className='search-results'>
                {searchResults.length > 0 ? (
                    searchResults.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))
                ) : (
                    <p>No doctors found for that speciality.</p>
                )}
            </div>
        </div>
    );
}

export default BookingConsultation;