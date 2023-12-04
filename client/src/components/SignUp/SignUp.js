
//जय श्री राम

import React, { useState } from 'react';
import axios from 'axios';
// import { signUp } from '../../api/api';
import routes from '../../Routes';
import './SignUpStyles/signUpStyles.css'; // Import your custom CSS for Signup styling


const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      console.log('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      // Simulate an API call delay (replace this with your actual API call)
      setTimeout(async () => {
        // const response = await signUp(formData);
        // console.log('Signup successful!', response);
        window.location.href = routes.LOGIN;
        setLoading(false);
      }, 2000); // Simulated delay of 2 seconds
    } catch (error) {
      setLoading(false);
      setError(error.error);
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (formData.password !== formData.confirmPassword) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     const response = await axios.post(`${routes.BASE_URL}user/signup`, formData);

  //     if (response.status === 201) {
  //       console.log('Signup successful!', response.data);
  //       window.location.href = routes.LOGIN;
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       setError(error.response.data.message || 'Something went wrong!');
  //     } else {
  //       setError('Network Error. Please try again later.');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="signup-background">
      <div className="signup-container d-flex justify-content-center align-items-center">
        <div className="card p-5">
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <p className="error-msg">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
                       <div className="mb-3">
             <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password <span className="required">*</span></label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="required">*</span></label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number <span className="required">*</span></label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100 mt-3" disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
