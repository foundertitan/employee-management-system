import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDirectory from './components/EmployeeDirectory';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeDetails from './components/EmployeeDetails';
import Navbar from './components/Navbar';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeDirectory />} />
        <Route path="/employees/:type" element={<EmployeeDirectory />} />
        <Route path="/employees" element={<EmployeeDirectory />} />
        <Route path="/create" element={<EmployeeCreate />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
