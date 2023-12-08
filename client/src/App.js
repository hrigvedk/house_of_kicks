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
import LandingPage from './components/LandingPage/LandingPage';
import Cart from './components/Cart/Cart';
import Portfolio from './components/Portfolio/Portfolio';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path ={routes.USER_PROFILE} element = {<Profile/>}/>
        <Route path ={routes.UPDATE_USER} element = {<UpdateUser/>}/>
        <Route path ={routes.demo} element = {<Demo/>}/>
        <Route path={routes.LANDINGPAGE} element={<ProtectedRoute element={<LandingPage />} />} />
        <Route path={routes.base} element={<ProtectedRoute element={<LoginSignUpCard />} route={'/auth'} />} />
        <Route path={'/*'} element={<ProtectedRoute element={<ProductCatlog />} route={'/product'} />} />
        <Route path={'*'} element={<ProtectedRoute element={<NotFound />} route={'*'} />} /> 
        <Route path={'/cart'} element={<ProtectedRoute element={<Cart />} route={'/cart'} />} /> 
        <Route path={'/portfolio'} element={<ProtectedRoute element={<Portfolio />} route={'/portfolio'} />} /> 
      </Routes>
    </Router>
  );
};

export default App;
