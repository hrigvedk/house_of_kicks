import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/'; // Replace this with your actual backend base URL

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
    const response = await fetch('/user/login', {
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

