import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaAndroid, FaApple, FaVuejs } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiTypescript, SiNextdotjs } from 'react-icons/si';
import '../../styles/marquee.css';

const LogoMarquee = () => {
  const icons = [
    { Icon: FaReact, name: 'React' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: FaAws, name: 'AWS' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: FaPython, name: 'Python' },
    { Icon: FaAndroid, name: 'Android' },
    { Icon: FaApple, name: 'iOS' },
    { Icon: SiFirebase, name: 'Firebase' },
    { Icon: FaVuejs, name: 'Vue' },
  ];

  return (
    <div className="marquee-section">
      <p className="marquee-title">POWERING NEXT-GEN SOLUTIONS WITH</p>
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Duplicate list twice for seamless infinite scroll */}
          {[...icons, ...icons].map((item, index) => (
            <div key={index} className="marquee-item">
              <item.Icon className="marquee-icon" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;