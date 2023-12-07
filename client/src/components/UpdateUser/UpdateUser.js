import React, {useState, useEffect} from 'react'
import { updateUserProfile } from '../../api/api';
import routes from '../../Routes';
import './UpdateUserStyles/updateUserStyles.css';

function UpdateUser() {

  const [formData, setFormData] = useState({

    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
    email: localStorage.getItem('email'),
    phone: localStorage.getItem('phone'),

  });
  const [loading,setLoading] = useState(false);



  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    form: '',
  });

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;

    // Validation rules
    if (formData.firstName.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: 'Empty field not allowed' }));
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: 'Only alphabets allowed' }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
    }

    if (formData.lastName.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Empty field not allowed' }));
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Only alphabets allowed' }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
    }

    if (formData.phone.trim() === '') {
      setErrors((prevErrors) => ({ ...prevErrors, phone: 'Empty field not allowed' }));
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: 'Phone number must be 10 digits' }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
    }

    return isValid;
  };
  const token = localStorage.getItem('token'); // Get the user's token from localStorage

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (validateForm()) {
        const data = await updateUserProfile(formData, token);

        console.log('Profile Updated:', data);

        localStorage.setItem('firstName', data.firstName);
        localStorage.setItem('lastName', data.lastName);
        localStorage.setItem('phone', data.phone);
        window.location.href =  routes.USER_PROFILE;
      }
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.phone.trim() !== '' &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.phone
    );
  };



  return (
    <div>
      <div className="header">
        <h1>Welcome {formData.firstName}!</h1>
      </div>

      <div className="container">
        <div className="profile-card">
          <form onSubmit={handleSubmit}>
            <h2 className="profile-title">Update Profile</h2>

            <div className="form-group">
              <label htmlFor="firstName"> <b>First Name</b></label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName"> <b>Last Name</b></label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
               {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email"> <b>Email</b></label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone"><b>Phone</b> </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <button type="submit" className="btn btn-primary">
            {loading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                {loading ? 'Updating...' : 'Update'}
            

            </button>

          {/* <button type="submit" className="btn btn-primary"  disabled={!isFormValid}>
              Update
            
            </button> */}
          </form>
        </div>
      </div>

    </div>
  );
}

export default UpdateUser
