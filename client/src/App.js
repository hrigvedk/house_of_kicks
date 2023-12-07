import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes';
import ProtectedRoute from './components/ProtectedRoute';
import Demo from './components/demo component/Demo';
import LoginSignUpCard from './components/LoginSignUpCard/LoginSignUpCard';
import Profile from './components/Profile/Profile';
import UpdateUser from './components/UpdateUser/UpdateUser';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import ProductCatlog from './components/ProductCatalog/ProductCatalog'
import ProductDetails from './components/ProductDetails/ProductDetails';
import NotFound from './components/NotFound/NotFound';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path ={routes.USER_PROFILE} element = {<Profile/>}/>
        <Route path ={routes.UPDATE_USER} element = {<UpdateUser/>}/>
        <Route path={routes.LANDINGPAGE} element={<ProtectedRoute element={<Demo />} />} />
        <Route path={routes.base} element={<ProtectedRoute element={<LoginSignUpCard />} route={'/auth'} />} />
        {/* <Route path={'/products/*'} element={<ProtectedRoute element={<ProductCatlog />} route={'/products'} />} />
         */}

        <Route path={'/*'} element={<ProtectedRoute element={<ProductCatlog />} route={'/product'} />} />
        <Route path={'*'} element={<ProtectedRoute element={<NotFound />} route={'*'} />} /> 
      </Routes>
    </Router>
  );
};

export default App;
