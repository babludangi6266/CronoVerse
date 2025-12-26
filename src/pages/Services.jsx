import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLaptopCode, FaMobileAlt, FaCloud, FaBrain, FaPaintBrush, FaShieldAlt, 
  FaPlus, FaMinus, FaServer, FaCodeBranch, FaRocket 
} from 'react-icons/fa';
import Contact from '../components/sections/Contact';
import '../styles/servicesPage.css';

const Services = () => {
  // 1. Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 2. Data for Services
  const allServices = [
    {
      id: 1,
      title: "Custom Web Ecosystems",
      subtitle: "Full-Cycle MERN Development",
      description: "We don't just build websites; we engineer digital assets. Our web solutions are built on the robust MERN stack (MongoDB, Express, React, Node.js), ensuring your application is scalable, secure, and ready to handle high traffic. From complex SaaS dashboards to dynamic e-commerce platforms, we write clean, maintainable code.",
      features: ["Progressive Web Apps (PWA)", "Real-time Data Sockets", "SEO-Optimized SSR (Next.js)", "API-First Architecture"],
      techStack: ["React.js", "Node.js", "MongoDB", "Next.js", "Redux"],
      icon: <FaLaptopCode />,
      color: "blue"
    },
    {
      id: 2,
      title: "Mobile Application Engineering",
      subtitle: "iOS & Android Cross-Platform",
      description: "Reach your customers on every device without doubling your budget. We utilize Flutter and React Native to build native-grade mobile applications with a single codebase. We handle the entire lifecycle: from architecture and UI implementation to App Store submission and maintenance.",
      features: ["60fps Native Performance", "Offline-First Functionality", "Biometric Security", "Push Notification Systems"],
      techStack: ["Flutter", "React Native", "Firebase", "Swift", "Kotlin"],
      icon: <FaMobileAlt />,
      color: "purple"
    },
    {
      id: 3,
      title: "Enterprise Cloud & DevOps",
      subtitle: "Scalable Infrastructure",
      description: "Your software is only as good as the server it runs on. We design auto-scaling cloud architectures using AWS and Docker. Our DevOps practices ensure that your updates are deployed automatically without downtime, and your data is backed up globally.",
      features: ["CI/CD Automated Pipelines", "Serverless Lambda Functions", "Docker Containerization", "Cost-Optimization Audits"],
      techStack: ["AWS", "Docker", "Kubernetes", "Jenkins", "Nginx"],
      icon: <FaCloud />,
      color: "orange"
    },
    {
      id: 4,
      title: "AI & Intelligent Automation",
      subtitle: "Machine Learning Integration",
      description: "Future-proof your business by integrating Artificial Intelligence. We build custom chatbots, recommendation engines, and automated workflows using OpenAI APIs and Python. Let algorithms handle the repetitive tasks while you focus on strategy.",
      features: ["Custom ChatGPT Integration", "Predictive Analytics Models", "Automated Customer Support", "Data Processing Bots"],
      techStack: ["Python", "OpenAI API", "TensorFlow", "Pandas", "PyTorch"],
      icon: <FaBrain />,
      color: "green"
    },
    {
      id: 5,
      title: "UI/UX & Product Design",
      subtitle: "Human-Centric Interfaces",
      description: "Code is useless if users can't figure out how to use it. Our design process starts with user research and wireframing before we ever open a code editor. We create high-fidelity prototypes in Figma that prioritize conversion rates and user retention.",
      features: ["User Journey Mapping", "Interactive Prototyping", "Design Systems", "Accessibility (WCAG) Compliance"],
      techStack: ["Figma", "Adobe XD", "Sketch", "Framer", "Lottie"],
      icon: <FaPaintBrush />,
      color: "pink"
    },
    {
      id: 6,
      title: "Cybersecurity Audits",
      subtitle: "Protection & Compliance",
      description: "Data breaches can destroy a brand's reputation overnight. We provide comprehensive security audits, penetration testing, and code reviews to ensure your technology stack is secure, compliant with GDPR/HIPAA, and resilient against attacks.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Secure Code Review", "Data Encryption Standards"],
      techStack: ["OWASP", "Burp Suite", "Kali Linux", "SSL/TLS", "OAuth 2.0"],
      icon: <FaShieldAlt />,
      color: "red"
    }
  ];

  // 3. Data for FAQ
  const faqData = [
    {
      question: "How do you estimate the cost of a project?",
      answer: "We break down projects into specific milestones and deliverables. Cost is determined by the complexity of features, design requirements, and timeline. We offer both Fixed-Price contracts for well-defined scopes and Hourly/Retainer models for evolving projects."
    },
    {
      question: "Which technology stack do you recommend?",
      answer: "For most modern web applications, we recommend the MERN stack (MongoDB, Express, React, Node.js) due to its scalability and speed. For mobile, we prefer Flutter for its superior performance across both iOS and Android."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Absolutely. We offer 3 months of free bug-fixing support after deployment. Beyond that, we have flexible Annual Maintenance Contracts (AMC) to keep your software updated, secure, and running smoothly."
    },
    {
      question: "How long does it take to build a standard app?",
      answer: "A simple MVP (Minimum Viable Product) usually takes 4-8 weeks. A fully-featured enterprise application can take 3-6 months. We work in 2-week 'Sprints' so you see continuous progress throughout the development cycle."
    }
  ];

  return (
    <div className="page-wrapper">
      
      {/* ================= HERO SECTION ================= */}
      <div className="services-hero">
         <div className="hero-bg-gradient"></div>
         <div className="container hero-content">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-badge">OUR EXPERTISE</span>
              <h1>
                Engineering The <br />
                <span className="gradient-text">Digital Future</span>
              </h1>
              <p>
                We don't just write code; we build business assets. Explore our comprehensive 
                suite of technical services designed to scale with your vision.
              </p>
            </motion.div>
         </div>
      </div>

      {/* ================= DETAILED SERVICES ================= */}
      <section className="detailed-services-container">
        <div className="container">
          {allServices.map((service, index) => (
            <motion.div 
              className={`service-deep-dive ${index % 2 !== 0 ? 'reverse' : ''}`}
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              
              {/* --- Text Content --- */}
              <div className="service-content">
                <div className={`icon-glow-box theme-${service.color}`}>
                  {service.icon}
                </div>
                
                <span className={`service-sub-badge text-${service.color}`}>
                  {service.subtitle}
                </span>
                
                <h2>{service.title}</h2>
                <p className="service-paragraph">{service.description}</p>
                
                <div className="features-grid">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="feat-item">
                      <div className={`dot-indicator bg-${service.color}`}></div>
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="tech-stack-row">
                  <span className="stack-label">Built with:</span>
                  {service.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* --- Visual Content (Abstract Card) --- */}
              <div className="service-visual">
                <div className={`abstract-card bg-gradient-${service.color}`}>
                  <div className="card-glass-layer">
                    <div className="card-top-bar">
                      <div className="window-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="window-title">{service.subtitle}</span>
                    </div>
                    
                    <div className="card-body-visual">
                      <div className="visual-stat">
                        <FaServer />
                        <span>System Active</span>
                      </div>
                      <div className="visual-stat">
                        <FaCodeBranch />
                        <span>v2.4.0 deployed</span>
                      </div>
                      <div className="visual-stat highlight">
                        <FaRocket />
                        <span>Performance: 99%</span>
                      </div>
                    </div>

                    <h3 className="visual-big-text">{service.title}</h3>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header center">
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Common queries about our process and technologies.</p>
          </div>

          <div className="faq-wrapper">
            {faqData.map((item, index) => (
              <AccordionItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

// Helper Component for FAQ Accordion
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h4>{question}</h4>
        <span className="faq-icon">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="faq-answer"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;