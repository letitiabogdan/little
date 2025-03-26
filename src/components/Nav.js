import logo from "../assets/img/logo.jpg";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <Link
            to="/"
            className="navbar-brand col-sm-6 col-9 col-md-4 col-lg-3"
          >
            <img className="img-fluid" src={logo} alt="Little Lemon logo"></img>
          </Link>
          <button
            className="navbar-toggler col-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-auto" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-between">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booktable">
                  Reservations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orderonline">
                  Order Online
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
