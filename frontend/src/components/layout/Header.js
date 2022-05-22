import React from 'react';
import { Link, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { logout } from '../../redux/actions/userAction';

import '../../App.css';
import Search from './Search';
const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success('Logout successfully');
  };
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
          <ul className="navbar-nav mb-2 mb-lg-0 col-lg-3 gap-3 align-items-center">
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <li className="nav-item d-flex gap-2">
                <span id="cart" className="mr-5">
                  Cart
                </span>
                <span className="ml-2" id="cart_count">
                  2
                </span>
              </li>
            </Link>
            {user ? (
              <div
                className="dropdown "
                style={{
                  display: 'flex',
                  minWidth: '150px',
                  justifyContent: 'space-evenly',
                }}
              >
                <li
                  className="btn dropdown-toggle text-white"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  style={{ width: '100%' }}
                  // aria-expanded="false"
                >
                  <figure
                    className="avatar avatar nav  d-flex  justify-content-between bg-success"
                    style={{ flexDirection: 'column' }}
                  >
                    {/* <img
                      src={
                        user?.avatar !== null ? user?.avatar?.url : 'NO image'
                      }
                      alt={user && user.name}
                      style={{ borderRadius: '50%' }}
                    /> */}
                    <span
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '60px',

                        height: '100%',

                        paddingLeft: '7px',
                        paddingRight: '7px',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      <div
                        style={{
                          whiteSpace: 'nowrap',
                          width: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {user?.name}sdsdsdasd
                      </div>
                    </span>
                  </figure>
                  {/* <div className="ml-5">&nbsp;</div> */}
                </li>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {user && user.role !== 'admin' ? (
                    <Link className="dropdown-item" to="/orders/me">
                      Orders
                    </Link>
                  ) : (
                    <Link className="dropdown-item" to="/dashboard">
                      Dashboard
                    </Link>
                  )}
                  <Link className="dropdown-item" to="/me">
                    Profile
                  </Link>
                  <li>
                    <Link
                      onClick={logoutHandler}
                      className="dropdown-item text-danger"
                      to="/"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              !loading && (
                <li className="nav-item ">
                  <Link to="/login" className="btn ml-4" id="login_btn">
                    Login
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
