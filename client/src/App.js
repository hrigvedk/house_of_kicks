import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/SignUp/SignUp'; 
import routes from './Routes'; 
import Demo from './components/demo component/Demo';
import LoginSignUpCard from './components/LoginSignUpCard/LoginSignUpCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.base} element={<Demo/>}/>
        <Route path={routes.AUTHENTICATION} element ={<LoginSignUpCard/>}/>
        {/* <Route path={routes.SIGN_UP} element={<Signup />} />
        <Route path ={routes.LOGIN} element = {<Login/>} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

