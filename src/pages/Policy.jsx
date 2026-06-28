import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Policy.css';

const Policy = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('privacy');

  // Automatically switch tabs based on the URL path clicked in the footer
  useEffect(() => {
    if (location.pathname.includes('terms')) setActiveTab('terms');
    else if (location.pathname.includes('refund')) setActiveTab('refund');
    else if (location.pathname.includes('shipping')) setActiveTab('shipping');
    else setActiveTab('privacy');
  }, [location.pathname]);

  return (
    <div className="policy-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="header-content fade-in-up-fast">
          <h1>Legal & Policies</h1>
          <div className="divider"></div>
          <p>Transparency and commitment to your rights.</p>
        </div>
      </section>

      <section className="policy-content-section">
        <div className="content-container policy-layout">
          
          {/* Side Navigation */}
          <aside className="policy-sidebar fade-in-up">
            <button 
              className={`policy-tab ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              Privacy Policy
            </button>
            <button 
              className={`policy-tab ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              Terms & Conditions
            </button>
            <button 
              className={`policy-tab ${activeTab === 'shipping' ? 'active' : ''}`}
              onClick={() => setActiveTab('shipping')}
            >
              Shipping Policy
            </button>
            <button 
              className={`policy-tab ${activeTab === 'refund' ? 'active' : ''}`}
              onClick={() => setActiveTab('refund')}
            >
              Return & Refund Policy
            </button>
          </aside>

          {/* Policy Text Content */}
          <main className="policy-text-area fade-in-up">
            {activeTab === 'privacy' && (
              <div className="policy-document">
                <h2>Privacy Policy</h2>
                <p>Last updated: May 2026</p>
                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you make a donation, sign up for our newsletter, or contact us for volunteer opportunities. This may include your name, email address, phone number, and payment information.</p>
                <h3>2. How We Use Your Information</h3>
                <p>We use the information we collect to process donations, send you updates about our impact, respond to your inquiries, and comply with legal obligations (such as issuing 80G tax receipts).</p>
                <h3>3. Information Sharing</h3>
                <p>Dyvigya Care Wellness Foundation will never sell, rent, or trade your personal information with third parties. We only share information with trusted service providers necessary to operate our website and process payments securely.</p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="policy-document">
                <h2>Terms & Conditions</h2>
                <p>Last updated: May 2026</p>
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing and using the Dyvigya Care website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <h3>2. Intellectual Property</h3>
                <p>All content on this website, including text, graphics, logos, and images, is the property of Dyvigya Care Wellness Foundation and protected by international copyright laws.</p>
                <h3>3. User Conduct</h3>
                <p>You agree to use our website only for lawful purposes. You are prohibited from violating or attempting to violate the security of the website.</p>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="policy-document">
                <h2>Shipping Policy</h2>
                <p>Last updated: May 2026</p>
                <p><em>Note: This applies to any merchandise or Cow-dust products purchased directly through our foundation. For cowdust.co specific orders, please refer to their independent shipping policy.</em></p>
                <h3>1. Processing Time</h3>
                <p>All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays.</p>
                <h3>2. Shipping Rates & Delivery Estimates</h3>
                <p>Shipping charges for your order will be calculated and displayed at checkout. Delivery delays can occasionally occur due to rural logistical challenges.</p>
              </div>
            )}

            {activeTab === 'refund' && (
              <div className="policy-document">
                <h2>Return & Refund Policy</h2>
                <p>Last updated: May 2026</p>
                <h3>1. Donations</h3>
                <p>As a charitable organization, all donations made to Dyvigya Care Wellness Foundation are generally non-refundable. In the event of an erroneous duplicate deduction, please contact us within 7 days at info@dyvigyacare.org.</p>
                <h3>2. Merchandise Returns</h3>
                <p>We accept returns for damaged or defective merchandise within 14 days of delivery. The item must be unused and in the same condition that you received it.</p>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Policy;