import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DetailTemplate.css';

const DetailTemplate = ({ data, type }) => {
  const hasSections = data?.sections && data.sections.length > 0;
  const hasFeatured = data?.featuredProject;

  // Build the tab list: featured project first, then sections
  const buildTabs = () => {
    const tabs = [];
    if (hasFeatured) {
      tabs.push({ id: 'featured-project', title: data.featuredProject.title, type: 'featured' });
    }
    if (hasSections) {
      data.sections.forEach((s) => tabs.push({ id: s.id, title: s.title, type: 'section' }));
    }
    return tabs;
  };

  const tabs = buildTabs();
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].id : '');

  // Reset to first tab whenever we navigate to a different cause page
  useEffect(() => {
    const newTabs = buildTabs();
    if (newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!data) return <div className="not-found">Data not found.</div>;

  const activeSection = hasSections
    ? data.sections.find((s) => s.id === activeTab)
    : null;
  const isFeaturedActive = activeTab === 'featured-project';
  const activeSectionIndex = hasSections ? data.sections.findIndex((s) => s.id === activeTab) : -1;

  return (
    <div className="detail-page-container">
      {/* Hero Section */}
      <section
        className="detail-hero"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      >
        <div className="detail-hero-overlay"></div>
        <div className="detail-hero-content">
          <h1 className="detail-title">{data.title}</h1>
          {data.summary && <p className="detail-summary">{data.summary}</p>}
        </div>
      </section>

      {/* Intro Paragraph */}
      {data.intro && (
        <section className="detail-intro-section">
          <div className="detail-intro-container">
            <p className="detail-intro-text">{data.intro}</p>
          </div>
        </section>
      )}

      {/* Impact Statistics Bar */}
      {data.stats && (
        <section className="detail-stats-bar">
          <div className="detail-stats-container">
            {data.stats.map((stat, index) => (
              <div key={index} className="detail-stat-item">
                <span className="detail-stat-icon">{stat.icon}</span>
                <h3 className="detail-stat-value">{stat.value}</h3>
                <p className="detail-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tab Navigation + Content */}
      {tabs.length > 0 ? (
        <div className="detail-tabs-wrapper">
          {/* Horizontal Tab Bar */}
          <nav className="detail-tabs-nav" aria-label="Page sections">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`detail-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </nav>

          {/* Tab Content Panel */}
          <div className="detail-tab-content">
            {/* Featured Project Panel */}
            {isFeaturedActive && hasFeatured && (
              <div className="tab-panel featured-panel">
                <div className="featured-grid">
                  <div className="featured-image">
                    <img src={data.featuredProject.image} alt={data.featuredProject.title} />
                  </div>
                  <div className="featured-text">
                    <h2 className="featured-title">{data.featuredProject.title}</h2>
                    <div className="featured-body">
                      {data.featuredProject.paragraphs.map((para, index) => (
                        <p key={index}>{para}</p>
                      ))}
                    </div>
                    {data.featuredProject.link && (
                      <Link to={data.featuredProject.link} className="btn-primary featured-cta">
                        Know More
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Section Panel */}
            {activeSection && (
              <div
                className={`tab-panel program-panel ${activeSectionIndex % 2 === 0 ? 'image-left' : 'image-right'}`}
              >
                <div className="program-grid">
                  <div className="program-image">
                    <img src={activeSection.image} alt={activeSection.title} />
                  </div>
                  <div className="program-text">
                    <h2 className="program-title">{activeSection.title}</h2>
                    <p className="program-description">{activeSection.description}</p>
                    <div className="program-stat-card">
                      <span className="program-stat-value">{activeSection.statValue}</span>
                      <span className="program-stat-label">{activeSection.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Fallback for causes without sections (livelihood, gobar-dhan) */
        <section className="detail-body-section">
          <div className="detail-body-container">
            <div className="detail-text-content">
              {data.paragraphs && data.paragraphs.map((para, index) => {
                const isHeading = para.startsWith("Project") || para.startsWith("Operation") || para.startsWith("Gaumay") || para.startsWith("Shristi");
                return isHeading ? (
                  <div key={index}>
                    <h2 className="detail-section-heading">{para.split(' is')[0]}</h2>
                    <p className="detail-paragraph">{para}</p>
                  </div>
                ) : (
                  <p key={index} className="detail-paragraph">{para}</p>
                );
              })}
            </div>
            <div className="detail-side-image">
              <img src={data.heroImage} alt="Focus Area Impact" />
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="detail-cta-section">
        <div className="detail-cta-container">
          <h2 className="cta-heading">Join Our Mission</h2>
          <p className="cta-text">Your support helps us bring lasting change to communities.</p>
          <Link to="/support-us" className="cta-button">Donate Now</Link>
        </div>
      </section>
    </div>
  );
};

export default DetailTemplate;
