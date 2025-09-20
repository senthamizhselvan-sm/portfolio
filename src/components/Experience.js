import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'TechCorp',
      duration: 'June 2023 – December 2023',
      location: 'Remote',
      description: [
        'Built dynamic React components serving 1000+ daily active users',
        'Improved UI performance by 40% through code optimization and lazy loading',
        'Collaborated with design team to implement responsive layouts across devices',
        'Participated in daily standups and sprint planning using Agile methodology'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Git', 'Figma'],
      type: 'internship'
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      duration: 'January 2024 – Present',
      location: 'Remote',
      description: [
        'Developed custom websites for 5+ small businesses using modern web technologies',
        'Managed full project lifecycle from client consultation to deployment',
        'Implemented SEO best practices resulting in 60% improvement in search rankings',
        'Provided ongoing maintenance and technical support for client websites'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'HTML/CSS', 'WordPress'],
      type: 'freelance'
    },
    {
      title: 'Open Source Contributor',
      company: 'Various Projects',
      duration: 'September 2023 – Present',
      location: 'Remote',
      description: [
        'Contributed to 10+ open-source projects with 75+ commits on GitHub',
        'Fixed critical bugs and implemented new features for community tools',
        'Improved documentation and code quality for better developer experience',
        'Mentored junior contributors and reviewed pull requests'
      ],
      technologies: ['Python', 'JavaScript', 'React', 'Git', 'GitHub Actions'],
      type: 'volunteer'
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="experience-main-info">
                <h3 className="job-title">{exp.title}</h3>
                <h4 className="company-name">{exp.company}</h4>
                <div className="job-meta">
                  <span className="duration">{exp.duration}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <div className={`experience-badge ${exp.type}`}>
                {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
              </div>
            </div>
            
            <ul className="job-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            
            <div className="technologies-section">
              <strong>Technologies: </strong>
              <div className="tech-stack">
                {exp.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .experience-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .experience-card {
          background: #fff;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-left: 5px solid transparent;
          border-image: linear-gradient(135deg, #667eea, #764ba2) 1;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .experience-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 20px;
        }

        .job-title {
          font-size: 1.5em;
          color: #2c3e50;
          margin: 0 0 8px 0;
          font-weight: 700;
        }

        .company-name {
          font-size: 1.2em;
          color: #667eea;
          margin: 0 0 12px 0;
          font-weight: 600;
        }

        .job-meta {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .duration {
          color: #7f8c8d;
          font-weight: 600;
          font-size: 0.95em;
        }

        .location {
          color: #95a5a6;
          font-style: italic;
          font-size: 0.95em;
        }

        .experience-badge {
          padding: 8px 16px;
          border-radius: 25px;
          font-size: 0.8em;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          flex-shrink: 0;
        }

        .experience-badge.internship {
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          color: white;
        }

        .experience-badge.freelance {
          background: linear-gradient(135deg, #43e97b, #38f9d7);
          color: white;
        }

        .experience-badge.volunteer {
          background: linear-gradient(135deg, #fa709a, #fee140);
          color: white;
        }

        .job-description {
          margin: 20px 0;
          padding: 0;
          list-style: none;
        }

        .job-description li {
          margin-bottom: 12px;
          line-height: 1.7;
          position: relative;
          padding-left: 25px;
          color: #34495e;
        }

        .job-description li::before {
          content: '●';
          position: absolute;
          left: 0;
          color: #667eea;
          font-size: 1.2em;
          top: -2px;
        }

        .technologies-section {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 2px solid #ecf0f1;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
        }

        .tech-badge {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85em;
          font-weight: 600;
          transition: transform 0.2s ease;
        }

        .tech-badge:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .experience-card {
            padding: 20px;
          }

          .experience-header {
            flex-direction: column;
            gap: 15px;
          }

          .job-meta {
            flex-direction: column;
            gap: 5px;
          }

          .experience-badge {
            align-self: flex-start;
          }

          .job-title {
            font-size: 1.3em;
          }

          .company-name {
            font-size: 1.1em;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
