import React, { useState } from 'react';
import { Tab, Tabs, Card } from 'react-bootstrap';
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
      <Card className="auth-card">
        <Tabs
          id="authentication-tabs"
          activeKey={activeTab}
          onSelect={(tab) => handleTabChange(tab)}
          variant="pills"
          className="mb-3"
        >
          <Tab  eventKey="signup" title="Sign Up">
           <SignUp/>
           
          </Tab>
          <Tab  eventKey="login" title="Login">
          <Login/>
          
          </Tab>
        </Tabs>
      </Card>
    </div>

    </>
  );
};

export default LoginSignUpCard;