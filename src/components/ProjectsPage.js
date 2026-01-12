import React from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: "AI-Assisted Radiology Reporting System",
      subtitle: "Imaging Analysis & Report Management",
      description: "A user-friendly radiology application for secure medical scan upload and reporting management. It enables role-based workflows, diagnostic report generation, and analytics support using modern web technologies.",
      image: "/images/radiology-system.jpg",
      technologies: ["Django", "MongoDB", "Bootstrap", "Python", "Git"],
      githubLink: "https://github.com/senthamizhselvan-sm/Django-project"
    },
    {
      title: "SILENT SOS", 
      subtitle: "Smart Instant Life Emergency Notification & Tracking System",
      description: "A mobile-friendly app that disguises itself as a normal news feed interface but secretly triggers SOS alerts. It includes specialized safety features such as Child Help, Fire Rescue, Fall Detection, and Medical Emergency assistance.",
      image: "/images/silent-sos.png",
      technologies: ["React Native", "Expo", "Firebase", "TypeScript", "CSS", "Git"],
      githubLink: "https://github.com/senthamizhselvan-sm/silent-sos"
    },
    {
      title: "STAFF ATTENDANCE",
      subtitle: "Staff Duty & Attendance Monitoring System",
      description: "A platform for tracking staff check-ins, duty hours, and attendance records in real-time. It provides secure authentication, role-based access, and dashboard analytics for easy monitoring and reporting.",
      image: "/images/staff-attendance.png",
      technologies: ["React", "JavaScript", "Supabase", "Git"],
      githubLink: "https://github.com/senthamizhselvan-sm/staff-attendance"
    },
    {
      title: "RURAL MINT",
      subtitle: "E-commerce Platform for Handmade Products",
      description: "Enables artisans to sell authentic handmade products with blockchain-generated authenticity certificates. Buyers can verify product originality and purchase secure, genuine handmade items directly through the platform.",
      image: "/images/rural-mint.jpg",
      technologies: ["React", "JavaScript", "MongoDB", "Firebase", "BlockChain"],
      githubLink: "https://github.com/senthamizhselvan/rural-mint"
    },
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
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;