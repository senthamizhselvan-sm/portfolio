import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1000);
  };

  const downloadResume = () => {
    // In a real implementation, this would download an actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be a real PDF path
    link.download = 'Senthamizh_Selvan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/s-senthamizh-selvan-73709a32a/',
      icon: '💼',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/senthamizhselvan-sm',
      icon: '📚',
      color: '#333'
    },
    {
      name: 'Email',
      url: 'mailto:senthamizhselvan.sm@gmail.com',
      icon: '📧',
      color: '#ea4335'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/senthamizh_cr',
      icon: '🐦',
      color: '#1da1f2'
    }
  ];

  return (
    <section id="contact">
      <h2>Let's Connect</h2>
      
      <div className="contact-container">
        {/* Contact Info & Social Links */}
        <div className="contact-info">
          <div className="contact-intro">
            <h3>Get In Touch</h3>
            <p>
              I'm always open to discussing new opportunities, collaborating on interesting projects, 
              or just having a chat about technology and software development. Feel free to reach out!
            </p>
          </div>

          <div className="resume-section">
            <button 
              onClick={downloadResume}
              className="resume-download-btn"
            >
              📄 Download Resume
            </button>
          </div>

          <div className="social-links">
            <h4>Connect with me</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <span>Chennai, Tamil Nadu, India</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🕒</span>
              <span>Available for opportunities</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">🌐</span>
              <span>Open to remote work</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="form-textarea"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? '📤 Sending...' : '🚀 Send Message'}
            </button>
            
            {submitStatus && (
              <div className="submit-status">
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          margin-top: 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-intro h3 {
          color: #2c3e50;
          font-size: 1.5em;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .contact-intro p {
          line-height: 1.6;
          color: #34495e;
          margin-bottom: 30px;
        }

        .resume-section {
          margin: 30px 0;
          text-align: center;
        }

        .resume-download-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 25px;
          font-size: 1.1em;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .resume-download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }

        .social-links h4 {
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          text-decoration: none;
          color: #2c3e50;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .social-link:hover {
          background: var(--social-color);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .social-icon {
          font-size: 1.2em;
        }

        .social-name {
          font-weight: 600;
          font-size: 0.9em;
        }

        .contact-details {
          margin-top: 30px;
          padding-top: 25px;
          border-top: 2px solid #ecf0f1;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
          color: #34495e;
        }

        .detail-icon {
          font-size: 1.1em;
          width: 30px;
        }

        .contact-form-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-form-container h3 {
          color: #2c3e50;
          font-size: 1.5em;
          margin-bottom: 25px;
          font-weight: 700;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #ecf0f1;
          border-radius: 10px;
          font-size: 1em;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
          color: #2c3e50;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 15px;
          border: none;
          border-radius: 10px;
          font-size: 1.1em;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-status {
          margin-top: 15px;
          padding: 12px;
          background: #27ae60;
          color: white;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .contact-info, .contact-form-container {
            padding: 25px;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .resume-download-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .contact-info, .contact-form-container {
            padding: 20px;
          }

          .social-link {
            padding: 10px 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
