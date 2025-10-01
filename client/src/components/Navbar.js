import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">Local AI Finance</span>
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a></li>
          <li><a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a></li>
          <li><a href="#download" onClick={() => setIsMobileMenuOpen(false)}>Download</a></li>
          <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="navbar-cta">
          <a href="#download" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
