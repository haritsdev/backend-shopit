import React from 'react';
import '../../App.css';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src="/images/shopit_logo.png" />
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
          <form className="d-flex mx-auto my-auto  px-3  col-lg-6 text-center">
            <div
              className="col-12 ml-5 mt-2 mt-md-0 text-center "
              style={{
                textAlign: 'center',
                marginLeft: '5px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="input-group" style={{ width: '100%' }}>
                <input
                  type="text"
                  id="search_field"
                  className="form-control"
                  placeholder="Enter Product Name ..."
                />
                <div className="input-group-append">
                  <button id="search_btn" className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
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
