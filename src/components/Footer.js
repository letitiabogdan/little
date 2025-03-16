import logo from "../assets/img/logo.jpg";

function Footer() {
  return (
    <footer className="row justify-content-center align-items-center">
      <div className="col-lg-2">
        <img className="img-fluid" src={logo} alt="Little Lemon logo"></img>
      </div>

      <div className="col-lg-2">
        <h3>Doormat Nav igation</h3>
        <nav className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Reservations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Order Online
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Login
            </a>
          </li>
        </nav>
      </div>

      <div className="col-lg-2">
        <h3>Contact</h3>
        <nav className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="">
              Adress
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Phone number
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Email
            </a>
          </li>
        </nav>
      </div>

      <div className="col-lg-2">
        <h3>Social Media links</h3>
        <nav className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="">
              Adress
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Phone number
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Email
            </a>
          </li>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
