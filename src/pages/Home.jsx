import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import useScrollReveal from '../hooks/useScrollReveal';
import { recentEvents } from '../data/mockData';
import { projectsData } from '../data/content';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import './Home.css';

// --- Sub-component: Impact Counter ---
const ImpactCounter = ({ target, label }) => {
  const [ref, isInView] = useInView();
  const count = useCounter(target, 2500, isInView);
  const formattedCount = count.toLocaleString('en-IN');

  return (
    <div className={`counter-box ${isInView ? 'fade-in-up' : 'hidden'}`} ref={ref}>
      <h3 className="counter-number">{formattedCount}+</h3>
      <p className="counter-label">{label}</p>
    </div>
  );
};

const Home = () => {
  const [eventIndex, setEventIndex] = useState(0);
  const projectsRef = useScrollReveal();
  const eventsRef = useScrollReveal();

  const nextEvent = () => setEventIndex((prev) => (prev + 1) % recentEvents.length);
  const prevEvent = () => setEventIndex((prev) => (prev - 1 + recentEvents.length) % recentEvents.length);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-wrapper">
          <ImagePlaceholder
            src="https://static.wixstatic.com/media/5a7f9b_ee88cb53d5cd45ad8260b9fe6ced775c~mv2.jpeg"
            height="100%"
            width="100%"
            alt="Hero Background"
          />
          <div className="hero-bg-overlay"></div>
        </div>

        <div className="hero-content fade-in-up-fast">
          <h2>Empowering Women.<br/>Transforming <em>Lives</em>.</h2>
          <p>Rooted in community wisdom, we drive menstrual equity, livelihood generation, and sustainable rural development through Gobar-dhan.</p>
          <div className="hero-ctas">
            <Link to="/support-us" className="btn-primary">Support Us</Link>
            <Link to="/contact" className="btn-outline">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* Impact Bar */}
      <section className="impact-section">
        <div className="impact-container">
          <ImpactCounter target={25000} label="Girls & Women Reached" />
          <ImpactCounter target={2500000} label="Pads Distributed" />
          <ImpactCounter target={500} label="Bovine Rescued" />
          <ImpactCounter target={100} label="Gaushalas Trained" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" ref={projectsRef}>
        <div className="projects-header">
          <h2 className="sr-hidden">Our Core Projects</h2>
          <p className="sr-hidden sr-delay-1">Discover the impactful projects driving our mission forward.</p>
        </div>
        <div className="projects-grid">
          {Object.entries(projectsData).map(([id, project], i) => (
            <div key={id} className={`project-card sr-hidden sr-delay-${Math.min(i + 1, 4)}`}>
              <ImagePlaceholder src={project.heroImage} height="200px" alt={project.title} />
              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.summary.substring(0, 120)}...</p>
                <Link to={`/${id}`} className="btn-outline-dark">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Carousel */}
      <section className="events-section" ref={eventsRef}>
        <div className="events-header-container">
          <h2 className="sr-hidden">Recent Events</h2>
          <div className="carousel-controls">
            <button onClick={prevEvent} className="ctrl-btn">◀</button>
            <button onClick={nextEvent} className="ctrl-btn">▶</button>
          </div>
        </div>

        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${eventIndex * 100}%)` }}
          >
            {recentEvents.map((ev) => (
              <div className="carousel-slide" key={ev.id}>
                <div className="event-card-interactive">
                  <ImagePlaceholder
                    src={ev.image}
                    height="180px"
                    alt={ev.title}
                    className="event-image"
                  />
                  <div className="event-card-content">
                    <div className="event-date">{ev.date}</div>
                    <h4>{ev.title}</h4>
                    <p>{ev.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="events-cta">
          <Link to="/media" className="btn-outline-dark">See All Events</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
