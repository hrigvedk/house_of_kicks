import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes';
import ProtectedRoute from './components/ProtectedRoute';
import Demo from './components/demo component/Demo';
import LoginSignUpCard from './components/LoginSignUpCard/LoginSignUpCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import ProductCatlog from './components/ProductCatalog/ProductCatalog'
import ProductDetails from './components/ProductDetails/ProductDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.LANDINGPAGE} element={<ProtectedRoute element={<Demo />} />} />
        <Route path={routes.base} element={<ProtectedRoute element={<LoginSignUpCard />} route={'/home'} />} />
        <Route path={routes.PRODUCTS} element={<ProtectedRoute element={<ProductCatlog />} route={'/products'} />} />
        <Route path={routes.PRODUCT} element={<ProtectedRoute element={<ProductDetails />} route={'/product/:modelName'} />} />
      </Routes>
    </Router>
  );
};

export default App;
