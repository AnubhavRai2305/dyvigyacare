import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Add scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isCauseActive = (slug) => location.pathname === `/causes/${slug}`;

  return (
    <>
      <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">

          <Link to="/" className="logo-wrapper" onClick={closeMenu}>
            <img
              src="https://www.dyvigyacare.in/favicon.ico"
              alt="DYC Logo"
              className="logo-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="logo-text">DYVIGYA CARE</span>
          </Link>

          <button
            className={`mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
            <nav className="main-nav">
              <Link to="/about-us" className={isActive('/about-us') ? 'nav-active' : ''}>About Us</Link>
              <Link to="/media" className={isActive('/media') ? 'nav-active' : ''}>Media/Events</Link>
              <Link to="/blog" className={isActive('/blog') ? 'nav-active' : ''}>Blog</Link>
              <a href="https://cowdust.co" target="_blank" rel="noreferrer">Shop</a>
              <Link to="/support-us" className="btn-primary donate-btn">Donate</Link>
            </nav>
            <nav className="sub-nav">
              <Link
                to="/causes/menstruation"
                className={`sub-nav-link ${isCauseActive('menstruation') ? 'sub-active' : ''}`}
              >
                Menstrual Equity
              </Link>
              <Link
                to="/causes/livelihood-generation"
                className={`sub-nav-link ${isCauseActive('livelihood-generation') ? 'sub-active' : ''}`}
              >
                Livelihood Generation
              </Link>
              <Link
                to="/causes/gobar-dhan"
                className={`sub-nav-link ${isCauseActive('gobar-dhan') ? 'sub-active' : ''}`}
              >
                Gobar-Dhan
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile backdrop */}
        {isMobileMenuOpen && (
          <div className="mobile-backdrop" onClick={closeMenu} />
        )}
      </header>
    </>
  );
};

export default Header;