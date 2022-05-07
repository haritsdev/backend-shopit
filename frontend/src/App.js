import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ProductDetails from './components/layout/product/ProductDetails';
import './App.css';
const App = () => {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} />
        <Route path="/product/:id" component={ProductDetails} exact />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
