// 
import React, { useState } from 'react';
import { FaShoePrints } from 'react-icons/fa';
import SignUp from '../SignUp/SignUp'; 
import Login from '../Login/Login'; 
import "./LoginSignUpCardStyles/loginSignUpCardStyles.css";

const LoginSignUpCard = () => {
  const [activeTab, setActiveTab] = useState('signup'); // State to manage active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="text-center mt-5">
        <h1 className='mb-4'>
          <FaShoePrints className="mr-2" />
          House of Kicks
        </h1>
      </div>
      <div className="auth-container">
        <div className="auth-card">
          <div className="tab-toggles">
            <span
              className={activeTab === 'signup' ? 'active-tab' : ''}
              onClick={() => handleTabChange('signup')}
            >
              Sign Up
            </span>
            <span
              className={activeTab === 'login' ? 'active-tab' : ''}
              onClick={() => handleTabChange('login')}
            >
              Login
            </span>
          </div>
          {activeTab === 'signup' && <SignUp />}
          {activeTab === 'login' && <Login />}
        </div>
      </div>
    </>
  );
};

export default LoginSignUpCard;
