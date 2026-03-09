import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaShieldAlt, FaRocket, FaMobileAlt, FaCodeBranch, FaBrain, FaCheckCircle, FaBolt, FaServer, FaUsers, FaTerminal, FaCircle } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiMongodb, SiPostgresql, SiTypescript, SiKubernetes, SiOpenai, SiPython, SiTensorflow, SiPytorch, SiLangchain } from 'react-icons/si';
import '../../styles/techstack.css';

const TechStack = () => {
  const [activeId, setActiveId] = useState(4); 

  const stackData = [
    {
      id: 4,
      title: "Generative AI & LLMs",
      subtitle: "The Future of Business Automation",
      icon: <FaBrain />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "We integrate state-of-the-art Artificial Intelligence to automate workflows, build smart chatbots, and analyze data.",
      techs: [
        { name: "OpenAI API", icon: <SiOpenai /> },
        { name: "Python", icon: <SiPython /> },
        { name: "TensorFlow", icon: <SiTensorflow /> }
      ],
      deliverables: ["Custom AI Chatbots", "Predictive Analytics", "Automated Support"],
      faq: { question: "How can AI help my startup?", answer: "AI reduces operational costs by automating repetitive tasks and provides personalized user experiences." },
      metrics: [
        { label: "Efficiency Boost", value: "40%", icon: <FaBolt /> },
        { label: "Auto-Response", value: "24/7", icon: <FaServer /> },
        { label: "Cost Reduction", value: "35%", icon: <FaShieldAlt /> }
      ],
      // NEW: Code Snippet
      codeSnippet: `import openai\n\nconst analyzeData = async (input) => {\n  const response = await openai.Completion.create({\n    engine: "davinci-003",\n    prompt: input,\n    max_tokens: 100\n  });\n  return response.choices[0].text;\n}`
    },
    {
      id: 0,
      title: "Frontend Experience",
      subtitle: "Blazing Fast & SEO Optimized",
      icon: <FaRocket />,
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "User attention spans are short. We build sub-second loading interfaces using the modern React ecosystem.",
      techs: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> }
      ],
      deliverables: ["Single Page Apps (SPA)", "Progressive Web Apps", "Interactive Dashboards"],
      faq: { question: "Why do we choose Next.js?", answer: "Next.js offers Server-Side Rendering (SSR), which means your website ranks higher on Google." },
      metrics: [
        { label: "Lighthouse Score", value: "98+", icon: <FaCheckCircle /> },
        { label: "Load Time", value: "<1s", icon: <FaBolt /> },
        { label: "SEO Ranking", value: "#1", icon: <FaRocket /> }
      ],
      codeSnippet: `// Server Side Rendering (SSR)\nexport async function getServerSideProps() {\n  const res = await fetch('https://api/data')\n  const data = await res.json()\n  return { props: { data } }\n}`
    },
    {
      id: 1,
      title: "Backend Core",
      subtitle: "Secure & Scalable Logic",
      icon: <FaShieldAlt />,
      image: "https://images.unsplash.com/photo-1669023414166-a4cc7c0fe1f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJhY2tlbmQlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The backbone of your application. We architect secure APIs and databases that can handle millions of requests.",
      techs: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      deliverables: ["RESTful APIs", "Real-time Sockets", "Bank-Grade Security"],
      faq: { question: "How do we handle security?", answer: "We implement JWT authentication and encrypted databases to ensure your user data is never compromised." },
      metrics: [
        { label: "Uptime SLA", value: "99.9%", icon: <FaServer /> },
        { label: "Encryption", value: "AES-256", icon: <FaShieldAlt /> },
        { label: "API Latency", value: "20ms", icon: <FaBolt /> }
      ],
      codeSnippet: `app.post('/api/secure', verifyToken, (req, res) => {\n  // Secure Transaction Logic\n  const { userId, amount } = req.body;\n  db.processTransaction(userId, amount);\n  res.status(200).json({ success: true });\n});`
    },
    {
      id: 2,
      title: "Mobile Native",
      subtitle: "iOS & Android Ecosystems",
      icon: <FaMobileAlt />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Reach your customers on their devices. We build fluid, native-feeling mobile applications.",
      techs: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "Swift", icon: <FaMobileAlt /> }
      ],
      deliverables: ["Cross-Platform Apps", "App Store Launch", "Offline Mode"],
      faq: { question: "Native vs Cross-Platform?", answer: "We specialize in Flutter & React Native to build for both iOS and Android simultaneously." },
      metrics: [
        { label: "Code Reusability", value: "90%", icon: <FaCodeBranch /> },
        { label: "Frame Rate", value: "60fps", icon: <FaBolt /> },
        { label: "Platforms", value: "2 in 1", icon: <FaMobileAlt /> }
      ],
      codeSnippet: `import 'package:flutter/material.dart';\n\nWidget build(BuildContext context) {\n  return MaterialApp(\n    home: Scaffold(\n      appBar: AppBar(title: Text('Lexa App')),\n      body: Center(child: Text('Native Performance')),\n    ),\n  );\n}`
    }
  ];

  const activeData = stackData.find(s => s.id === activeId);

  return (
    <section className="tech-modern-section">
      <div className="container">
        
        <div className="modern-header">
          <div className="pill-badge">🔮 ENGINEERING DNA</div>
          <h2>Powered By The <span className="gradient-text">AI Revolution</span></h2>
          <p>We combine rock-solid engineering with cutting-edge tech to build software that scales.</p>
        </div>

        <div className="tech-layout-split">
          
          {/* LEFT: Accordion */}
          <div className="tech-accordion">
            {stackData.map((item) => (
              <div 
                key={item.id} 
                className={`accordion-item ${activeId === item.id ? 'active' : ''}`}
                onClick={() => setActiveId(item.id)}
              >
                <div className="accordion-header">
                  <div className={`icon-box ${item.id === 4 ? 'pulse-ai' : ''}`}>
                    {item.icon}
                  </div>
                  <div className="header-text">
                    <h3>{item.title}</h3>
                    <span>{item.subtitle}</span>
                  </div>
                </div>

                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="accordion-content"
                    >
                      <p className="tech-description">{item.description}</p>

                      <div className="tech-pills">
                        {item.techs.map((t, idx) => (
                          <div key={idx} className="pill">{t.icon} {t.name}</div>
                        ))}
                      </div>

                      <div className="deliverables-box">
                        <h5>What We Deliver:</h5>
                        <ul>
                          {item.deliverables.map((d, idx) => (
                            <li key={idx}><FaCheckCircle className="check-icon" /> {d}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="faq-box">
                        <div className="faq-header">
                          <span className="faq-icon">💡</span>
                          <h4>Expert Insight:</h4>
                        </div>
                        <p className="faq-question">"{item.faq.question}"</p>
                        <p className="faq-answer">{item.faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT: Sticky Visual Stage */}
          <div className="tech-visual-stage">
            <div className="sticky-wrapper">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="visual-group"
                >
                  {/* 1. Main Image Card */}
                  <div className="image-card-modern">
                    <img src={activeData.image} alt="Tech Visual" />
                    <div className="glass-overlay">
                      <span className="overlay-badge">System Architecture</span>
                      <h3>{activeData.title}</h3>
                    </div>
                  </div>

                  {/* 2. Metrics Card */}
                  <div className="metrics-card">
                    <h4>Performance Metrics</h4>
                    <div className="metrics-grid">
                      {activeData.metrics.map((m, idx) => (
                        <div key={idx} className="metric-item">
                          <div className="metric-icon">{m.icon}</div>
                          <div className="metric-text">
                            <span className="metric-val">{m.value}</span>
                            <span className="metric-lbl">{m.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. NEW: Terminal Code Card (Fills the gap!) */}
                  <div className="code-card">
                    <div className="terminal-header">
                      <FaTerminal className="term-icon" />
                      <span>{activeData.title.split(' ')[0].toLowerCase()}.js</span>
                      <div className="window-dots">
                         <FaCircle color="#FF5F56" size={10} />
                         <FaCircle color="#FFBD2E" size={10} />
                         <FaCircle color="#27C93F" size={10} />
                      </div>
                    </div>
                    <pre className="code-block">
                      <code>{activeData.codeSnippet}</code>
                    </pre>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;