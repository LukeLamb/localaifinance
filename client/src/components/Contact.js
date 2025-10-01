import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Get In Touch</h2>
          <p className="text-secondary">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>info@localaifinance.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">💬</div>
              <div>
                <h4>Support</h4>
                <p>support@localaifinance.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🌐</div>
              <div>
                <h4>Social Media</h4>
                <p>Follow us for updates</p>
              </div>
            </div>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-large"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="alert alert-success">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="alert alert-error">
                ✗ Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
