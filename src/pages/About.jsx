import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { timelineData, testimonialsData } from '../data/mockData';
import './About.css';

/* ── Real images from dyvigyacare.in (wixstatic CDN) ─── */
const IMG = {
  hero: 'https://static.wixstatic.com/media/5a7f9b_58a0d30832944f429451a7dd4b805baf~mv2.jpg/v1/fill/w_1400,h_700,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_58a0d30832944f429451a7dd4b805baf~mv2.jpg',
  founder: 'https://static.wixstatic.com/media/5a7f9b_d9627efd95664ef5806a67eb1023d83c~mv2.jpg/v1/fill/w_700,h_800,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_d9627efd95664ef5806a67eb1023d83c~mv2.jpg',
  impact1: 'https://static.wixstatic.com/media/5a7f9b_3021c3e1447d46eab66bf9b7a1da0990~mv2.jpg/v1/fill/w_700,h_500,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_3021c3e1447d46eab66bf9b7a1da0990~mv2.jpg',
  impact2: 'https://static.wixstatic.com/media/5a7f9b_def53b78c5714b68a4ca60f05e581531~mv2.jpg/v1/fill/w_700,h_500,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_def53b78c5714b68a4ca60f05e581531~mv2.jpg',
  impact3: 'https://static.wixstatic.com/media/5a7f9b_6d4bf3bc01ad4e9c8080ddd976a4a7bd~mv2.jpg/v1/fill/w_700,h_500,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_6d4bf3bc01ad4e9c8080ddd976a4a7bd~mv2.jpg',
  gallery1: 'https://static.wixstatic.com/media/5a7f9b_d42b6a6f0aba43cb84cfdfcaafc29fd8~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_d42b6a6f0aba43cb84cfdfcaafc29fd8~mv2.jpg',
  gallery2: 'https://static.wixstatic.com/media/5a7f9b_cb38a00ba9fd4f9a85ee41ee2e1e1cd3~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_cb38a00ba9fd4f9a85ee41ee2e1e1cd3~mv2.jpg',
  gallery3: 'https://static.wixstatic.com/media/5a7f9b_d2de7c8b5a214f3d89aff35f9219a9f7~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_d2de7c8b5a214f3d89aff35f9219a9f7~mv2.jpg',
  gallery4: 'https://static.wixstatic.com/media/5a7f9b_3f86c0d12c9541d4b6e2ef6a0e77a9c3~mv2.jpg/v1/fill/w_600,h_400,al_c,q_85,usm_0.33_1.00_0.01,enc_avif,quality_auto/5a7f9b_3f86c0d12c9541d4b6e2ef6a0e77a9c3~mv2.jpg',
};

const STATS = [
  { value: '80,000+', label: 'Lives Impacted' },
  { value: '500+', label: 'Villages Reached' },
  { value: '7+', label: 'Years of Service' },
  { value: '20+', label: 'Awards Won' },
];

const VALUES = [
  { icon: '🌱', title: 'Dignity First', desc: 'Every programme begins with respect — for the person, their body, and their choices.' },
  { icon: '⚡', title: 'Community Led', desc: 'Solutions designed with communities, not just for them. Local wisdom drives every decision.' },
  { icon: '♻️', title: 'Eco Commitment', desc: 'Sustainable practices woven into each initiative — from biodegradable pads to cow-dung crafts.' },
  { icon: '🤝', title: 'Radical Inclusion', desc: 'Reaching the last mile — prisoners, tribal women, and the most marginalised voices.' },
];

