import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorPage from './pages/FindDoctorPage';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import Reviews from './pages/Reviews';
import Profile from './pages/Profile';

function App() {
    const [isBooked, setIsBooked] = useState(false);
    const [appointment, setAppointment] = useState(null);
    const [doctor, setDoctor] = useState(null);
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleAppointmentBooked = (doctor, appointment, patientName, phoneNumber) => {
        setIsBooked(true);
        setAppointment(appointment);
        setDoctor(doctor);
        setPatientName(patientName);
        setPhoneNumber(phoneNumber);
    };

    const handleCancelAppointment = () => {
        setIsBooked(false);
        setAppointment(null);
        setDoctor(null);
        setPatientName('');
        setPhoneNumber('');
    };

  return (
    <BrowserRouter>
      <Navbar />
      <Notification
        doctor={doctor}
        appointment={appointment}
        isBooked={isBooked}
        onCancel={handleCancelAppointment}
        patientName={patientName}
        phoneNumber={phoneNumber}
    />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path='/find-a-doctor' element={<FindDoctorPage />} />
        <Route path='/book-consultation' element={<BookingConsultation onAppointmentBooked={handleAppointmentBooked} />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;