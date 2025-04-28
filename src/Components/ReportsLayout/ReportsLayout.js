import React from 'react';
import  './ReportsLayout.css';
import doctorsData from '../../doctors.json';

const ReportsLayout = () => {
    const reports = doctorsData.map(doctor => ({
        id: doctor.id,
        doctorName: doctor.name,
        doctorSpeciality: doctor.speciality,
        viewLink: '#',
        downloadLink: '',
   }));

   return (
    <div className='reports-layout-container'>
        <h1>Reports</h1>
        <table className='reports-table'>
            <thead>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>View Report</th>
                    <th>Download Report</th>
                </tr>
            </thead>
            <tbody>
                {reports.map((report) => (
                    <tr key={report.id}>
                        <td>{report.id}</td>
                        <td>{report.doctorName}</td>
                        <td>{report.doctorSpeciality}</td>
                        <td><a href={report.viewLink} className='view-button'>View Report</a></td>
                        <td><a href={report.downloadLink} className='download-button'>Download Report</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
   );
};

export default ReportsLayout;