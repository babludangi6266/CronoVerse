// src/components/sections/About.jsx
import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      role: 'Lead Full-Stack Developer',
      expertise: 'React, Node.js, Cloud Architecture',
      bio: '8+ years building scalable web applications for Fortune 500 companies',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHMIEo9mFohIA/profile-displayphoto-crop_800_800/B56ZoJu3TlKIAI-/0/1761099872574?e=1764201600&v=beta&t=MbK_EdN_j2OAAeiGOtS1MW2GVOCSMmQtfXB-JKR0LaM'
    },
    {
      name: 'Sarah Chen',
      role: 'Mobile Development Lead',
      expertise: 'React Native, Flutter, iOS/Android',
      bio: 'Specialized in cross-platform mobile solutions with 6+ years experience',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQGHoOsmgbh3RQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685289525051?e=1764201600&v=beta&t=mUIEXCS6HwPwESuIQAwrpUuSy_KyZFjhYT1l5WBSnzo'
    },
    {
      name: 'Marcus Johnson',
      role: 'UI/UX Architect',
      expertise: 'Figma, Design Systems, User Research',
      bio: 'Creating intuitive user experiences that drive engagement and conversion',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Deep dive into your business goals, technical requirements, and user needs',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and interactive prototypes for validation',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous integration and quality assurance',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Launch & Scale',
      description: 'Deployment, monitoring, and ongoing optimization for growth',
      icon: '🚀'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Philosophy</h2>
          <p>Building digital products that stand the test of time</p>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <div className="vision-content">
            <h3>The ChronoVerse Vision</h3>
            <p>
              In a world where technology evolves at lightning speed, we build solutions that 
              remain relevant, scalable, and effective for years to come. Our "future-proof" 
              approach means your digital products won't just work today—they'll adapt and 
              grow with your business tomorrow.
            </p>
            <div className="vision-points">
              <div className="vision-point">
                <span className="point-icon">⏳</span>
                <div>
                  <h4>Time-Tested Quality</h4>
                  <p>We write clean, maintainable code that stands the test of time</p>
                </div>
              </div>
              <div className="vision-point">
                <span className="point-icon">🚀</span>
                <div>
                  <h4>Future-Proof Architecture</h4>
                  <p>Scalable solutions designed to evolve with your business needs</p>
                </div>
              </div>
              <div className="vision-point">
                <span className="point-icon">🔮</span>
                <div>
                  <h4>Innovation-Driven</h4>
                  <p>Staying ahead of technology trends to keep your competitive edge</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="process-section">
          <h3>Our Development Process</h3>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-header">
                  <span className="step-number">{step.step}</span>
                  <span className="step-icon">{step.icon}</span>
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <img src={member.avatar} alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <p className="member-expertise">{member.expertise}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;