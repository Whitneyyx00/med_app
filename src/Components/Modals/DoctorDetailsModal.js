import React from 'react';

function DoctorDetailsModal({ doctorName, onClose, isOpen }) {
    if (!isOpen) return null;

    return (
        <div className='modal' id='doctorDetailsModal'>
            <div className='modal-content'>
                <span className='close' onClick={onClose}>
                    &times;
                </span>
                <h2>{doctorName}</h2>
                <div id='doctorDetailsContent'>
                    {/* content will be dynamically loaded here based on the doctor */}
                </div>
                <button type='button' className='book-appointment-button' onClick={() => alert(`Book Appointment with ${doctorName}`)}>
                    Book Appointment
                </button>
            </div>
        </div>
    );
}

export default DoctorDetailsModal;