
import React, { useState } from 'react';
// import { login } from '../../api/api';
import './LoginStyles/loginStyles.css';
import routes from '../../Routes';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to handle loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Set loading to true on form submission
      // Simulate API call with timeout
      setTimeout(() => {
        // For demonstration, redirect to a page after 2 seconds
        window.location.href = routes.base;
      }, 2000);
      // Replace this timeout with your actual API login call
      // const response = await login(credentials);
      // console.log('Login successful!', response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false after API call completion
    }
  };

  return (
    <div className="login-background">
      <div className="login-container d-flex justify-content-center align-items-center">
        <div className="card p-5">
          <h2 className="text-center mb-4">Login</h2>
          {error && <p className="error-msg">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email<span className="required">*</span>
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
                Password<span className="required">*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100 mt-3 position-relative">
                <span className={loading ? 'visually-hidden' : ''}>Login</span>
                {loading && (
                  <div className="spinner-border text-light position-absolute top-50 start-50 translate-middle" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
