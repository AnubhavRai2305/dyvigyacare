import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mockData';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterYear, setFilterYear] = useState('All');

  // Filter Logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || post.category === filterCategory;
    const matchesYear = filterYear === 'All' || post.year === filterYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <div className="blog-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="header-content fade-in-up-fast">
          <h1>Journal & Stories</h1>
          <div className="divider"></div>
          <p>Insights, updates, and stories from the ground.</p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="controls-section">
        <div className="controls-container">
          <input 
            type="text" 
            placeholder="Search articles or keywords..." 
            className="filter-input search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select 
            className="filter-input select-box" 
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="All">All Topics</option>
            <option value="Menstruation">Menstruation</option>
            <option value="Livelihood">Livelihood</option>
            <option value="Gobar-dhan">Gobar-dhan</option>
            <option value="Reports">Reports & News</option>
          </select>

          <select 
            className="filter-input select-box"
            value={filterYear} 
            onChange={(e) => setFilterYear(e.target.value)}
          >
            <option value="All">All Years</option>
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-list-section">
        <div className="content-container">
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article key={post.id} className="blog-card fade-in-up">
                  <Link to={post.link} className="blog-image-link">
                    <ImagePlaceholder 
                      src={post.image} 
                      height="250px" 
                      alt={post.title} 
                      className="blog-thumbnail"
                    />
                    <div className="blog-category-badge">{post.category}</div>
                  </Link>
                  
                  <div className="blog-card-content">
                    <div className="blog-meta">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </div>
                    <Link to={post.link}>
                      <h3 className="blog-title">{post.title}</h3>
                    </Link>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <Link to={post.link} className="read-more-link">
                      Read Article <span className="arrow">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No articles found for your selection.</h3>
              <p>Try adjusting your search or filters.</p>
              <button 
                className="btn-outline-dark"
                onClick={() => {
                  setSearchTerm('');
                  setFilterCategory('All');
                  setFilterYear('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;