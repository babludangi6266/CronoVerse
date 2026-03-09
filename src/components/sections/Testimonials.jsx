import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../../styles/testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      text: "Lexa Technologies transformed our offline coaching into a full-fledged LMS. Their speed and code quality are unmatched in Odisha.",
      initial: "R"
    },
    {
      name: "Sarah Williams",
      text: "The mobile app they built for us helped us secure our Series A funding. The UI/UX is exactly what we envisioned.",
      initial: "S"
    },
    {
      name: "Amit Das",
      text: "Reliable, technical, and future-proof. Their cloud solutions reduced our server costs by 40%. Highly recommended.",
      initial: "A"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-subtitle">TRUSTED BY FOUNDERS</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, idx) => (
            <div key={idx} className="review-card modern-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <div className="avatar">{review.initial}</div>
                <div>
                  <h4>{review.name}</h4>
                  
                  <div className="stars">
                    {[1,2,3,4,5].map(i => <FaStar key={i} size={12} color="#F59E0B"/>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;