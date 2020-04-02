import React, { Component } from 'react';
import './NavigationTop.scss';

class NavigationTop extends Component {
  render() {
    return (
      <nav className="top-toolbar navbar navbar-desktop flex-nowrap">
        <ul className="navbar-nav nav-left">
          <form role="search" className="navbar-form form-search">
            <div className="form-group">
              <input
                type="text"
                placeholder="Search and press enter..."
                className="form-control navbar-search"
              />
              <i className="icon dripicons-search"></i>
            </div>
            <button type="submit" className="d-none">
              Submit
            </button>
          </form>
        </ul>
        <ul className="navbar-nav nav-right">
          <li className="nav-item">
            <span>
              <i className="icon dripicons-view-apps"></i>
            </span>
          </li>
          <li className="nav-item dropdown dropdown-notifications dropdown-menu-lg">
            <span>
              <i className="icon dripicons-bell"></i>
            </span>
          </li>
          <li className="nav-item dropdown">
            <span className="user-avatar">
              <img
                src="https://smvn.vn/wp-content/themes/smvn/images/default-thumbnail.jpg"
                className="w-35 rounded-circle"
                alt="avatar"
              />
            </span>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-accout">
              <div className="dropdown-header pb-3">
                <div className="media d-user">
                  <img
                    className="align-self-center mr-3 w-40 rounded-circle"
                    src="https://smvn.vn/wp-content/themes/smvn/images/default-thumbnail.jpg"
                    alt="avatar"
                  />
                  <div className="media-body">
                    <h5 className="mt-0 mb-0">Albert Einstein</h5>
                    <span>support@authenticgoods.co</span>
                  </div>
                </div>
              </div>
              <a className="dropdown-item" href="apps.messages.html">
                <i className="icon dripicons-mail"></i> Message{' '}
                <span className="badge badge-accent rounded-circle w-15 h-15 p-0 font-size-10">
                  4
                </span>
              </a>
              <a className="dropdown-item" href="pages.profile.html">
                <i className="icon dripicons-user"></i> Profile
              </a>
              <a className="dropdown-item" href="pages.my-account.html">
                <i className="icon dripicons-gear"></i> Account Settings{' '}
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="icon dripicons-lock"></i> Lock Account
              </a>
              <a className="dropdown-item" href="auth.sign-in.html">
                <i className="icon dripicons-lock-open"></i> Sign Out
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavigationTop;
