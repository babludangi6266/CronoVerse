import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLaptopCode, FaMobileAlt, FaCloud, FaBrain, FaPaintBrush, FaShieldAlt, 
  FaPlus, FaMinus, FaServer, FaCodeBranch, FaRocket, FaCheckCircle, 
  FaArrowRight, FaCogs, FaDatabase, FaLayerGroup 
} from 'react-icons/fa';
import Contact from '../components/sections/Contact';
import '../styles/servicesPage.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "web",
      title: "Custom Web Ecosystems",
      tagline: "High-Performance MERN Architectures",
      desc: "We engineer digital assets, not just websites. Using the MERN stack (MongoDB, Express, React, Node.js), we build scalable SaaS platforms, dynamic e-commerce engines, and Progressive Web Apps (PWAs) that load instantly and rank high.",
      features: ["Server-Side Rendering (Next.js)", "Real-Time Socket Streams", "API-First Microservices", "PWA Offline Mode"],
      icon: <FaLaptopCode />,
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "blue"
    },
    {
      id: "mobile",
      title: "Mobile App Engineering",
      tagline: "Native Performance, Cross-Platform Code",
      desc: "Reach customers on iOS and Android simultaneously without doubling your budget. We leverage Flutter and React Native to deliver 60fps experiences with biometric security, offline sync, and deep hardware integration.",
      features: ["Cross-Platform (Flutter/RN)", "Offline-First Architecture", "Biometric Auth Integration", "App Store Optimization"],
      icon: <FaMobileAlt />,
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "purple"
    },
    {
      id: "cloud",
      title: "Enterprise Cloud & DevOps",
      tagline: "Serverless, Scalable, Secure",
      desc: "Infrastructure that scales with your ambition. We design auto-scaling architectures on AWS and implement CI/CD pipelines that automate deployment, ensuring zero downtime and global data redundancy.",
      features: ["AWS / Docker / Kubernetes", "Automated CI/CD Pipelines", "Serverless Lambda Functions", "Cost-Optimization Audits"],
      icon: <FaCloud />,
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "orange"
    },
    {
      id: "ai",
      title: "AI & Intelligent Automation",
      tagline: "Algorithmic Business Logic",
      desc: "Future-proof your operations with bespoke AI models. From OpenAI-powered customer support agents to predictive analytics engines, we automate the complex to let you focus on the strategic.",
      features: ["Custom LLM Integration", "Predictive Analytics Models", "Automated Workflows", "Computer Vision Systems"],
      icon: <FaBrain />,
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "green"
    },
    {
      id: "design",
      title: "UI/UX & Product Design",
      tagline: "Conversion-Driven Interfaces",
      desc: "We don't start with code; we start with empathy. Our design process involves deep user research, wireframing, and high-fidelity prototyping in Figma to ensure every pixel serves a business purpose.",
      features: ["User Journey Mapping", "Interactive Figma Prototypes", "Design Systems & UI Kits", "WCAG Accessibility"],
      icon: <FaPaintBrush />,
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "pink"
    },
    {
      id: "security",
      title: "Cybersecurity Audits",
      tagline: "Fortress-Grade Protection",
      desc: "In an era of data breaches, security is not an option. We conduct rigorous penetration testing, vulnerability assessments, and code reviews to ensure your stack complies with GDPR, HIPAA, and OWASP standards.",
      features: ["Penetration Testing", "Vulnerability Assessment", "Secure Code Review", "Encryption Standards"],
      icon: <FaShieldAlt />,
      img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      gradient: "red"
    }
  ];

  const faqData = [
    { q: "How do you estimate project costs?", a: "We break down projects into milestones. Pricing is based on feature complexity and timeline. We offer Fixed-Price for defined scopes and Hourly for evolving products." },
    { q: "What is your preferred tech stack?", a: "For web, we use the MERN stack (MongoDB, Express, React, Node.js) or Next.js. For mobile, we use Flutter or React Native. For cloud, AWS is our standard." },
    { q: "Do you provide post-launch support?", a: "Yes, every project includes 1 months of bug-fixing support. We also offer Annual Maintenance Contracts (AMC) for long-term updates." },
    { q: "How long does an MVP take?", a: "A standard MVP typically takes 3-6 weeks depending on complexity. Enterprise solutions generally range from 2-5 months." }
  ];

  return (
    <div className="srv-page-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="srv-hero-section">
        <div className="srv-bg-orb srv-orb-1"></div>
        <div className="srv-bg-orb srv-orb-2"></div>
        <div className="srv-grid-overlay"></div>

        <div className="srv-container srv-hero-split">
          
          {/* LEFT: Text */}
          <motion.div 
            className="srv-hero-text-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="srv-hero-pill"><FaLayerGroup /> End-to-End Development</div>
            <h1>
              Engineering the <br />
              <span className="srv-text-gradient">Digital Future.</span>
            </h1>
            <p className="srv-hero-sub">
              We don't just write code; we build business assets. Explore our comprehensive 
              suite of technical services designed to scale from Startup to Enterprise.
            </p>
            <button className="srv-btn-primary">
              Start a Project <FaArrowRight />
            </button>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div 
            className="srv-hero-img-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="srv-hero-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Engineering" 
                className="srv-main-hero-img"
              />
              <div className="srv-float-card">
                 <FaRocket className="srv-icon-cyan"/>
                 <div>
                   <strong>Deployment Ready</strong>
                   <span>Status: Live</span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- TECH MARQUEE --- */}
      <div className="srv-tech-marquee">
        <div className="srv-marquee-track">
          <span>React.js</span> <span className="srv-dot">•</span>
          <span>Node.js</span> <span className="srv-dot">•</span>
          <span>AWS</span> <span className="srv-dot">•</span>
          <span>Flutter</span> <span className="srv-dot">•</span>
          <span>Python</span> <span className="srv-dot">•</span>
          <span>Docker</span> <span className="srv-dot">•</span>
          <span>Next.js</span> <span className="srv-dot">•</span>
          <span>TypeScript</span> <span className="srv-dot">•</span>
          <span>MongoDB</span> <span className="srv-dot">•</span>
          <span>GraphQL</span> <span className="srv-dot">•</span>
          <span>Kubernetes</span> <span className="srv-dot">•</span>
        </div>
      </div>

      {/* --- SERVICES LIST --- */}
      <section className="srv-services-list">
        <div className="srv-container">
          {services.map((service, index) => (
            <motion.div 
              className={`srv-service-row ${index % 2 !== 0 ? 'srv-reverse' : ''}`}
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Text Side */}
              <div className="srv-service-text">
                <div className={`srv-icon-box srv-grad-${service.gradient}`}>
                  {service.icon}
                </div>
                <span className={`srv-tag-text srv-text-${service.gradient}`}>{service.tagline}</span>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                
                <div className="srv-feature-grid">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="srv-feat-pill">
                      <FaCheckCircle className={`srv-check-${service.gradient}`} /> {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="srv-service-img-col">
                <div className="srv-img-frame">
                  <img src={service.img} alt={service.title} />
                  <div className={`srv-glow-backdrop srv-bg-${service.gradient}`}></div>
                  
                  <div className="srv-service-float-card">
                    <div className="srv-card-header">
                      <div className="srv-dots"><span></span><span></span><span></span></div>
                    </div>
                    <div className="srv-card-content">
                      <FaRocket className={`srv-icon-${service.gradient}`} />
                      <div>
                        <strong>System Active</strong>
                        <span>Performance: 100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROCESS ROADMAP --- */}
      <section className="srv-process-section">
        <div className="srv-container">
          <div className="srv-section-header">
            <h2>Our <span className="srv-text-white">Process</span></h2>
            <p>From concept to code in 4 steps.</p>
          </div>
          
          <div className="srv-process-steps">
            <div className="srv-step-card">
              <span className="srv-step-num">01</span>
              <h4>Discovery</h4>
              <p>We analyze your requirements and build the roadmap.</p>
            </div>
            <div className="srv-step-card">
              <span className="srv-step-num">02</span>
              <h4>Design</h4>
              <p>Wireframing and high-fidelity prototyping.</p>
            </div>
            <div className="srv-step-card">
              <span className="srv-step-num">03</span>
              <h4>Development</h4>
              <p>Agile sprints with bi-weekly updates.</p>
            </div>
            <div className="srv-step-card srv-highlight">
              <span className="srv-step-num">04</span>
              <h4>Launch</h4>
              <p>Deployment, testing, and go-live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="srv-faq-section">
        <div className="srv-container">
          <div className="srv-faq-layout">
            <div className="srv-faq-header">
              <h2>Frequently <br/>Asked <span className="srv-text-cyan">Questions</span></h2>
              <p>Everything you need to know about working with Lexa.</p>
              <button className="srv-btn-primary">Chat on WhatsApp <FaArrowRight /></button>
            </div>
            
            <div className="srv-faq-list">
              {faqData.map((item, i) => (
                <AccordionItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <div className="srv-stats-strip">
         <div className="srv-stat-item">
           <h3>50+</h3> <span>Projects</span>
         </div>
         <div className="srv-stat-item">
           <h3>98%</h3> <span>Retention</span>
         </div>
         <div className="srv-stat-item">
           <h3>3M+</h3> <span>Lines of Code</span>
         </div>
         <div className="srv-stat-item">
           <h3>24/7</h3> <span>Support</span>
         </div>
      </div>

      <Contact />
    </div>
  );
};

// FAQ Accordion
const AccordionItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`srv-accordion-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="srv-acc-head">
        <h4>{q}</h4>
        <span className="srv-toggle-icon">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="srv-acc-body"
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;