import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner Essentials',
      provider: 'AWS',
      year: 'JUL 2025',
      description: 'Essential knowledge of AWS cloud services, architecture, and best practices for cloud computing.',
      icon: '☁️'
    },
    {
      title: 'Introduction To Internet of things',
      provider: 'NPTEL',
      year: 'OCT 2025',
      description: 'Comprehensive understanding of IoT concepts, devices, connectivity, and applications.',
      icon: '🌐'
    },
    {
      title: 'Introduction to Linux',
      provider: 'LinkedIn',
      year: 'MAR 2025',
      description: 'Proficiency in Linux operating systems, command-line interfaces, and system administration.',
      icon: '🐧'
    },
    {
      title: 'CCNA : Introduction to Networks',
      provider: 'Cisco',
      year: 'NOV 2025',
      description: 'Foundational networking concepts including TCP/IP, routing, switching, and network protocols.',
      icon: '🔗'
    },
    {
      title: 'MongoDB Basics',
      provider: 'MongoDB',
      year: 'JUN 2025',
      description: 'Database management with MongoDB, including document-based storage and NoSQL concepts.',
      icon: '🍃'
    },
  ];

  return (
    <div className="certifications-page" id="certifications">
      <div className="certifications-container">
        <div className="certifications-header">
          <h1 className="certifications-title">
            <span className="gradient-text">Certifications</span>
          </h1>
          <p className="certifications-subtitle">
            Professional certifications and credentials that validate my expertise across various technologies and platforms.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="certification-card" 
              data-provider={cert.provider}
            >
              <div className="certification-header">
                <div className="certification-icon">
                  {cert.icon}
                </div>
                <div className="certification-meta">
                  <div className="certification-provider">{cert.provider}</div>
                  <div className="certification-year">{cert.year}</div>
                </div>
              </div>
              
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="certification-description">{cert.description}</p>
                <div className="certification-badge">
                  Certified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
