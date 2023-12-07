import React, { useState } from 'react';
import { login } from '../../api/api';
import './LoginStyles/loginStyles.css';
import routes from '../../Routes';
import '../../Styles/common.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to handle loading
  const [showPassword, setShowPassword] = useState(false); // State to handle password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading to true on form submission
      const response = await login(credentials, 5000);
      const { user, token } = response;

      // Extract _id, email, and other user details from the user object
      const { _id, email } = user;

      // Store _id, email, and token in the local storage
      localStorage.setItem('_id', _id);
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);
      console.log('Login successful!', response);
      console.log(response.token);
      window.location.href = routes.LANDINGPAGE;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false after API call completion
    }
  };

  return (
    <div className="login-background">
      <div className="login-container justify-content-center align-items-center">
        {error && <p className="error-msg">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password <span className="required">*</span>
            </label>
            <div className="">
              <div className='password-row'>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            <i className={`far fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} id="togglePassword" onClick={() => setShowPassword(!showPassword)}></i>
            </div>
            </div>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="login-btn-color btn btn-secondary w-100 mt-3"
              disabled={loading}
            >
              {loading ? (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              ) : null}
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
