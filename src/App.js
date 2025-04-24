import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorPage from './pages/FindDoctorPage';
import BookingConsultation from './Components/BookingConsultation';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path='/find-a-doctor' element={<FindDoctorPage />} />
        <Route path='/book-consultation' element={<BookingConsultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;