/* Simple intersection-observer hook */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const RevealBox = ({ children, className = '', delay = 0 }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-box ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const About = () => (
  <div className="about-page">

    {/* ── Hero ─────────────────────────────────────────── */}
    <section className="about-hero" style={{ backgroundImage: `url(${IMG.hero})` }}>
      <div className="about-hero-overlay" />
      <div className="about-hero-content">
        <p className="about-eyebrow">Who We Are</p>
        <h1 className="about-hero-title">Rooted in Community.<br />Driven by Purpose.</h1>
        <p className="about-hero-sub">
          Dyvigya Care Wellness Foundation is on a mission to empower women and
          marginalised communities through menstrual equity, sustainable livelihoods,
          and eco-innovation.
        </p>
        <div className="about-hero-cta">
          <Link to="/support-us" className="btn-primary">Support Our Work</Link>
          <Link to="/causes/menstruation" className="btn-outline-light">Our Causes</Link>
        </div>
      </div>
    </section>

    {/* ── Impact Numbers ───────────────────────────────── */}
    <section className="about-stats-bar">
      {STATS.map((s, i) => (
        <RevealBox key={i} className="about-stat" delay={i * 80}>
          <strong className="about-stat-value">{s.value}</strong>
          <span className="about-stat-label">{s.label}</span>
        </RevealBox>
      ))}
    </section>

    {/* ── Mission & Vision ─────────────────────────────── */}
    <section className="about-mv-section">
      <div className="about-container about-mv-grid">
        <RevealBox className="about-mv-text">
          <p className="about-section-eyebrow">Our Foundation</p>
          <h2 className="about-section-title">Why We Exist</h2>
          <p className="about-mv-body">
            Born from witnessing the everyday inequities faced by rural women in Madhya Pradesh,
            Dyvigya Care was founded on the conviction that access to menstrual health, dignified
            income, and a clean environment are not luxuries — they are rights.
          </p>
          <p className="about-mv-body">
            We bridge the gap between grassroots challenges and sustainable solutions through
            programmes built with communities, not just for them.
          </p>
        </RevealBox>
        <div className="about-mv-cards">
          <RevealBox className="mv-card mission-card" delay={100}>
            <div className="mv-card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To empower women and marginalised communities through menstrual equity, sustainable livelihood generation, and eco-friendly Gobar-dhan initiatives.</p>
          </RevealBox>
          <RevealBox className="mv-card vision-card" delay={200}>
            <div className="mv-card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>A society where every woman has dignified healthcare, financial independence, and where rural economies thrive in harmony with nature.</p>
          </RevealBox>
        </div>
      </div>
    </section>



    {/* ── Core Values ──────────────────────────────────── */}
    <section className="about-values-section">
      <div className="about-container">
        <RevealBox className="about-section-header">
          <p className="about-section-eyebrow">What Guides Us</p>
          <h2 className="about-section-title">Our Core Values</h2>
        </RevealBox>
        <div className="about-values-grid">
          {VALUES.map((v, i) => (
            <RevealBox key={i} className="value-card" delay={i * 80}>
              <span className="value-icon">{v.icon}</span>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>

    {/* ── Timeline ─────────────────────────────────────── */}
    <section className="about-timeline-section">
      <div className="about-container">
        <RevealBox className="about-section-header">
          <p className="about-section-eyebrow">Since 2018</p>
          <h2 className="about-section-title">Journey of Impact</h2>
        </RevealBox>
        <div className="about-timeline">
          {timelineData.map((item, index) => (
            <RevealBox
              key={index}
              className={`about-timeline-item ${index % 2 === 0 ? 'tl-left' : 'tl-right'}`}
              delay={index * 100}
            >
              <div className="tl-year">{item.year}</div>
              <div className="tl-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>

    {/* ── Work In Images ───────────────────────────────── */}
    <section className="about-work-section">
      <div className="about-container">
        <RevealBox className="about-section-header">
          <p className="about-section-eyebrow">On the Ground</p>
          <h2 className="about-section-title">Our Work in Action</h2>
        </RevealBox>
        <div className="about-work-grid">
          <RevealBox className="work-card work-card-large">
            <img src={IMG.impact1} alt="Ayodhya Deepotsav — 1.5 lakh eco-diyas" loading="lazy" />
            <div className="work-card-overlay">
              <span className="work-card-tag">Livelihood</span>
              <h3>1.5 Lakh Diyas for Ayodhya Deepotsav</h3>
            </div>
          </RevealBox>
          <RevealBox className="work-card" delay={80}>
            <img src={IMG.impact2} alt="Operation Rakshasutra artisans" loading="lazy" />
            <div className="work-card-overlay">
              <span className="work-card-tag">Livelihood</span>
              <h3>Operation Rakshasutra</h3>
            </div>
          </RevealBox>
          <RevealBox className="work-card" delay={160}>
            <img src={IMG.impact3} alt="Menstrual awareness session in school" loading="lazy" />
            <div className="work-card-overlay">
              <span className="work-card-tag">Menstrual Equity</span>
              <h3>Awareness in Government Schools</h3>
            </div>
          </RevealBox>
        </div>
      </div>
    </section>

    {/* ── Founder ──────────────────────────────────────── */}
    <section className="about-founder-section">
      <div className="about-container founder-grid">
        <RevealBox className="founder-img-wrap">
          <img src={IMG.founder} alt="Anubhav — Founder, Dyvigya Care" loading="lazy" />
          <div className="founder-img-badge">Founder &amp; Director</div>
        </RevealBox>
        <RevealBox className="founder-text" delay={120}>
          <p className="about-section-eyebrow">Meet The Founder</p>
          <h2 className="founder-name">Vijya </h2>
          <div className="founder-divider" />
          <p className="founder-bio">
            At 27, Vijya built Dyvigya Care from a single menstrual health drive in a government
            school to a multi-programme foundation impacting over 80,000 lives. Driven by the belief
            that dignity is non-negotiable, she works at the intersection of health, livelihood, and
            ecology — partnering with governments, corporates, and communities alike.
          </p>
          <p className="founder-bio">
            His work has earned recognition at the national level, including the National Women
            Empowerment Award and the Swachh Bharat Excellence Award.
          </p>
          <div className="founder-awards">
            <h4>Awards &amp; Recognition</h4>
            <ul>
              <li>🏆 Madhya Pradesh Best NGO Award — 2025</li>
              <li>🏆 National Women Empowerment Award — 2024</li>
              <li>🏆 Swachh Bharat Excellence Award — 2024</li>
              <li>🏆 Social Impact Pioneer – Youth Icon — 2023</li>
              <li>🏆 Green India Award – Eco Innovations — 2023</li>
            </ul>
          </div>
        </RevealBox>
      </div>
    </section>

    {/* ── Testimonials ─────────────────────────────────── */}
    <section className="about-testi-section">
      <div className="about-container">
        <RevealBox className="about-section-header">
          <p className="about-section-eyebrow">From the Community</p>
          <h2 className="about-section-title" style={{ color: '#fff' }}>Voices of Change</h2>
        </RevealBox>
        <div className="testi-grid">
          {testimonialsData.map((t) => (
            <RevealBox key={t.id} className="testi-card">
              <div className="testi-quote-mark">"</div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <strong>{t.name}</strong>
                <span>{t.title}</span>
              </div>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ──────────────────────────────────────────── */}
    <section className="about-cta-section">
      <div className="about-container about-cta-inner">
        <RevealBox className="about-cta-text">
          <h2>Ready to Make a Difference?</h2>
          <p>Join thousands of supporters building a more equitable India, one community at a time.</p>
        </RevealBox>
        <RevealBox className="about-cta-buttons" delay={100}>
          <Link to="/support-us" className="btn-primary">Donate Now</Link>
          <Link to="/contact" className="btn-outline-dark">Partner With Us</Link>
        </RevealBox>
      </div>
    </section>

  </div>
);

export default About;