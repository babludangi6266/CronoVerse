
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaLinkedinIn, FaFingerprint, FaLayerGroup, FaBolt, FaGlobeAmericas, FaRocket, FaCode } from 'react-icons/fa';
import ShaderBackground from '../common/ShaderBackground';
import '../../styles/about.css';

const About = () => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingLines = [
    "From ideas in the morning to delivery by evening.",
    "Websites today. Apps in days. Not months.",
    "This is not a startup. This is a new era."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const leaders = [
    {
      id: 1, name: "Jackie Mohanty", role: "Founder",
      image: "/images/jacky.png", 
      linkedin: "https://www.linkedin.com/in/jackie-mohanty-9214391b2/"
    },
    {
      id: 2, name: "Bablu Dangi", role: "Co-Founder",
      image: "/images/bablu.jpg", 
      linkedin: "https://www.linkedin.com/in/bablu-dangi-ba8a01259/"
    }
  ];

  return (
    <div className="dark-theme-wrapper">
      
      {/* --- BACKGROUND GRAPHICS --- */}
      <div className="bg-glow top-left"></div>
      <div className="bg-glow bottom-right"></div>
      <div className="grid-overlay"></div>

 <header className="about-hero-centered">
        <div className="container">
          <motion.div 
            className="hero-centered-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge"><FaBolt /> LEXA TECHNOLOGIES</div>
            
            <h1 className="hero-title-mega">
              India’s Fastest <br/>
              <span className="gradient-text">Software Delivery</span> <br/>
              Company.
            </h1>
            
            <p className="hero-subtitle-centered">
              <strong>About Lexa Technologies:</strong> Learn about our mission, values, and the team driving the new era of tech.
            </p>
            
            <div className="hero-rotating-box">
              <div className="hero-line-center"></div>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={textIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rotating-text-centered"
                >
                  {rotatingLines[textIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- ABOUT: SPLIT IMAGE LAYOUT --- */}
      <section className="about-dark">
        <div className="container">
          <div className="split-layout">
            
            {/* Left Content */}
            <div className="about-text-content">
              <span className="section-tag">THE MANIFESTO</span>
              <h2>This is not a startup.<br/>This is a <span className="highlight-blue">new era.</span></h2>
              <p className="lead">
                Buying software from LEXA feels like buying a product, not starting a project.
              </p>
              <p className="sub-text">
                LEXA (Lexa Technologies) is a global IT solutions, consulting, and product development company redefining how the world builds software.
                We operate as a <b>delivery-first, culture-first</b> technology platform. While traditional companies take weeks to initiate, LEXA builds continuously.
              </p>

              <div className="tech-stack-pills">
                <span><FaCode/> Custom Web</span>
                <span><FaRocket/> Mobile Apps</span>
                <span><FaLayerGroup/> AI & Cloud</span>
              </div>
            </div>

            {/* Right Visual */}
            <div className="about-visual">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cyberpunk Workspace" 
                className="main-img"
              />
              <div className="floating-card">
                <h4>Same Day Delivery</h4>
                <div className="progress-bar"><div className="fill"></div></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VISION: GLASS BENTO GRID --- */}
      <section className="vision-dark">
        <ShaderBackground />
       <div className="container relative-z">
          <div className="section-header-left">
            <h3>Vision 2030</h3>
            <p>A Platform, Not A Prison.</p>
          </div>

          <div className="bento-grid">
            {/* Box 1: Main Vision */}
            <div className="bento-card large-card gradient-bg">
              <FaFingerprint className="card-icon"/>
              <h4>The New Global Era</h4>
              <p>We replace fear with ownership, control with trust, and employment with alignment. Work adapts to human energy, not the other way around.</p>
            </div>

            {/* Box 2: Culture Agreement */}
            <div className="bento-card tall-card glass-bg">
              <FaLayerGroup className="card-icon text-blue"/>
              <h4>Culture First</h4>
              <ul className="check-list">
                <li>You choose when you work</li>
                <li>Performance = Contribution</li>
                <li>No politics, no hierarchy</li>
                <li>No bonds, no drama</li>
              </ul>
            </div>

            {/* Box 3: Product Drops */}
            <div className="bento-card wide-card image-bg">
              <div className="overlay"></div>
              <div className="content">
                <h4>Cultural Drops</h4>
                <p>We release products like artists release music.</p>
                <span className="tag">4 Apps / 3 Months</span>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* --- MISSION (6-4 SYSTEM) --- */}
   {/* --- THE MANIFESTO & MISSION --- */}
      <section className="mission-centered-dark">
        <div className="container">
          
          <div className="mission-header-mega">
            <span className="section-tag-center">OUR MISSION</span>
            <h2>Replacing Outdated Systems.</h2>
            <p className="mission-lead">
              At LEXA, individuals don’t apply for jobs. <br/>
              <span className="highlight-blue">They associate with a platform.</span>
            </p>
          </div>

          {/* Core System Numbers */}
          <div className="mission-metrics-grid">
            <div className="metric-card">
              <div className="metric-val">6</div>
              <div className="metric-label">Hours / Day</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">4</div>
              <div className="metric-label">Days / Week</div>
            </div>
            <div className="metric-card">
              <div className="metric-val"><FaGlobeAmericas /></div>
              <div className="metric-label">100% Remote</div>
            </div>
          </div>

          {/* Philosophy Rules */}
          <div className="mission-rules-grid">
            <div className="rule-box">
              <h4>Skills &gt; Titles</h4>
              <p>We don't care about your past designations or degrees. We care about what you can build today.</p>
            </div>
            <div className="rule-box">
              <h4>Output &gt; Hours</h4>
              <p>We do not reward presence. We reward contribution. Ship high-quality code fast, then go live your life.</p>
            </div>
          </div>

          {/* Final Hiring Banner */}
          <div className="hiring-banner-mega">
            <h3>"No Resumes. No Interviews. Just Skills."</h3>
          </div>

        </div>
      </section>

      {/* --- TEAM --- */}
      <section className="team-dark">
        <div className="container">
          <h3 className="team-title">The Architects</h3>
          <div className="team-grid">
            {leaders.map((leader) => (
              <div key={leader.id} className="team-card">
                <div className="img-container">
                  <img src={leader.image} alt={leader.name} />
                  <div className="social-hover">
                    <a href={leader.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                  </div>
                </div>
                <div className="text-container">
                  <h4>{leader.name}</h4>
                  <p>{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;