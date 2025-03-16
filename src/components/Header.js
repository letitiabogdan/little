import Nav from './Nav';
import logo from '../assets/img/logo.jpg';

function Header() {
    return <header className='row justify-content-center align-items-center'>
        <div className='col-lg-2'>
            <img className='img-fluid' src={logo} alt="Little Lemon logo"></img>
        </div>
        <div className='col-lg-6'>
            <Nav></Nav>
        </div>
    </header>;
}

export default Header;