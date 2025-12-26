// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaLaptopCode, FaMobileAlt, FaCloud, FaPaintBrush, FaBrain, FaChartLine, FaArrowRight, FaCheck, FaAws } from 'react-icons/fa';
// import { SiReact, SiNodedotjs, SiFlutter, SiFigma, SiOpenai } from 'react-icons/si';
// import '../../styles/servicess.css';

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       title: 'Custom Web Development',
//       desc: 'We build high-performance, SEO-friendly web applications that scale with your business.',
//       icon: <FaLaptopCode />,
//       color: 'blue',
//       mainTech: <SiReact />,
//       features: ['SaaS Platforms', 'Progressive Web Apps (PWA)', 'Enterprise Dashboards', 'E-commerce Solutions']
//     },
//     {
//       id: 2,
//       title: 'Mobile App Engineering',
//       desc: 'Native-grade iOS and Android applications built with cross-platform efficiency.',
//       icon: <FaMobileAlt />,
//       color: 'purple',
//       mainTech: <SiFlutter />,
//       features: ['iOS & Android Apps', 'Cross-Platform (Flutter)', 'App Store Optimization', 'Offline-First Architecture']
//     },
//     {
//       id: 3,
//       title: 'Cloud & DevOps',
//       desc: 'Secure, scalable infrastructure that handles millions of requests without downtime.',
//       icon: <FaCloud />,
//       color: 'orange',
//       mainTech: <FaAws />, // 3. Updated this to use the working FaAws icon
//       features: ['AWS / Azure Architecture', 'CI/CD Automation', 'Serverless Computing', 'Cloud Security Audits']
//     },
//     {
//       id: 4,
//       title: 'UI/UX & Product Design',
//       desc: 'User-centric interfaces designed to convert visitors into loyal customers.',
//       icon: <FaPaintBrush />,
//       color: 'pink',
//       mainTech: <SiFigma />,
//       features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Interactive High-Fi UI']
//     },
//     {
//       id: 5,
//       title: 'AI & Automation',
//       desc: 'Leverage the power of LLMs and Machine Learning to automate complex workflows.',
//       icon: <FaBrain />,
//       color: 'green',
//       mainTech: <SiOpenai />,
//       features: ['Custom Chatbots', 'Predictive Analytics', 'Process Automation', 'OpenAI Integration']
//     },
//     {
//       id: 6,
//       title: 'Digital Consultancy',
//       desc: 'Strategic technical guidance to map out your digital transformation journey.',
//       icon: <FaChartLine />,
//       color: 'cyan',
//       mainTech: null,
//       features: ['CTO-as-a-Service', 'Tech Stack Selection', 'MVP Strategy', 'Legacy Modernization']
//     }
//   ];

//   return (
//     <section id="services" className="services-section-modern">
//       {/* Background Decor */}
//       <div className="bg-grid-pattern"></div>
      
//       <div className="container">
//         <div className="section-header center mb-60">
//           <span className="aesthetic-badge">🛠️ OUR EXPERTISE</span>
//           <h2>
//             Comprehensive <span className="gradient-text">IT Solutions</span>
//           </h2>
//           <p>
//             From the first line of code to the final deployment, we handle the entire 
//             lifecycle of your digital product with precision and engineering excellence.
//           </p>
//         </div>

//         <div className="services-grid-dense">
//           {services.map((service, index) => (
//             <motion.div 
//               className={`service-card-modern ${service.color}-theme`}
//               key={service.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               {/* Top Gradient Line */}
//               <div className="card-top-line"></div>
              
//               <div className="card-header">
//                 <div className="service-icon-box">
//                   {service.icon}
//                 </div>
//                 {service.mainTech && (
//                   <div className="tech-badge">
//                     Powered by {service.mainTech}
//                   </div>
//                 )}
//               </div>

//               <h3>{service.title}</h3>
//               <p className="service-desc">{service.desc}</p>

//               <div className="features-list">
//                 {service.features.map((feature, idx) => (
//                   <div key={idx} className="feature-row">
//                     <FaCheck className="check-icon" />
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="card-footer">
//                 <span className="learn-more-btn">
//                   Explore Service <FaArrowRight className="arrow-icon" />
//                 </span>
//               </div>
              
