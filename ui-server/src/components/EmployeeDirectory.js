import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeDetails from './EmployeeDetails';
import EmployeeUpdate from './EmployeeUpdate';

const EmployeeDirectory = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/create" element={<EmployeeCreate />} />
        <Route path="/details/:id" element={<EmployeeDetails />} />
        <Route path="/update/:id" element={<EmployeeUpdate />} />
      </Routes>
    </Router>
  );
};

export default EmployeeDirectory;
