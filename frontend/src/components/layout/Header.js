import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../App.css';
import Search from './Search';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">
            <img src="/images/shopit_logo.png" alt="logo" />
          </Link>
        </div>
        <button
          className="navbar-toggler bg-light"
          style={{ color: 'black', border: 'black' }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Route render={({ history }) => <Search history={history} />} />
          <ul className="navbar-nav mb-2 mb-lg-0 col-lg-3  d-flex justify-content-end gap-4 align-items-center">
            <li className="nav-item d-flex gap-2">
              <span id="cart" className="mr-5">
                Cart
              </span>
              <span className="ml-2" id="cart_count">
                2
              </span>
            </li>
            <li className="nav-item ">
              <button className="btn " id="login_btn">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
