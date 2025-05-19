import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="RAJ GHARANA Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/lehenga">LEHENGA</Link></li>
          <li><Link to="/saree">SAREE</Link></li>
          <li><Link to="/suit">SUIT</Link></li>
          <li><Link to="/showcase">SHOWCASE</Link></li>
          <li><a href="tel:+916201207481" className="btn">CALL US</a></li>
          <li><a href="mailto:rahulraj90606024@gmail.com" className="btn">EMAIL US</a></li>
          <li><Link to="/login" className="btn">LOGIN</Link></li>
          <li><Link to="/signup" className="btn">SIGN UP</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar; 