//               {/* Hover Background Glow */}
//               <div className="hover-glow"></div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPaintBrush, FaBrain, FaChartLine, FaArrowRight, FaCheck, FaAws } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiFlutter, SiFigma, SiOpenai } from 'react-icons/si';
import '../../styles/servicess.css';

const Services = () => {
  const navigate = useNavigate(); // Initialize hook

  const handleNavigation = () => {
    navigate('/services');
    window.scrollTo(0, 0); // Optional: Scrolls to top of new page
  };

  const services = [
    {
      id: 1,
      title: 'Custom Web Development',
      desc: 'We build high-performance, SEO-friendly web applications that scale with your business.',
      icon: <FaLaptopCode />,
      color: 'blue',
      mainTech: <SiReact />,
      features: ['SaaS Platforms', 'Progressive Web Apps (PWA)', 'Enterprise Dashboards', 'E-commerce Solutions']
    },
    {
      id: 2,
      title: 'Mobile App Engineering',
      desc: 'Native-grade iOS and Android applications built with cross-platform efficiency.',
      icon: <FaMobileAlt />,
      color: 'purple',
      mainTech: <SiFlutter />,
      features: ['iOS & Android Apps', 'Cross-Platform (Flutter)', 'App Store Optimization', 'Offline-First Architecture']
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      desc: 'Secure, scalable infrastructure that handles millions of requests without downtime.',
      icon: <FaCloud />,
      color: 'orange',
      mainTech: <FaAws />,
      features: ['AWS / Azure Architecture', 'CI/CD Automation', 'Serverless Computing', 'Cloud Security Audits']
    },
    {
      id: 4,
      title: 'UI/UX & Product Design',
      desc: 'User-centric interfaces designed to convert visitors into loyal customers.',
      icon: <FaPaintBrush />,
      color: 'pink',
      mainTech: <SiFigma />,
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Interactive High-Fi UI']
    },
    {
      id: 5,
      title: 'AI & Automation',
      desc: 'Leverage the power of LLMs and Machine Learning to automate complex workflows.',
      icon: <FaBrain />,
      color: 'green',
      mainTech: <SiOpenai />,
      features: ['Custom Chatbots', 'Predictive Analytics', 'Process Automation', 'OpenAI Integration']
    },
    {
      id: 6,
      title: 'Digital Consultancy',
      desc: 'Strategic technical guidance to map out your digital transformation journey.',
      icon: <FaChartLine />,
      color: 'cyan',
      mainTech: null,
      features: ['CTO-as-a-Service', 'Tech Stack Selection', 'MVP Strategy', 'Legacy Modernization']
    }
  ];

  return (
    <section id="services" className="services-section-modern">
      {/* Background Decor */}
      <div className="bg-grid-pattern"></div>
      
      <div className="container">
        {/* Updated Header Structure */}
        <div className="section-header center mb-60">
          <span className="aesthetic-badge">🛠️ OUR EXPERTISE</span>
          <h2>
            Comprehensive <span className="gradient-text">IT Solutions</span>
          </h2>
          <p>
            From the first line of code to the final deployment, we handle the entire 
            lifecycle of your digital product with precision and engineering excellence.
          </p>
        </div>

        <div className="services-grid-dense">
          {services.map((service, index) => (
            <motion.div 
              className={`service-card-modern ${service.color}-theme`}
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Top Gradient Line */}
              <div className="card-top-line"></div>
              
              <div className="card-header">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                {service.mainTech && (
                  <div className="tech-badge">
                    Powered by {service.mainTech}
                  </div>
                )}
              </div>

              <h3>{service.title}</h3>
              <p className="service-desc">{service.desc}</p>

              <div className="features-list">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-row">
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="card-footer">
                {/* Added onClick Handler */}
                <span className="learn-more-btn" onClick={handleNavigation}>
                  Explore Service <FaArrowRight className="arrow-icon" />
                </span>
              </div>
              
              {/* Hover Background Glow */}
              <div className="hover-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;