import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

// Simple SVG social icons
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dyc-footer">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <h2 className="footer-brand">DYVIGYA CARE</h2>
          <p className="footer-tagline">Wellness Foundation</p>
          <p className="footer-desc">
            A grassroots non-profit working at the intersection of menstrual dignity, women's livelihood, and gobar-based rural innovation.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">
              <YouTubeIcon />
            </a>
          </div>
        </div>

        {/* Causes */}
        <div className="footer-col">
          <h4>Our Causes</h4>
          <Link to="/causes/menstruation">Menstrual Equity</Link>
          <Link to="/causes/livelihood-generation">Livelihood Generation</Link>
          <Link to="/causes/gobar-dhan">Gobar-Dhan</Link>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/about-us">About Us</Link>
          <Link to="/blog">Blog</Link>
          <a href="https://cowdust.co" target="_blank" rel="noreferrer">Shop (Cowdust.co)</a>
          <Link to="/media">Media / Events</Link>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Connect</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/support-us">Volunteer / Donate</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <a href="mailto:office@dyvigyacare.org" className="footer-email">
            office@dyvigyacare.org
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Dyvigya Care Wellness Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;