
import React from 'react';
import '../../styles/hero.css';
const Hero = () => {
  return (
    <section className="hero">
      {/* Video Background */}
      <div className="video-background">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/videos/hero-poster.jpg" // Fallback image
          className="hero-video"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Animated Elements */}
      <div className="hero-graphics">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
        <div className="pulse-ring ring-1"></div>
        <div className="pulse-ring ring-2"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-text">
            
            
            <h1 className="hero-title">
              Build The
              <span className="gradient-text"> Future</span>
              <br />
              With ChronoVerse
            </h1>
            
            <p className="hero-subtitle">
              We transform visionary ideas into scalable digital experiences that drive growth, 
              engage users, and stand the test of time.
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button className="btn btn-primary with-glow" onClick={() => {
        const message = "Hi! I saw your portfolio and I'm interested in discussing a project with you.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/+919650280857?text=${encodedMessage}`, '_blank');
      }}
    >
                Start Your Project
              </button>

              <button className="btn btn-secondary with-icon">
                <span>📱</span>
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-icon">✅</div>
                <span>100% Client Satisfaction</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">⚡</div>
                <span>Fast Delivery</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">🛡️</div>
                <span>Secure & Scalable</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - Floating Devices */}
          <div className="hero-visual">
            <div className="floating-devices">
              <div className="device laptop">
                <div className="screen">
                  <div className="screen-content">
                    <div className="code-line animated"></div>
                    <div className="code-line animated delay-1"></div>
                    <div className="code-line animated delay-2"></div>
                  </div>
                </div>
              </div>
              <div className="device mobile">
                <div className="screen">
                  <div className="app-interface">
                    <div className="app-header"></div>
                    <div className="app-content">
                      <div className="app-item"></div>
                      <div className="app-item"></div>
                      <div className="app-item"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Tech Elements */}
            <div className="tech-elements">
              <div className="tech-element element-1">⚡</div>
              <div className="tech-element element-2">🔒</div>
              <div className="tech-element element-3">🚀</div>
              <div className="tech-element element-4">💡</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Discover More</span>
        <div className="scroll-arrow"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
    </section>
  );
};

export default Hero;