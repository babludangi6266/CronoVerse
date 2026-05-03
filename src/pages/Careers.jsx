import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRocket, FaGlobeAmericas, FaClock, FaPaperPlane, FaLink, 
  FaBrain, FaCode, FaPaintBrush, FaVideo, FaHandshake, FaMobileAlt, 
  FaServer, FaCheckCircle, FaSpinner, FaChartLine, FaCommentSlash, 
  FaGhost, FaMicrochip
} from 'react-icons/fa';
import '../styles/careers.css';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    Name: '', Email: '', Phone: '', City: '',
    Education: '', Course: '', Year: '',
    Roles: [], Role_Type: [],
    StartDate: '', Commitment: '', FullTimeConversion: '', // NEW FIELDS
    Portfolio_Link: '', Video_Link: '',
    Inspiration_Pages: '', Message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableRoles = [
    { name: "Full-Stack Web", icon: <FaCode /> },
    { name: "Mobile (iOS/Android)", icon: <FaMobileAlt /> },
    { name: "Cloud & DevOps", icon: <FaServer /> },
    { name: "UI/UX & Product", icon: <FaPaintBrush /> },
    { name: "AI Prompt Engineer", icon: <FaMicrochip /> },
    { name: "Video / Motion", icon: <FaVideo /> },
    { name: "Content / Copy", icon: <FaBrain /> },
    { name: "Sales / Growth", icon: <FaHandshake /> },
  ];
  
  const roleTypes = ["Full Time", "Part Time", "Freelance / Contract", "Internship"];

  // Standard Text Inputs & Radio Buttons
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Multi-Select Checkboxes
  const handleCheckboxChange = (e, fieldName) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentArray = prev[fieldName];
      return checked 
        ? { ...prev, [fieldName]: [...currentArray, value] }
        : { ...prev, [fieldName]: currentArray.filter((item) => item !== value) };
    });
  };

  // Highly Reliable Submission via Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "34475b62-0b95-4352-84c5-b5fb8e162e4d", // <-- GET FREE KEY FROM WEB3FORMS.COM
          subject: `🚀 New LEXA Application: ${formData.Name}`,
          from_name: "LEXA Careers Portal",
          to_email: "jackie.mohanty2012@gmail.com", 
          ...formData,
          Roles: formData.Roles.join(", "),       
          Role_Type: formData.Role_Type.join(", ") 
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to success message
      } else {
        alert("Something went wrong. Please check your network and try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="car-master-wrapper">
      
      {/* --- MASSIVE BREATHING NEON "LEXA" TEXT --- */}
      <div className="car-zigzag-bg">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neonMultiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" /> 
              <stop offset="50%" stopColor="#8B5CF6" />  
              <stop offset="100%" stopColor="#10B981" /> 
            </linearGradient>
          </defs>
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="lexa-neon-text">
            LEXA
          </text>
        </svg>
      </div>

      {/* --- HERO NARRATIVE --- */}
      <section className="car-hero-section">
        <div className="car-ambient-glow"></div>
        <div className="container car-hero-container">
          <motion.span className="car-pill-badge" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Careers at LEXA
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            We build software faster than anyone else. <br />
            <span className="car-text-cyan">Come build it with us.</span>
          </motion.h1>
          <motion.p className="car-hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            We don’t care about your GPA, your college tier, or your resume formatting. 
            We only care about your taste, your speed, and the things you have built.
          </motion.p>
        </div>
      </section>

      {/* --- BENTO BOX CULTURE GRID --- */}
      <section className="car-bento-section">
        <div className="container">
          <div className="car-bento-grid">
            <div className="car-bento-card span-2 bg-gradient">
              <FaClock className="bento-icon" />
              <h3>The 6-4 Model</h3>
              <p>6 Hours. 4 Days. We despise burnout. We value deep, uninterrupted focus and pure output over sitting in an office chair for 9 hours.</p>
            </div>
            <div className="car-bento-card bg-dark">
              <FaRocket className="bento-icon" />
              <h3>Outcome Payouts</h3>
              <p>No flat salaries. You earn based on the value, speed, and quality of the projects you deliver.</p>
            </div>
            <div className="car-bento-card bg-dark">
              <FaGlobeAmericas className="bento-icon" />
              <h3>Remote Native</h3>
              <p>Work from your bedroom, a cafe in Bali, or your hometown. Complete geographical freedom.</p>
            </div>
            <div className="car-bento-card span-2 bg-dark">
              <FaCommentSlash className="bento-icon" />
              <h3>Async by Default</h3>
              <p>Endless Zoom calls kill productivity. We communicate via Notion, Slack, and Figma. We only meet when it is absolutely necessary.</p>
            </div>
            <div className="car-bento-card bg-gradient-alt span-2">
              <FaGhost className="bento-icon" />
              <h3>The Anti-Agency</h3>
              <p>We are a product collective. No middle-managers, no strict hierarchies, no corporate politics. Just makers making cool things.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMMAND CENTER APPLICATION FORM (SINGLE STEP) --- */}
      <section className="car-application-section" id="apply">
        <div className="container car-form-container">
          
          <div className="car-form-header-center">
            <h2>The Application</h2>
            <p>Ready to join the collective? Let's see what you've got.</p>
          </div>

          <div className="car-terminal-box">
            <AnimatePresence mode="wait">
              
              {isSubmitted ? (
                // SUCCESS SCREEN
                <motion.div className="car-terminal-success" key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <FaCheckCircle className="success-icon-large" />
                  <h2>Transmission Received</h2>
                  <p>Your details and proof of work are now in the hands of the founding team. We will review your links and get back to you shortly.</p>
                </motion.div>
              ) : (
                
                // SINGLE STEP FORM
                <motion.div className="car-terminal-content" key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  
                  <form onSubmit={handleSubmit} className="car-single-step-form">
                    
                    {/* SECTION 1: IDENTIFICATION */}
                    <div className="car-section-block">
                      <h3>01. Identification & Origins</h3>
                      <p className="car-muted-text">Who are you and where are you currently operating from?</p>
                      
                      <input type="text" name="Name" required placeholder="Legal Name *" value={formData.Name} onChange={handleChange} className="car-term-input" />
                      <div className="car-input-split">
                        <input type="email" name="Email" required placeholder="Email Address *" value={formData.Email} onChange={handleChange} className="car-term-input" />
                        <input type="tel" name="Phone" required placeholder="Phone Number *" value={formData.Phone} onChange={handleChange} className="car-term-input" />
                      </div>
                      <input type="text" name="City" required placeholder="Current City of Residence *" value={formData.City} onChange={handleChange} className="car-term-input" />
                      
                      <div style={{marginTop: '25px'}}>
                        <input type="text" name="Education" required placeholder="Current College / Company / 'Self-Taught' *" value={formData.Education} onChange={handleChange} className="car-term-input" />
                        <div className="car-input-split">
                          <input type="text" name="Course" placeholder="Course / Degree" value={formData.Course} onChange={handleChange} className="car-term-input" />
                          <input type="number" name="Year" placeholder="Graduation Year" value={formData.Year} onChange={handleChange} className="car-term-input" />
                        </div>
                      </div>
                    </div>

                    <hr className="car-divider" />

                    {/* SECTION 2: ARSENAL */}
                    <div className="car-section-block">
                      <h3>02. Your Arsenal</h3>
                      <p className="car-muted-text">What are your primary technical or creative disciplines?</p>
                      <div className="car-cb-grid">
                        {availableRoles.map((role, idx) => (
                          <label key={idx} className="car-cb-label">
                            <input type="checkbox" value={role.name} checked={formData.Roles.includes(role.name)} onChange={(e) => handleCheckboxChange(e, 'Roles')} className="car-hidden-cb" />
                            <div className="car-cb-design">
                              <span className="car-icon">{role.icon}</span> {role.name}
                            </div>
                          </label>
                        ))}
                      </div>

                      <p className="car-muted-text" style={{marginTop: '30px'}}>What type of role are you seeking?</p>
                      <div className="car-cb-grid">
                        {roleTypes.map((type, idx) => (
                          <label key={idx} className="car-cb-label">
                            <input type="checkbox" value={type} checked={formData.Role_Type.includes(type)} onChange={(e) => handleCheckboxChange(e, 'Role_Type')} className="car-hidden-cb" />
                            <div className="car-cb-design">{type}</div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <hr className="car-divider" />

                    {/* SECTION 3: TIMELINE (NEW SECTION) */}
                    <div className="car-section-block">
                      <h3>03. Timeline & Commitment</h3>
                      
                      <p className="car-muted-text">When can you start? (A date works. So does 'ASAP' or 'after May exams'.)</p>
                      <input type="text" name="StartDate" required placeholder="e.g. Immediately" value={formData.StartDate} onChange={handleChange} className="car-term-input" />

                      <p className="car-muted-text" style={{marginTop: '25px'}}>How long can you commit?</p>
                      <div className="car-cb-grid">
                        {["3 months", "6 months", "Flexible / open-ended"].map((opt, idx) => (
                          <label key={idx} className="car-cb-label">
                            {/* Note: type="radio" ensures only one is selected */}
                            <input type="radio" name="Commitment" value={opt} checked={formData.Commitment === opt} onChange={handleChange} className="car-hidden-cb" />
                            <div className="car-cb-design">{opt}</div>
                          </label>
                        ))}
                      </div>

                      <p className="car-muted-text" style={{marginTop: '25px'}}>Open to full-time conversion if it works out?</p>
                      <div className="car-cb-grid">
                        {["Yes", "No", "Maybe"].map((opt, idx) => (
                          <label key={idx} className="car-cb-label">
                            <input type="radio" name="FullTimeConversion" value={opt} checked={formData.FullTimeConversion === opt} onChange={handleChange} className="car-hidden-cb" />
                            <div className="car-cb-design">{opt}</div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <hr className="car-divider" />

                    {/* SECTION 4: PROOF */}
                    <div className="car-section-block">
                      <h3>04. Proof of Work</h3>
                      <p className="car-muted-text">Talk is cheap. Show us what you have actually built, designed, or grown.</p>
                      <div className="car-term-icon-wrapper">
                        <FaLink className="term-input-icon" />
                        <input type="url" name="Portfolio_Link" required placeholder="GitHub, Behance, or Drive Link *" value={formData.Portfolio_Link} onChange={handleChange} className="car-term-input pl-45" />
                      </div>

                      <h3 style={{marginTop: '40px'}}>The 60-Second Pitch</h3>
                      <p className="car-muted-text">Record a 60-second video. Why do you want to join LEXA? Talk to camera, edit a reel, animate something. Unlisted YouTube/Drive links work best.</p>
                      <div className="car-term-icon-wrapper">
                        <FaVideo className="term-input-icon" />
                        <input type="url" name="Video_Link" required placeholder="Paste Video Link Here *" value={formData.Video_Link} onChange={handleChange} className="car-term-input pl-45" />
                      </div>
                    </div>

                    <hr className="car-divider" />

                    {/* SECTION 5: TASTE */}
                    <div className="car-section-block">
                      <h3>05. Taste & Inspiration</h3>
                      <p className="car-muted-text">List 3 pages/creators you follow religiously. We want to understand what influences your work.</p>
                      <textarea name="Inspiration_Pages" required rows="2" placeholder="@figma, @mkbhd, @vercel..." value={formData.Inspiration_Pages} onChange={handleChange} className="car-term-input"></textarea>

                      <h3 style={{marginTop: '40px'}}>Final Transmission</h3>
                      <p className="car-muted-text">Any extra notes, cover letter, or motivation you want to add?</p>
                      <textarea name="Message" rows="3" placeholder="I am obsessed with building because..." value={formData.Message} onChange={handleChange} className="car-term-input"></textarea>
                    </div>

                    {/* Terminal Footer Controls */}
                    <div className="car-terminal-footer">
                      <button type="submit" className="term-btn-primary full-width-btn" disabled={isSubmitting}>
                        {isSubmitting ? <><FaSpinner className="car-spin" /> Uploading Data...</> : <>Deploy Application <FaPaperPlane /></>}
                      </button>
                    </div>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Careers;