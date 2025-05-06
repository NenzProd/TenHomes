import React from 'react';
import './BottomNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserTie, faBuilding, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', icon: faHome, path: '/home' },
  { label: 'For Owner', icon: faUserTie, path: '/for-owners' },
  { label: 'For Tenants', icon: faBuilding, path: '/for-tenants' },
  { label: 'Quick Enquiry', icon: faQuestionCircle, path: '/contact' },
];

const BottomNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path === '/home' && location.pathname === '/');
        return (
          <button
            key={item.label}
            className={`bottom-nav-item${isActive ? ' active' : ''}`}
            onClick={() => navigate(item.path)}
            aria-label={item.label}
          >
            <FontAwesomeIcon icon={item.icon} className="bottom-nav-icon" />
            <span className="bottom-nav-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
