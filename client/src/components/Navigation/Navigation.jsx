// components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ onSearchChange }) => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand brand-font">
          HOK
        </Link>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2 search-shoes-input"
            placeholder="Search"
            onChange={onSearchChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
