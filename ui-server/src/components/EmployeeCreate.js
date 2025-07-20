import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($firstName: String!, $lastName: String!, $age: Int!, $dateOfJoining: String!, $title: String!, $department: String!, $employeeType: String!) {
    createEmployee(firstName: $firstName, lastName: $lastName, age: $age, dateOfJoining: $dateOfJoining, title: $title, department: $department, employeeType: $employeeType) {
      id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      employeeType
      currentStatus
    }
  }
`;

const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      firstName
      lastName
      age
      dateOfJoining
      title
      department
      employeeType
      currentStatus
    }
  }
`;

const EmployeeCreate = ({ onEmployeeCreated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    dateOfJoining: '',
    title: 'Employee',
    department: 'IT',
    employeeType: 'FullTime'
  });

  const [createEmployee] = useMutation(CREATE_EMPLOYEE, {
    refetchQueries: [{ query: GET_EMPLOYEES }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee({ variables: { ...formData, age: parseInt(formData.age), dateOfJoining: new Date(formData.dateOfJoining).toISOString() } });
      if (typeof onEmployeeCreated === 'function') {
        onEmployeeCreated();  
      }
      setFormData({
        firstName: '',
        lastName: '',
        age: '',
        dateOfJoining: '',
        title: 'Employee',
        department: 'IT',
        employeeType: 'FullTime'
      });
      navigate('/'); // Use navigate to go back to the home page
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
        </div>
        <div className="input-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" min="20" max="70" required />
        </div>
        <div className="input-group">
          <label>Date Of Joining:</label>
          <input type="date" name="dateOfJoining" value={formData.dateOfJoining} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Title:</label>
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Director">Director</option>
            <option value="VP">VP</option>
          </select>
        </div>
        <div className="input-group">
          <label>Department:</label>
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
        <div className="input-group">
          <label>Employee Type:</label>
          <select name="employeeType" value={formData.employeeType} onChange={handleChange}>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Contract">Contract</option>
            <option value="Seasonal">Seasonal</option>
          </select>
        </div>
        <button type="submit" className='Submitbtn'>Create Employee</button>
      </form>
    </div>
  );
};

export default EmployeeCreate;
