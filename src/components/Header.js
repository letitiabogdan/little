import Nav from './Nav';
import logo from '../assets/img/logo.jpg';

function Header() {
    return <header>
        <img src={logo} alt="Little Lemon logo"></img>
        <Nav></Nav>
    </header>;
}

export default Header;