import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: 'SQL Programming Certification',
      provider: 'LinkedIn',
      year: '2025',
      description: 'Proficient in database management and SQL querying.',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      provider: 'AWS',
      year: '2025',
      description: 'Certified in AWS cloud fundamentals.',
    },
    {
      title: 'Full Stack Front-End Development',
      provider: 'LinkedIn',
      year: '2024',
      description: 'Certified in Full Stack Front-End technologies.',
    },
    {
      title: 'Programming Fundamentals',
      provider: 'LinkedIn',
      year: '2024',
      description: 'Proficient in essential programming concepts.',
    },
    {
      title: 'Cybersecurity Certification',
      provider: 'Cisco',
      year: '2024',
      description: 'Trained in cybersecurity principles and practices.',
    },
    {
      title: 'Modern AI Certification',
      provider: 'Cisco',
      year: '2024',
      description: 'Knowledgeable in modern AI technologies and trends.',
    },
  ];

  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {certifications.map((cert, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#fff',
              marginBottom: '20px',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ marginBottom: '5px', fontSize: '1.2em' }}>
              {cert.title} <span style={{ color: '#666', fontSize: '0.9em' }}>| {cert.provider} ({cert.year})</span>
            </h3>
            <p>{cert.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
