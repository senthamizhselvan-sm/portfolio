import React from 'react';
import useGithubStats from '../hooks/useGithubStats';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const { repos, loading } = useGithubStats();

  const projects = [
    {
      title: "AI-Assisted Radiology Reporting System",
      subtitle: "Imaging Analysis & Report Management",
      description: "A user-friendly radiology application for secure medical scan upload and reporting management. It enables role-based workflows, diagnostic report generation, and analytics support using modern web technologies.",
      image: null,
      technologies: ["Django", "MongoDB", "Bootstrap", "Python", "Git"],
      githubLink: "https://github.com/senthamizhselvan-sm/Django-project",
      gradient: "linear-gradient(135deg, #0f172a, #334155)"
    },
    {
      title: "SILENT SOS",
      subtitle: "Smart Instant Life Emergency Notification & Tracking System",
      description: "A mobile-friendly app that disguises itself as a normal news feed interface but secretly triggers SOS alerts. It includes specialized safety features such as Child Help, Fire Rescue, Fall Detection, and Medical Emergency assistance.",
      image: "/images/silent-sos.png",
      technologies: ["React Native", "Expo", "Firebase", "TypeScript", "CSS", "Git"],
      githubLink: "https://github.com/senthamizhselvan-sm/silent-sos",
      gradient: "linear-gradient(135deg, #1e3c72, #2a5298)"
    },
    {
      title: "STAFF ATTENDANCE",
      subtitle: "Staff Duty & Attendance Monitoring System",
      description: "A platform for tracking staff check-ins, duty hours, and attendance records in real-time. It provides secure authentication, role-based access, and dashboard analytics for easy monitoring and reporting.",
      image: "/images/staff-attendance.png",
      technologies: ["React", "JavaScript", "Supabase", "Git"],
      githubLink: "https://github.com/senthamizhselvan-sm/staff-attendance",
      gradient: "linear-gradient(135deg, #2b5876, #4e4376)"
    },
    {
      title: "RURAL MINT",
      subtitle: "E-commerce Platform for Handmade Products",
      description: "Enables artisans to sell authentic handmade products with blockchain-generated authenticity certificates. Buyers can verify product originality and purchase secure, genuine handmade items directly through the platform.",
      image: null,
      technologies: ["React", "JavaScript", "MongoDB", "Firebase", "Blockchain"],
      githubLink: "https://github.com/senthamizhselvan/rural-mint",
      gradient: "linear-gradient(135deg, #8A2387, #E94057)"
    },
    {
      title: "Cloud-Native Monitor Platform",
      subtitle: "DevOps Pipeline Tracking Platform",
      description: "A cloud-native web platform tracking DevOps pipelines, deployment health, and task completion metrics dynamically to ensure transparent project lifecycle tracking.",
      image: null,
      technologies: ["TypeScript", "React", "Docker", "DevOps", "Git"],
      githubLink: "https://github.com/senthamizhselvan-sm/cloud-Native-Project-Monitoring-and-Transparency-Platform",
      gradient: "linear-gradient(135deg, #11998e, #38ef7d)"
    },
    {
      title: "Price Detection ML Pipeline",
      subtitle: "ML Model for Pricing Violations",
      description: "An end-to-end Machine Learning pipeline analyzing retail and commodity prices. Uses regression modeling and forecasting to predict future pricing violations and trends.",
      image: null,
      technologies: ["Python", "Jupyter", "Scikit-Learn", "Pandas", "ML"],
      githubLink: "https://github.com/senthamizhselvan-sm/Price_detection-using-Ml",
      gradient: "linear-gradient(135deg, #ff5f6d, #ffc371)"
    },
    {
      title: "Price Fixing Detector",
      subtitle: "Anti-Collusion Analytics Platform",
      description: "An analytical platform scanning market pricing directories to identify potential price-fixing behavior and collusion. Built as part of a national campus developer initiative.",
      image: null,
      technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Analytics"],
      githubLink: "https://github.com/senthamizhselvan-sm/price-fixing-detector",
      gradient: "linear-gradient(135deg, #8E2DE2, #4A00E0)"
    },
    {
      title: "Bank Simulation System",
      subtitle: "Concurrent Transaction Processor",
      description: "A backend system simulating banking operations like money transfer, interest accrual, and database consistency. Features secure logic and concurrent transaction resolution.",
      image: null,
      technologies: ["JavaScript", "Node.js", "Express", "SQLite", "Git"],
      githubLink: "https://github.com/senthamizhselvan-sm/Bank_Simulation",
      gradient: "linear-gradient(135deg, #3a6073, #3a7bd5)"
    }
  ];

  return (
    <div className="projects-page" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="projects-subtitle">
            A collection of what I have built, broken, and built better. Here are some of my projects that I have worked on.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const repoName = project.githubLink.split('/').pop().toLowerCase();
            const matchedRepo = repos.find(r => r.name.toLowerCase() === repoName);

            return (
              <div key={index} className="project-card animate-card">
                <div className="project-image" style={!project.image ? { background: project.gradient } : {}}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-gradient-icon">
                      <i className="fas fa-project-diagram"></i>
                    </div>
                  )}
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fab fa-github"></i>
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {!loading && matchedRepo && (
                    <div className="project-git-stats">
                      <span><i className="fas fa-star text-gold"></i>{matchedRepo.stargazers_count} stars</span>
                      <span><i className="fas fa-code-branch text-blue"></i>{matchedRepo.forks_count} forks</span>
                      {matchedRepo.language && (
                        <span><i className="fas fa-circle text-purple-dot"></i>{matchedRepo.language}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;