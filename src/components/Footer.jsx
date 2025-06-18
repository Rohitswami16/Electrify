import '../../src/App.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand */}
        <div>
          <h2 className="footer-brand">⚡Electrify</h2>
          <p className="footer-description">
            Your one-stop destination for all electrical needs. Quality products. Trusted service.
          </p>
        </div>

        {/* Quick Links */}
        <div className='footer-section'>
          <h3 className="footer-title">Quick Links</h3>
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/products" className="footer-link">Products</a>
          <a href="/services" className='footer-link'>Services</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>

        {/* Legal Links */}
        <div className='footer-section'>
          <h3 className="footer-title">Legal</h3>
          <a  className="footer-link">Privacy Policy</a>
          <a  className="footer-link">Terms & Conditions</a>
          <a  className="footer-link">Return Policy</a>
        </div>

        {/* Contact Info */}
        <div className='footer-section'>
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-contact">📍 Bengaluru, Karnataka</p>
          <p className="footer-contact">📞 +91 9876543210</p>
          <p className="footer-contact">✉️ support@electrify.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="footer-title">Connect With Us</h3>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Electrify. All rights reserved.
      </div>
    </footer>
  );
}
