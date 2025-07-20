import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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

const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID!, $title: String!, $department: String!, $currentStatus: Boolean!) {
    updateEmployee(id: $id, title: $title, department: $department, currentStatus: $currentStatus) {
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

const EmployeeUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use navigate instead of history
  const { loading, error, data } = useQuery(GET_EMPLOYEE, {
    variables: { id }
  });
  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE);

  const [formData, setFormData] = useState({
    id: '',
    title: '',
    department: '',
    currentStatus: true
  });

  useEffect(() => {
    if (data) {
      const { id, title, department, currentStatus } = data.getEmployee;
      setFormData({ id, title, department, currentStatus });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, currentStatus: value === 'true' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee({
      variables: {
        id: formData.id,
        title: formData.title,
        department: formData.department,
        currentStatus: formData.currentStatus
      }
    });
    navigate('/'); // Use navigate to go back to the home page
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={data.getEmployee.firstName} disabled />
        </div>
        <div className="input-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={data.getEmployee.lastName} disabled />
        </div>
        <div className="input-group">
          <label>Age:</label>
          <input type="number" name="age" value={data.getEmployee.age} disabled />
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
          <label>Status:</label>
          <select name="currentStatus" value={formData.currentStatus.toString()} onChange={handleStatusChange}>
            <option value="true">Working</option>
            <option value="false">Retired</option>
          </select>
        </div>
        <button type="submit" className="Submitbtn">Update Employee</button>
      </form>
    </div>
  );
};

export default EmployeeUpdate;
