import logo from "../assets/img/logo.jpg";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid bgSecondary mt-5 py-5">
      <footer className="container justify-content-center">
        <div className="row">
          <div className="col-lg-3 align-content-center">
            <img className="img-fluid" src={logo} alt="Little Lemon logo"></img>
          </div>

          <div className="col">
            <h3>Doormat Navigation</h3>
            <nav className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Reservations">
                  Reservations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/OrderOnline">
                  Order Online
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            </nav>
          </div>

          <div className="col">
            <h3>Contact</h3>
            <nav className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Adress
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Phone number
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Email
                </Link>
              </li>
            </nav>
          </div>

          <div className="col">
            <h3>Social Media links</h3>
            <nav className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Adress
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Phone number
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Email
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
