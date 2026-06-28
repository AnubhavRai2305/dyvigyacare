import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'General',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call to backend/EmailJS)
    alert(`Thank you for reaching out, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: '', email: '', phone: '', inquiryType: 'General', message: '' });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="header-content fade-in-up-fast">
          <h1>Get In Touch</h1>
          <div className="divider"></div>
          <p>Whether you want to volunteer, partner with us, or simply say hello—we would love to hear from you.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="content-container contact-grid">
          
          {/* Contact Information */}
          <div className="contact-info fade-in-up">
            <h2>Connect With Us</h2>
            <p>Our team is always ready to collaborate for a better, more sustainable future. Reach out to us through the details below or drop a message.</p>
            
            <div className="info-block">
              <h4>Email</h4>
              <p><a href="mailto:info@dyvigyacare.org">info@dyvigyacare.org</a></p>
            </div>
            
            <div className="info-block">
              <h4>Phone</h4>
              <p><a href="tel:+919876543210">+91 98765 43210</a></p>
            </div>

            <div className="info-block">
              <h4>Social Media</h4>
              <div className="social-links">
                <a href="#" target="_blank" rel="noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noreferrer">Facebook</a>
                <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper fade-in-up">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="inquiryType">Purpose of Inquiry *</label>
                <select 
                  id="inquiryType" 
                  name="inquiryType" 
                  required 
                  value={formData.inquiryType} 
                  onChange={handleChange}
                >
                  <option value="General">General Inquiry</option>
                  <option value="Volunteer">I want to Volunteer</option>
                  <option value="Partner">CSR / Partnership</option>
                  <option value="Donation">Donation Related</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  value={formData.message} 
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;