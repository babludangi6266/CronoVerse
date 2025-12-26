// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';
// import '../../styles/about.css';

// const About = () => {
//   return (
//     <section className="about-section">
//       <div className="container">
//         <div className="about-grid">
//           <div className="about-image-col">
//             <div className="img-wrapper">
//                {/* Replace with office image */}
//                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Lexa" />
//                <div className="experience-badge">
//                  <span className="years">3+</span>
//                  <span className="text">Years of Excellence</span>
//                </div>
//             </div>
//           </div>
          
//           <div className="about-content">
//             <span className="section-subtitle">Why Choose Lexa?</span>
//             <h2>We Build Solutions That <span className="gradient-text">Last.</span></h2>
//             <p>
//               At Lexa Technologies, we don't just deliver projects; we build partnerships. 
//               Our "Future-Proof" methodology ensures that the software we build today 
//               scales effortlessly with your business tomorrow.
//             </p>

//             <div className="features-grid">
//               <div className="feature-item">
//                 <FaCheckCircle className="check-icon" />
//                 <div>
//                   <h4>Agile Methodology</h4>
//                   <p>Weekly sprints and transparent updates.</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <FaCheckCircle className="check-icon" />
//                 <div>
//                   <h4>Scalable Architecture</h4>
//                   <p>Built to handle millions of users.</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <FaCheckCircle className="check-icon" />
//                 <div>
//                   <h4>24/7 Support</h4>
//                   <p>We are always here when you need us.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { FaCheckCircle, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import '../../styles/about.css';

const About = () => {
  
  const leaders = [
    {
      id: 1,
      name: "Jacky Mohanty", // REPLACE WITH REAL NAME
      role: "Founder & CEO",
      image: "/images/jacky.png", // REPLACE WITH REAL PHOTO
      linkedin: "https://www.linkedin.com/in/jackie-mohanty-9214391b2/"
    },
    {
      id: 2,
      name: "Bablu Dangi", // REPLACE WITH REAL NAME
      role: "Co-Founder & CTO",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHMIEo9mFohIA/profile-displayphoto-scale_400_400/B56ZoJu3TlKIAg-/0/1761099872653?e=1768435200&v=beta&t=oLFkQMYQcVx1J0IYoo7eVRjU5KFVARtklbyOhcMEjzA", // REPLACE WITH REAL PHOTO
      linkedin: "https://www.linkedin.com/in/bablu-dangi-ba8a01259/"
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        
        {/* --- PART 1: COMPANY INFO --- */}
        <div className="about-grid">
          {/* Left Side: Image with Badge */}
          <div className="about-image-col">
            <div className="img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Lexa Office" 
                className="main-about-img"
              />
              <div className="floating-badge">
                <span className="badge-number">3+</span>
                <span className="badge-text">Years of <br/> Innovation</span>
              </div>
              {/* Decorative dots behind */}
              <div className="dots-deco"></div>
            </div>
          </div>
          
          {/* Right Side: Text Content */}
          <div className="about-content">
            <span className="section-label">WHO WE ARE</span>
            <h2>
              We Build Solutions That <br />
              <span className="gradient-text">Define The Future.</span>
            </h2>
            <p className="about-desc">
              At Lexa Technologies, we don't just deliver code; we deliver <b>business growth</b>. 
              Our "Future-Proof" methodology ensures that the software we build today 
              scales effortlessly with your vision tomorrow.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <div className="icon-circle"><FaCheckCircle /></div>
                <div>
                  <h4>Agile Methodology</h4>
                  <p>Weekly sprints & transparent updates.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-circle"><FaCheckCircle /></div>
                <div>
                  <h4>Scalable Architecture</h4>
                  <p>Built to handle millions of users.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-circle"><FaCheckCircle /></div>
                <div>
                  <h4>24/7 Support</h4>
                  <p>We are always here when you need us.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 2: LEADERSHIP TEAM --- */}
        <div className="team-section">
          <div className="section-header-small">
            <h3>Meet The Visionaries</h3>
            <div className="line-separator"></div>
          </div>

          <div className="founders-grid">
            {leaders.map((leader) => (
              <div key={leader.id} className="founder-card">
                <div className="founder-img-box">
                  <img src={leader.image} alt={leader.name} />
                  
                  {/* Hover Overlay */}
                  <div className="social-overlay">
                    <a 
                      href={leader.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-btn"
                    >
                      <FaLinkedinIn />
                      <span>View Profile</span>
                    </a>
                  </div>
                </div>
                
                <div className="founder-info">
                  <h4>{leader.name}</h4>
                  <span className="founder-role">{leader.role}</span>
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