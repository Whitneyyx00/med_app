import React from 'react';
import  './ReportsLayout.css';
import doctorsData from '../../doctors.json';

const ReportsLayout = () => {
    const reportPath = process.env.PUBLIC_URL + '/patient_report.pdf';

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
                        <td><a href={reportPath} target='_blank' rel='noopener noreferrer' className='view-button'>View Report</a></td>
                        <td><a href={reportPath} download='patient_report.pdf' className='download-button'>Download Report</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
   );
};

export default ReportsLayout;