import logo from '../assets/images/little-lemon-logo.png';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" width={400} height="auto" />
      <Nav />
    </header>
  );
}

export default Header;