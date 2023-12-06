import axios from 'axios';

const API_BASE_URL = 'http://house-of-kicks-backend.us-east-1.elasticbeanstalk.com/'; // Replace this with your actual backend base URL

export const signUp = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}user/signup`, formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Network Error. Please try again later.';
  }
};

// api.js - Define login function in this file to handle login API call
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Login failed');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

export const logout = async () => {
  try {
    const token = localStorage.getItem('token');

    console.log(token);

    const response = await fetch(`${API_BASE_URL}user/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      // body: JSON.stringify(credentials),
    });
    if(response.status == 200) {

      return true;
    } else {

      return false;
    }
    // if (!response.ok) {
    //   const errorData = await response.json();
    //   throw new Error(errorData.error || 'Logout failed');
    // }
    // return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Logout failed');
  }
};

