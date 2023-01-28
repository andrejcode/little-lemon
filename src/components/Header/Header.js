import logo from '../../assets/images/little-lemon-logo.png';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" width={300} height="auto" />
      <Nav />
    </header>
  );
}

export default Header;