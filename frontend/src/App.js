import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ProductDetails from './components/layout/product/ProductDetails';
import Login from './components/auth/Login';
import './App.css';
import Register from './components/auth/Register';
import Profile from './components/auth/Profile';
import UpdateProfile from './components/auth/UpdateProfile';
import UpdatePassword from './components/auth/UpdatePassword';
import NewPassword from './components/auth/NewPassword';
import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './redux/actions/userAction';
import store from './redux/store';
import ForgotPassword from './components/auth/ForgotPassword';
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} />
        <Route path="/product/:id" component={ProductDetails} exact />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/password/forgot" component={ForgotPassword} exact />
        <Route path="/password/reset/:token" component={NewPassword} exact />
        <ProtectedRoute path="/me" component={Profile} exact />
        <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
        <ProtectedRoute
          path="/password/update"
          component={UpdatePassword}
          exact
        />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
