import React, { useState } from 'react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'Warehouse Management System',
      tech: ['Spring Boot', 'React', 'MySQL', 'Node.js', 'REST API'],
      date: 'February 2025',
      category: 'Full-Stack',
      status: 'Completed',
      description: 'A comprehensive warehouse management solution that optimizes inventory operations and integrates with ERP systems.',
      details: [
        'Optimized WMS operations for efficient inventory management serving 100+ warehouses',
        'Integrated with ERP systems ensuring 99.9% real-time data accuracy',
        'Developed RESTful APIs improving data flow efficiency by 40%',
        'Implemented role-based access control for enhanced security'
      ],
      github: 'https://github.com/senthamizhselvan-s/warehouse-management',
      demo: 'https://warehouse-demo.vercel.app',
      image: '🏭',
      highlights: ['Real-time tracking', 'ERP Integration', 'Role-based access']
    },
    {
      title: 'Interactive Game Collection',
      tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game APIs'],
      date: 'December 2024',
      category: 'Frontend',
      status: 'Completed',
      description: 'A collection of interactive browser-based games with engaging mechanics and optimized performance.',
      details: [
        'Developed 5+ interactive games using HTML5 Canvas and JavaScript',
        'Implemented game physics and collision detection systems',
        'Optimized performance achieving 60+ FPS on all devices',
        'Added leaderboard and scoring systems with local storage'
      ],
      github: 'https://github.com/senthamizhselvan-s/game-collection',
      demo: 'https://games-collection.vercel.app',
      image: '🎮',
      highlights: ['60+ FPS performance', 'Physics engine', 'Cross-platform']
    },
    {
      title: 'Multi-Platform Utility Suite',
      tech: ['Flutter', 'Dart', 'Java', 'C++', 'SQLite'],
      date: 'January 2025 – Present',
      category: 'Mobile',
      status: 'Completed',
      description: 'Cross-platform utility applications designed to streamline everyday tasks and boost productivity.',
      details: [
        'Built cross-platform apps using Flutter serving 500+ daily users',
        'Implemented efficient algorithms reducing calculation time by 60%',
        'Designed intuitive UI/UX with 95% user satisfaction rating',
        'Added offline functionality with local database synchronization'
      ],
      github: 'https://github.com/senthamizhselvan-s/utility-suite',
      demo: null,
      image: '🛠️',
      highlights: ['Cross-platform', 'Offline support', '95% satisfaction']
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Mobile'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#27ae60';
      default: return '#95a5a6';
    }
  };

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      
      {/* Project Filter */}
      <div className="project-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedFilter === category ? 'active' : ''}`}
            onClick={() => setSelectedFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-icon">{project.image}</div>
              <div className="project-meta">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span 
                    className="project-status" 
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="project-date">{project.date}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>

            <div className="project-highlights">
              {project.highlights.map((highlight, idx) => (
                <span key={idx} className="highlight-tag">✨ {highlight}</span>
              ))}
            </div>

            <ul className="project-details">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>

            <div className="tech-stack">
              <strong>Tech Stack:</strong>
              <div className="tech-tags">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <span>📚</span> GitHub
              </a>
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  <span>🚀</span> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .project-filter {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin: 30px 0 40px;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid transparent;
          background: rgba(255, 255, 255, 0.1);
          color: #2c3e50;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 0.9em;
        }

        .filter-btn:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .project-header {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .project-icon {
          font-size: 3em;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 15px;
          flex-shrink: 0;
        }

        .project-meta {
          flex: 1;
        }

        .project-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 8px;
        }

        .project-title {
          font-size: 1.4em;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
          line-height: 1.3;
        }

        .project-status {
          padding: 4px 12px;
          border-radius: 15px;
          color: white;
          font-size: 0.75em;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .project-date {
          color: #7f8c8d;
          margin: 0 0 10px 0;
          font-size: 0.9em;
          font-weight: 500;
        }

        .project-description {
          color: #34495e;
          line-height: 1.6;
          margin: 0;
          font-size: 0.95em;
        }

        .project-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 20px 0;
        }

        .highlight-tag {
          background: linear-gradient(135deg, #43e97b, #38f9d7);
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.75em;
          font-weight: 600;
        }

        .project-details {
          margin: 20px 0;
          padding: 0;
          list-style: none;
        }

        .project-details li {
          margin-bottom: 10px;
          line-height: 1.6;
          position: relative;
          padding-left: 20px;
          color: #34495e;
        }

        .project-details li::before {
          content: '▶';
          position: absolute;
          left: 0;
          color: #667eea;
          font-size: 0.8em;
        }

        .tech-stack {
          margin: 25px 0;
          padding-top: 20px;
          border-top: 2px solid #ecf0f1;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
        }

        .tech-tag {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 0.8em;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9em;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
        }

        .github-link {
          background: #24292e;
          color: white;
        }

        .github-link:hover {
          background: #1a1e22;
          transform: translateY(-2px);
        }

        .demo-link {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .demo-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .project-card {
            padding: 25px;
          }

          .project-header {
            flex-direction: column;
            text-align: center;
          }

          .project-icon {
            align-self: center;
          }

          .project-title-row {
            flex-direction: column;
            gap: 10px;
          }

          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
