import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes';
import ProtectedRoute from './components/ProtectedRoute'; 
import Demo from './components/demo component/Demo';
import LoginSignUpCard from './components/LoginSignUpCard/LoginSignUpCard';
import Profile from './components/Profile/Profile';
import UpdateUser from './components/UpdateUser/UpdateUser';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route
          path={routes.LANDINGPAGE}
          element={<ProtectedRoute element={<Demo />} />} 
        />
        <Route path={routes.base} element={<ProtectedRoute element={<LoginSignUpCard />} />} />
        <Route path ={routes.USER_PROFILE} element = {<Profile/>}/>
        <Route path ={routes.UPDATE_USER} element = {<UpdateUser/>}/>
      </Routes>
    </Router>
  );
};

export default App;
