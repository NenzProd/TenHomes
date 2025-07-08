import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../../assets/TenHomes-logo-transparentbg-1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="TenHomes Logo" className="navbar-logo-svg" />
        </div>

        <div 
          className={`navbar-hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About us</NavLink></li>
          <li><NavLink to="/forowners" className={({ isActive }) => isActive ? 'active' : ''}>For Owners</NavLink></li>
          <li><NavLink to="/fortenants" className={({ isActive }) => isActive ? 'active' : ''}>For Tenants</NavLink></li>
          <li><NavLink to="/pricing" className={({ isActive }) => isActive ? 'active' : ''}>Pricing</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact us</NavLink></li>
        </ul>

        <div className={`navbar-contact ${isMenuOpen ? 'active' : ''}`}>
          <a href="tel:+9840167444" className="navbar-phone">
            <FontAwesomeIcon icon={faPhone} />
            <span>+91 98401 67444</span>
          </a>
        </div>
      </div>
      
      <div 
        className={`navbar-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
    </nav>
  );
};

export default Navbar;
