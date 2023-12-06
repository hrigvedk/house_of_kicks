import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('The token in protected route is ' + token);
    if (token) {
      navigate('/home'); 
    } else {
      navigate('/'); 
    }
  }, [navigate]);

  return <>{element}</>;
};

export default ProtectedRoute;
