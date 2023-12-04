import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/'; // Replace this with your actual backend base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

const signUp = async (userData) => {
  try {
    const response = await api.post('user/signup', userData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { signUp };

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

