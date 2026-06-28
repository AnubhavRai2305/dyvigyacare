import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Media from './pages/Media';
import SupportUs from './pages/SupportUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import CausePage from './pages/CausePage';
import ProjectPage from './pages/ProjectPage';

// Global Styles
import '../src/assets/css/global.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="dyc-app">
        <Header />
        
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/support-us" element={<SupportUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dynamic Route for Causes */}
            <Route path="/causes/:causeId" element={<CausePage />} />
            
            {/* Dynamic Route for Projects */}
            <Route path="/:projectId" element={<ProjectPage />} />
            {/* Map all policy footer links to the single Policy Hub page */}
            <Route path="/privacy-policy" element={<Policy />} />
            <Route path="/terms" element={<Policy />} />
            <Route path="/shipping" element={<Policy />} />
            <Route path="/refund" element={<Policy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;