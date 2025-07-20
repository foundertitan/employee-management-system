import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

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

const EmployeeDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EMPLOYEE, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { firstName, lastName, age, dateOfJoining, title, department, employeeType, currentStatus } = data.getEmployee;

  const formatDate = (dateString) => {
    const date = new Date(parseInt(dateString));
    return date.toLocaleDateString();
  };

  return (
    <div className="employee-details">
      <h2 className="employee-heading">Employee Details</h2>
      <p className="employee-item"><strong>Name:</strong> {firstName} {lastName}</p>
      <p className="employee-item"><strong>Age:</strong> {age}</p>
      <p className="employee-item"><strong>Date Of Joining:</strong> {formatDate(dateOfJoining)}</p>
      <p className="employee-item"><strong>Title:</strong> {title}</p>
      <p className="employee-item"><strong>Department:</strong> {department}</p>
      <p className="employee-item"><strong>Employee Type:</strong> {employeeType}</p>
      <p className={`employee-item status ${currentStatus ? 'working' : 'retired'}`}>
        <strong>Status:</strong> {currentStatus ? 'Working' : 'Retired'}
      </p>
    </div>
  );
};

export default EmployeeDetails;
