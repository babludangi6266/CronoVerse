// src/pages/Contact.jsx
import React from 'react';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="page contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Ready to start your project? Let's discuss how we can help bring your vision to life</p>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default ContactPage;