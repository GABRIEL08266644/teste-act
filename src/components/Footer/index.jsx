import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line"></div>
      <div className="footer-data">
        <div>
          <span>
            act digital 2024
          </span>
        </div>
        <div>
          <Link to="https://actdigital.com/pt" target="_blank">Official Site</Link>
          <Link to="https://www.instagram.com/actdigitaloficial/" target="_blank">Instagram</Link>
          <Link to="https://www.facebook.com/actdigitaloficial" target="_blank">Facebook</Link>
        </div>
      </div>
    </footer>
  );
}
