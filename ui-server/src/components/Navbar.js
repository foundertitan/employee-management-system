import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Employee Directory</Link></li>
        <li><Link to="/create">Create Employee</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
