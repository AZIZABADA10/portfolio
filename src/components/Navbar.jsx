import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          {/* Tu peux mettre ton logo ou ton nom */}
          <span>Aziz Portfolio</span>
        </Link>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-links active' : 'nav-links'}>
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projets" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-links active' : 'nav-links'}>
              Projets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-links active' : 'nav-links'}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
