// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FaLaptopCode, FaMobileAlt, FaCloud, FaBrain, FaPaintBrush, FaShieldAlt, 
//   FaPlus, FaMinus, FaServer, FaCodeBranch, FaRocket 
// } from 'react-icons/fa';
// import Contact from '../components/sections/Contact';
// import '../styles/servicesPage.css';

// const Services = () => {
//   // 1. Scroll to top on load
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // 2. Data for Services
//   const allServices = [
//     {
//       id: 1,
//       title: "Custom Web Ecosystems",
//       subtitle: "Full-Cycle MERN Development",
//       description: "We don't just build websites; we engineer digital assets. Our web solutions are built on the robust MERN stack (MongoDB, Express, React, Node.js), ensuring your application is scalable, secure, and ready to handle high traffic. From complex SaaS dashboards to dynamic e-commerce platforms, we write clean, maintainable code.",
//       features: ["Progressive Web Apps (PWA)", "Real-time Data Sockets", "SEO-Optimized SSR (Next.js)", "API-First Architecture"],
//       techStack: ["React.js", "Node.js", "MongoDB", "Next.js", "Redux"],
//       icon: <FaLaptopCode />,
//       color: "blue"
//     },
//     {
//       id: 2,
//       title: "Mobile Application Engineering",
//       subtitle: "iOS & Android Cross-Platform",
//       description: "Reach your customers on every device without doubling your budget. We utilize Flutter and React Native to build native-grade mobile applications with a single codebase. We handle the entire lifecycle: from architecture and UI implementation to App Store submission and maintenance.",
//       features: ["60fps Native Performance", "Offline-First Functionality", "Biometric Security", "Push Notification Systems"],
//       techStack: ["Flutter", "React Native", "Firebase", "Swift", "Kotlin"],
//       icon: <FaMobileAlt />,
//       color: "purple"
//     },
//     {
//       id: 3,
//       title: "Enterprise Cloud & DevOps",
//       subtitle: "Scalable Infrastructure",
//       description: "Your software is only as good as the server it runs on. We design auto-scaling cloud architectures using AWS and Docker. Our DevOps practices ensure that your updates are deployed automatically without downtime, and your data is backed up globally.",
//       features: ["CI/CD Automated Pipelines", "Serverless Lambda Functions", "Docker Containerization", "Cost-Optimization Audits"],
//       techStack: ["AWS", "Docker", "Kubernetes", "Jenkins", "Nginx"],
//       icon: <FaCloud />,
//       color: "orange"
//     },
//     {
//       id: 4,
//       title: "AI & Intelligent Automation",
//       subtitle: "Machine Learning Integration",
//       description: "Future-proof your business by integrating Artificial Intelligence. We build custom chatbots, recommendation engines, and automated workflows using OpenAI APIs and Python. Let algorithms handle the repetitive tasks while you focus on strategy.",
//       features: ["Custom ChatGPT Integration", "Predictive Analytics Models", "Automated Customer Support", "Data Processing Bots"],
//       techStack: ["Python", "OpenAI API", "TensorFlow", "Pandas", "PyTorch"],
//       icon: <FaBrain />,
//       color: "green"
//     },
//     {
//       id: 5,
//       title: "UI/UX & Product Design",
//       subtitle: "Human-Centric Interfaces",
//       description: "Code is useless if users can't figure out how to use it. Our design process starts with user research and wireframing before we ever open a code editor. We create high-fidelity prototypes in Figma that prioritize conversion rates and user retention.",
//       features: ["User Journey Mapping", "Interactive Prototyping", "Design Systems", "Accessibility (WCAG) Compliance"],
//       techStack: ["Figma", "Adobe XD", "Sketch", "Framer", "Lottie"],
//       icon: <FaPaintBrush />,
//       color: "pink"
//     },
//     {
//       id: 6,
//       title: "Cybersecurity Audits",
//       subtitle: "Protection & Compliance",
//       description: "Data breaches can destroy a brand's reputation overnight. We provide comprehensive security audits, penetration testing, and code reviews to ensure your technology stack is secure, compliant with GDPR/HIPAA, and resilient against attacks.",
//       features: ["Vulnerability Assessment", "Penetration Testing", "Secure Code Review", "Data Encryption Standards"],
//       techStack: ["OWASP", "Burp Suite", "Kali Linux", "SSL/TLS", "OAuth 2.0"],
//       icon: <FaShieldAlt />,
//       color: "red"
//     }
//   ];

