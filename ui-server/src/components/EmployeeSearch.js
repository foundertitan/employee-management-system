import React, { useState } from 'react';

const EmployeeSearch = ({ onSearch }) => {
  const [searchType, setSearchType] = useState('All');

  const handleChange = (e) => {
    setSearchType(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="employee-search">
      <label>Filter by Employee Type: </label>
      <select value={searchType} onChange={handleChange}>
        <option value="All">All</option>
        <option value="FullTime">FullTime</option>
        <option value="PartTime">PartTime</option>
        <option value="Contract">Contract</option>
        <option value="Seasonal">Seasonal</option>
      </select>
    </div>
  );
};

export default EmployeeSearch;
