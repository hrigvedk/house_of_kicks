import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes'; 
import Demo from './components/demo component/Demo';
import LoginSignUpCard from './components/LoginSignUpCard/LoginSignUpCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.base} element={<Demo/>}/>
        <Route path={routes.AUTHENTICATION} element ={<LoginSignUpCard/>}/>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

