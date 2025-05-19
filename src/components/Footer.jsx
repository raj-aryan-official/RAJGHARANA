import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="RAJ GHARANA Logo" />
        </div>
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>MAIN ROAD, NEAR POLICE STATION</p>
          <p>HILSA, NALANDA (BIHAR)</p>
          <p>801302</p>
          <p>Phone: 6201207481, 6206897868</p>
          <p>Email: rahulraj90606024@gmail.com</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 RAJ GHARANA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 