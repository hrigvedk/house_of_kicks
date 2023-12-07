import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Import icons

const Navigation = ({ onSearchChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand brand-font">
          <img src="https://drive.google.com/uc?id=1qiDDnWjhOSoM7zwuM3Ag29oS83N9hu-D" alt="icon" height={60} width={60} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
          <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Sneakers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2 search-shoes-input"
            placeholder="Search"
            onChange={onSearchChange}
          />
        </div>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FaShoppingCart />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <FaUser />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
