import React, { useState, useMemo } from 'react';
import { events, awards, news } from '../data/mediaData';
import './Media.css';

/* ── tiny helpers ───────────────────────────────────────── */
const TABS = [
  { key: 'events',  label: 'Events'  },
  { key: 'awards',  label: 'Awards'  },
  { key: 'news',    label: 'News'    },
];

const ALL_CATEGORIES = {
  events: ['All', 'Menstrual Equity', 'Livelihood', 'Gobar-dhan'],
  awards: ['All', '2025', '2024', '2023', '2022'],
  news:   ['All', 'Award', 'Impact', 'Feature'],
};

const categoryKey = { events: 'category', awards: 'year', news: 'category' };

/* ── EventCard ──────────────────────────────────────────── */
const EventCard = ({ item }) => (
  <div className="mc-card event-card">
    <div className="mc-card-img-wrap">
      <img src={item.image} alt={item.title} loading="lazy" onError={e => { e.target.style.display = 'none'; }} />
      <span className="mc-badge">{item.category}</span>
    </div>
    <div className="mc-card-body">
      <p className="mc-date">📅 {item.date}</p>
      <h3 className="mc-title">{item.title}</h3>
      <p className="mc-desc">{item.description}</p>
    </div>
  </div>
);

/* ── AwardCard ──────────────────────────────────────────── */
const AwardCard = ({ item }) => (
  <div className="mc-card award-card">
    <div className="mc-card-img-wrap">
      <img src={item.image} alt={item.title} loading="lazy" onError={e => { e.target.style.display = 'none'; }} />
      <span className="mc-badge award-badge">🏆 {item.year}</span>
    </div>
    <div className="mc-card-body">
      <p className="mc-source">{item.awardedBy}</p>
      <h3 className="mc-title">{item.title}</h3>
      <p className="mc-desc">{item.description}</p>
    </div>
  </div>
);

/* ── NewsCard ───────────────────────────────────────────── */
const NewsCard = ({ item }) => (
  <a
    className="mc-card news-card"
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Read: ${item.title}`}
  >
    <div className="mc-card-img-wrap">
      <img src={item.image} alt={item.title} loading="lazy" onError={e => { e.target.style.display = 'none'; }} />
      <span className="mc-badge news-badge">{item.category}</span>
    </div>
    <div className="mc-card-body">
      <div className="news-meta">
        <span className="mc-source">{item.source}</span>
        <span className="mc-date">{item.date}</span>
      </div>
      <h3 className="mc-title">{item.title}</h3>
      <p className="mc-desc">{item.description}</p>
      <span className="news-read-more">Read Article →</span>
    </div>
  </a>
);

/* ── Main Media Component ───────────────────────────────── */
const Media = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [filter, setFilter]       = useState('All');
  const [search, setSearch]       = useState('');

  const dataMap = { events, awards, news };
  const items   = dataMap[activeTab];
  const cats    = ALL_CATEGORIES[activeTab];
  const key     = categoryKey[activeTab];

  const filtered = useMemo(() => {
    return items.filter(item => {
      const matchFilter = filter === 'All' || item[key] === filter;
      const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [items, filter, search, key]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFilter('All');
    setSearch('');
  };

  const renderCard = (item) => {
    if (activeTab === 'events') return <EventCard key={item.id} item={item} />;
    if (activeTab === 'awards') return <AwardCard key={item.id} item={item} />;
    return <NewsCard key={item.id} item={item} />;
  };

  const heroLabel = activeTab === 'events'
    ? 'Impact in Action'
    : activeTab === 'awards'
    ? 'Recognition & Honours'
    : 'Media Coverage';

  const heroDesc = activeTab === 'events'
    ? 'Every gathering, every session, every milestone — captured.'
    : activeTab === 'awards'
    ? 'Honours that reflect the dedication of every volunteer and beneficiary.'
    : 'Stories of change featured in national and regional media.';

  return (
    <div className="media-page">

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="media-hero">
        <div className="media-hero-content">
          <p className="media-eyebrow">Media Hub</p>
          <h1 className="media-hero-title">{heroLabel}</h1>
          <p className="media-hero-desc">{heroDesc}</p>
        </div>
        <div className="media-hero-wave" aria-hidden="true" />
      </section>

      {/* ── Tab Bar ─────────────────────────────────────── */}
      <nav className="media-tab-bar" role="tablist" aria-label="Media sections">
        {TABS.map(tab => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`media-tab-btn${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.label}
            <span className="media-tab-count">
              {dataMap[tab.key].length}
            </span>
          </button>
        ))}
      </nav>

      {/* ── Controls ────────────────────────────────────── */}
      <section className="media-controls">
        <div className="media-controls-inner">
          <input
            id="media-search"
            type="text"
            className="media-search"
            placeholder="Search…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search items"
          />
          <div className="media-filter-chips">
            {cats.map(cat => (
              <button
                key={cat}
                className={`filter-chip${filter === cat ? ' active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────── */}
      <section className="media-grid-section">
        {filtered.length > 0 ? (
          <div className={`media-cards-grid grid-${activeTab}`}>
            {filtered.map(renderCard)}
          </div>
        ) : (
          <div className="media-empty">
            <span className="media-empty-icon">🔍</span>
            <h3>No results found</h3>
            <p>Try a different search or filter.</p>
            <button className="btn-primary" onClick={() => { setFilter('All'); setSearch(''); }}>
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Media;