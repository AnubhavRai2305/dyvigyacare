import React from 'react';
import { Link } from 'react-router-dom';
import './FocusDetailTemplate.css';

const FocusDetailTemplate = ({ title, description, keyImpactStats, imagePlaceholder }) => {
  return (
    <div className="focus-detail-page">
      <div className="focus-container">
        
        {/* Header Section */}
        <div className="focus-header fade-in-up-fast">
          <h1 className="focus-title">{title}</h1>
          <div className="title-divider"></div>
        </div>

        {/* Hero Image Section */}
        <div className="focus-hero-image fade-in-up">
          <img src={imagePlaceholder} alt={`${title} hero`} className="focus-img" />
        </div>

        {/* Content Section */}
        <div className="focus-content-section fade-in-up">
          <div className="focus-description">
            <p>{description}</p>
          </div>

          <div className="focus-stats-card">
            <h3>Key Impact Stats</h3>
            <ul className="stats-list">
              {keyImpactStats && keyImpactStats.map((stat, index) => (
                <li key={index}>
                  <span className="stat-icon">✓</span>
                  <span className="stat-text">{stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="focus-cta-section fade-in-up">
          <h2>Join Our Mission</h2>
          <p>Your support makes these impacts possible. Get involved today to help us expand our reach.</p>
          <div className="cta-buttons">
            <Link to="/support-us" className="btn-primary">Donate Now</Link>
            <Link to="/contact" className="btn-outline-dark">Get Involved</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FocusDetailTemplate;