//   // 3. Data for FAQ
//   const faqData = [
//     {
//       question: "How do you estimate the cost of a project?",
//       answer: "We break down projects into specific milestones and deliverables. Cost is determined by the complexity of features, design requirements, and timeline. We offer both Fixed-Price contracts for well-defined scopes and Hourly/Retainer models for evolving projects."
//     },
//     {
//       question: "Which technology stack do you recommend?",
//       answer: "For most modern web applications, we recommend the MERN stack (MongoDB, Express, React, Node.js) due to its scalability and speed. For mobile, we prefer Flutter for its superior performance across both iOS and Android."
//     },
//     {
//       question: "Do you provide post-launch support?",
//       answer: "Absolutely. We offer 3 months of free bug-fixing support after deployment. Beyond that, we have flexible Annual Maintenance Contracts (AMC) to keep your software updated, secure, and running smoothly."
//     },
//     {
//       question: "How long does it take to build a standard app?",
//       answer: "A simple MVP (Minimum Viable Product) usually takes 4-8 weeks. A fully-featured enterprise application can take 3-6 months. We work in 2-week 'Sprints' so you see continuous progress throughout the development cycle."
//     }
//   ];

//   return (
//     <div className="page-wrapper">
      
//       {/* ================= HERO SECTION ================= */}
//       <div className="services-hero">
//          <div className="hero-bg-gradient"></div>
//          <div className="container hero-content">
//             <motion.div 
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <span className="hero-badge">OUR EXPERTISE</span>
//               <h1>
//                 Engineering The <br />
//                 <span className="gradient-text">Digital Future</span>
//               </h1>
//               <p>
//                 We don't just write code; we build business assets. Explore our comprehensive 
//                 suite of technical services designed to scale with your vision.
//               </p>
//             </motion.div>
//          </div>
//       </div>

//       {/* ================= DETAILED SERVICES ================= */}
//       <section className="detailed-services-container">
//         <div className="container">
//           {allServices.map((service, index) => (
//             <motion.div 
//               className={`service-deep-dive ${index % 2 !== 0 ? 'reverse' : ''}`}
//               key={service.id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.6 }}
//             >
              
//               {/* --- Text Content --- */}
//               <div className="service-content">
//                 <div className={`icon-glow-box theme-${service.color}`}>
//                   {service.icon}
//                 </div>
                
//                 <span className={`service-sub-badge text-${service.color}`}>
//                   {service.subtitle}
//                 </span>
                
//                 <h2>{service.title}</h2>
//                 <p className="service-paragraph">{service.description}</p>
                
//                 <div className="features-grid">
//                   {service.features.map((feat, idx) => (
//                     <div key={idx} className="feat-item">
//                       <div className={`dot-indicator bg-${service.color}`}></div>
//                       {feat}
//                     </div>
//                   ))}
//                 </div>

//                 {/* Tech Stack Pills */}
//                 <div className="tech-stack-row">
//                   <span className="stack-label">Built with:</span>
//                   {service.techStack.map((tech, tIdx) => (
//                     <span key={tIdx} className="tech-pill">{tech}</span>
//                   ))}
//                 </div>
//               </div>

//               {/* --- Visual Content (Abstract Card) --- */}
//               <div className="service-visual">
//                 <div className={`abstract-card bg-gradient-${service.color}`}>
//                   <div className="card-glass-layer">
//                     <div className="card-top-bar">
//                       <div className="window-dots">
//                         <span></span><span></span><span></span>
//                       </div>
//                       <span className="window-title">{service.subtitle}</span>
//                     </div>
                    
//                     <div className="card-body-visual">
//                       <div className="visual-stat">
//                         <FaServer />
//                         <span>System Active</span>
//                       </div>
//                       <div className="visual-stat">
//                         <FaCodeBranch />
//                         <span>v2.4.0 deployed</span>
//                       </div>
//                       <div className="visual-stat highlight">
//                         <FaRocket />
//                         <span>Performance: 99%</span>
//                       </div>
//                     </div>

//                     <h3 className="visual-big-text">{service.title}</h3>
//                   </div>
//                 </div>
//               </div>

//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ================= FAQ SECTION ================= */}
//       <section className="faq-section">
//         <div className="container">
//           <div className="section-header center">
//             <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
//             <p>Common queries about our process and technologies.</p>
//           </div>

//           <div className="faq-wrapper">
//             {faqData.map((item, index) => (
//               <AccordionItem key={index} question={item.question} answer={item.answer} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <Contact />
//     </div>
//   );
// };

// // Helper Component for FAQ Accordion
// const AccordionItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
//       <div className="faq-question">
//         <h4>{question}</h4>
//         <span className="faq-icon">{isOpen ? <FaMinus /> : <FaPlus />}</span>
//       </div>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="faq-answer"
//           >
//             <p>{answer}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Services;

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
    { q: "Do you provide post-launch support?", a: "Yes, every project includes 3 months of bug-fixing support. We also offer Annual Maintenance Contracts (AMC) for long-term updates." },
    { q: "How long does an MVP take?", a: "A standard MVP typically takes 4-8 weeks depending on complexity. Enterprise solutions generally range from 3-6 months." }
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