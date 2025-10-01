import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">
              <span className="logo-icon">🤖</span>
              Local AI Finance
            </h3>
            <p>
              Your privacy-first financial AI assistant. 
              Powerful analysis that stays on your device.
            </p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#download">Download</a></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="mailto:support@localaifinance.com">Support</a></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Local AI Finance. All rights reserved.</p>
          <p className="footer-tagline">Built with privacy in mind 🔒</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
