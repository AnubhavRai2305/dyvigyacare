import React, { useState } from 'react';
import { transparencyData } from '../data/mockData';
import './SupportUs.css';

const SupportUs = () => {
  const [donationAmount, setDonationAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setDonationAmount('custom');
    setCustomAmount(e.target.value);
  };

  return (
    <div className="support-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="header-content fade-in-up-fast">
          <h1>Stand With Us</h1>
          <div className="divider"></div>
          <p>Your contribution directly empowers women, generates rural livelihoods, and protects our environment.</p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="donate-section">
        <div className="content-container donate-grid">
          
          <div className="donate-info fade-in-up">
            <h2>Make a Direct Impact</h2>
            <p>We keep our donation process simple and transparent. Every rupee you give is an investment in community wisdom and sustainable rural development.</p>
            <ul className="impact-list">
              <li><strong>₹500:</strong> Provides annual menstrual hygiene kits for 2 school girls.</li>
              <li><strong>₹2,000:</strong> Funds a 15-day skill training workshop for a rural woman.</li>
              <li><strong>₹5,000:</strong> Helps sustain a local Gaushala for a month.</li>
            </ul>
          </div>

          {/* Minimalist Donation Widget */}
          <div className="donate-widget fade-in-up">
            <h3>Select Amount (INR)</h3>
            <div className="amount-grid">
              {[500, 1000, 2000, 5000].map((amt) => (
                <button 
                  key={amt}
                  className={`amount-btn ${donationAmount === amt ? 'active' : ''}`}
                  onClick={() => handleAmountClick(amt)}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
            
            <div className="custom-amount-wrapper">
              <span className="currency-symbol">₹</span>
              <input 
                type="number" 
                placeholder="Enter custom amount" 
                className={`custom-amount-input ${donationAmount === 'custom' ? 'active-input' : ''}`}
                value={customAmount}
                onChange={handleCustomChange}
              />
            </div>

            <button className="btn-primary donate-submit-btn">
              Proceed to Donate
            </button>
            <p className="tax-note">*Donations are tax-exempted under Section 80G of the Income Tax Act.</p>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="transparency-section">
        <div className="content-container text-center">
          <h2>Transparency & Impact</h2>
          <div className="divider mx-auto"></div>
          <p className="reach-subtitle">How we utilize your funds to drive maximum change.</p>

          <div className="stats-grid">
            <div className="stat-box">
              <h3>{transparencyData.totalRaised}</h3>
              <p>Total Funds Raised</p>
            </div>
            <div className="stat-box spent">
              <h3>{transparencyData.totalSpent}</h3>
              <p>Total Funds Deployed</p>
            </div>
            <div className="stat-box impact">
              <h3>{transparencyData.livesChanged}</h3>
              <p>Lives Changed</p>
            </div>
          </div>

          <div className="progress-bars-container">
            {transparencyData.breakdown.map((item, index) => (
              <div className="progress-row" key={index}>
                <div className="progress-label">
                  <span>{item.category}</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="progress-track">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer & Partner CTAs */}
      <section className="action-ctas-section">
        <div className="content-container">
          <div className="cta-grid">
            <div className="cta-card volunteer-card fade-in-up">
              <h2>Give Your Time</h2>
              <p>Join our on-ground teams for health camps, training workshops, and awareness drives. Your skills can shape a better tomorrow.</p>
              <button className="btn-outline-dark">Become a Volunteer</button>
            </div>
            
            <div className="cta-card partner-card fade-in-up">
              <h2>Collaborate With Us</h2>
              <p>We actively seek CSR partnerships, institutional collaborations, and corporate sponsors to scale our impact models.</p>
              <button className="btn-secondary">Partner With Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportUs;