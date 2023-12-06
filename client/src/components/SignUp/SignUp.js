//जय श्री राम
import React, { useState } from 'react';
import { signUp } from '../../api/api';
import routes from '../../Routes';
import './SignUpStyles/signUpStyles.css'; // Import your custom CSS for Signup styling
import '../../Styles/common.css'


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
      return;
    }

    try {

      setLoading(true);

      // Use the signUp function from the api.js file
      const response = await signUp(formData,5000);
      const { user, token } = response;

      // Extract _id, email, and other user details from the user object
      const { _id, email } = user;
  
      // Store _id, email, and token in the local storage
      localStorage.setItem('_id', _id);
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);

      console.log('Signup successful!', response);

      window.location.href = routes.base;
    } catch (error) {
      console.log("here")
      setError(error.message);
    } finally {
      console.log("finally ")
      setLoading(false);
    }
  };

  const _id = localStorage.getItem('_id');
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');
  console.log(_id);
  console.log(email)
  console.log(token)

  return (
    <>
    {/* <div className="signup-background"> */}
      <div className="signup-container d-flex justify-content-center align-items-center">
        {/* <div className="card p-5"> */}
          {/* <h2 className="text-center mb-4">Sign Up</h2> */}
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
             <label htmlFor="lastName" className="form-label">Last Name <span className="required">*</span></label>
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
      {/* </div> */}
    {/* </div> */}
    </>
  );
};

export default Signup;
