import React from 'react';
import './BottomNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserTie, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', icon: faHome, path: '/home', activeClass: 'active-home' },
  { label: 'For Owner', icon: faUserTie, path: '/for-owners', activeClass: 'active-owner' },
  { label: 'For Tenants', icon: faBuilding, path: '/pg-listing', activeClass: 'active-tenant' },
];

const BottomNavBar = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path === '/home' && location.pathname === '/');
        return (
          <Link
            key={item.label}
            to={item.path}
            className={`bottom-nav-item${isActive ? ' active ' + item.activeClass : ''}`}
            aria-label={item.label}
            tabIndex={0}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FontAwesomeIcon icon={item.icon} className="bottom-nav-icon" />
            <span className="bottom-nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
