import { FaLaptopCode, FaMobileAlt, FaCloud, FaPaintBrush, FaBrain, FaRocket } from 'react-icons/fa';

export const COMPANY_INFO = {
  name: 'Lexa Technologies',
  tagline: 'Transforming Ideas into Digital Reality',
  email: 'business@lexatechnologies.com',
  phone: '+91 96502 80857',
  address: 'Bhubneshwar, Odisha, India',
  whatsappLink: 'https://wa.me/+919650280857'
};

export const SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    desc: 'Scalable, high-performance websites built with React, Next.js, and Node.',
    icon: FaLaptopCode,
  },
  {
    id: 2,
    title: 'App Development',
    desc: 'Native and Cross-platform (Flutter/React Native) mobile applications.',
    icon: FaMobileAlt,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    desc: 'User-centric interfaces that drive engagement and retention.',
    icon: FaPaintBrush,
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    desc: 'AWS & Azure infrastructure setup, DevOps, and secure deployment.',
    icon: FaCloud,
  }
];

export const TECH_STACK = {
  Frontend: ['React.js', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux'],
  Backend: ['Node.js', 'Express', 'Python/Django', 'Java Spring Boot'],
  Mobile: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'],
  Database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
  DevOps: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines']
};

export const WORKFLOW = [
  { step: '01', title: 'Discover', desc: 'We analyze your requirements and business goals.' },
  { step: '02', title: 'Design', desc: 'Creating prototypes and architectural blueprints.' },
  { step: '03', title: 'Develop', desc: 'Agile coding with regular updates and testing.' },
  { step: '04', title: 'Deliver', desc: 'Deployment, training, and post-launch support.' }
];