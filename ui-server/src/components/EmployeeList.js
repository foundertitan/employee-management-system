import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import EmployeeSearch from './EmployeeSearch';

const GET_EMPLOYEES = gql`
  query GetEmployees {
    getEmployees {
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

const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id: $id) {
      id
    }
  }
`;

const EmployeeList = () => {
  const { loading, error, data, refetch } = useQuery(GET_EMPLOYEES);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE);

  useEffect(() => {
    if (data) {
      setFilteredEmployees(data.getEmployees);
    }
  }, [data]);

  const handleSearch = (type) => {
    if (type === 'All') {
      setFilteredEmployees(data.getEmployees);
    } else {
      setFilteredEmployees(data.getEmployees.filter(emp => emp.employeeType === type));
    }
  };

  const handleDelete = async (id, firstName, lastName) => { 
    if (window.confirm(`Are you sure you want to delete ${firstName} ${lastName}?`)) {
      try {
        await deleteEmployee({ variables: { id } });
        refetch(); 
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const formatDate = (dateString) => {
    const date = new Date(parseInt(dateString));
    return date.toLocaleDateString();
  };

  return (
    <div className="container">
      <h1>Employee List</h1>
      <EmployeeSearch onSearch={handleSearch} />
      <div className="employee-list">
        {filteredEmployees.length === 0 ? (
          <p>No data found</p>
        ) : (
          filteredEmployees.map(employee => (
            <div key={employee.id} className="employee-card">
              <h3>{employee.firstName} {employee.lastName}</h3>
              <p><strong>Title:</strong> {employee.title}</p>
              <p><strong>Department:</strong> {employee.department}</p>
              <p><strong>Employee Type:</strong> {employee.employeeType}</p>
              <p className={`status ${employee.currentStatus ? 'working' : 'retired'}`}>
                {employee.currentStatus ? 'Working' : 'Retired'}
              </p>
              <div className="details-actions">
                <Link to={`/details/${employee.id}`} className="action-link">View Details</Link>
                <button onClick={() => handleDelete(employee.id, employee.firstName, employee.lastName)} className="action-button delete-button">Delete</button>
                <Link to={`/update/${employee.id}`} className="action-link">Update</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
