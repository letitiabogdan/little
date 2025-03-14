import logo from '../assets/img/logo.jpg';

function Footer() {
    return <footer>
        <img src={logo} alt="Little Lemon logo"></img>
        <div>
            <h3>Doormat Nav igation</h3>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">Order Online</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </div>

        <div>
            <h3>Contact</h3>
            <nav>
                <ul>
                    <li><a href="">Adress</a></li>
                    <li><a href="">Phone number</a></li>
                    <li><a href="">Email</a></li>
                </ul>
            </nav>
        </div>

        <div>
            <h3>Social Media links</h3>
            <nav>
                <ul>
                    <li><a href="">Adress</a></li>
                    <li><a href="">Phone number</a></li>
                    <li><a href="">Email</a></li>
                </ul>
            </nav>
        </div>
    </footer>;
}

export default Footer;