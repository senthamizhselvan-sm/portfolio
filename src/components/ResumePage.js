import React from 'react';
import './ResumePage.css';

const ResumePage = () => {
  const personalInfo = {
    name: "Senthamizhselvan S",
    email: "senthamizhselvan.sm@gmail.com",
    phone: "9361177859",
    linkedin: "www.linkedin.com/in/senthamizhselvan-sm",
    github: "github.com/senthamizhselvan-sm"
  };

  const education = {
    degree: "B.E Computer Science and Engineering",
    college: "Kings Engineering College",
    year: "2022-2026",
    cgpa: "8.0 CGPA"
  };

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "BETSHOOW",
      duration: "Nov 2024 - Dec 2024",
      description: "Developed responsive web interfaces and enhanced user experience"
    },
    {
      title: "Research Intern",
      company: "AICTE",
      duration: "Jun 2024 - Jul 2024",
      description: "Conducted research on emerging technologies and AI applications"
    },
    {
      title: "Python Developer Intern",
      company: "Reverence Data",
      duration: "May 2024 - Jun 2024",
      description: "Developed Python applications and worked with data processing"
    },
    {
      title: "Data Analytics Intern",
      company: "BUDDI AI",
      duration: "Mar 2024 - Apr 2024",
      description: "Analyzed data patterns and created analytics dashboards"
    }
  ];

  const projects = [
    {
      title: "Radiology Management System",
      tech: "React.js, Node.js, MongoDB",
      description: "Comprehensive system for radiology department management with appointment scheduling and report generation"
    },
    {
      title: "Silent SOS",
      tech: "React Native, Firebase",
      description: "Emergency alert system for silent distress calls with real-time location tracking"
    },
    {
      title: "Staff Attendance Management",
      tech: "Python, Streamlit, SQLite",
      description: "Automated attendance tracking system with facial recognition capabilities"
    },
    {
      title: "Rural Mint",
      tech: "React.js, Express.js, MongoDB",
      description: "Platform connecting rural farmers with urban markets for direct product sales"
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C++", "C", "SQL"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Django", "Bootstrap"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "SQLite", "Firebase", "Supabase"]
    },
    {
      category: "AI/ML",
      items: ["Pandas", "NumPy", "Keras", "Machine Learning", "Data Analysis"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "VS Code", "Canva", "Linux", "AWS", "IoT"]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner Essentials - AWS (JUL 2025)",
    "Introduction To Internet of things - NPTEL (OCT 2025)",
    "Introduction to Linux - LinkedIn (MAR 2025)",
    "CCNA: Introduction to Networks - Cisco (NOV 2025)",
    "MongoDB Basics - MongoDB (JUN 2025)"
  ];

  const competitiveProgramming = [
    "LeetCode: Expert rank, Top 17.51% globally, 800+ problems solved, Max Rating 1740",
    "CodeChef: One Stars (Div 4), 400+ problems solved, Max Rating 1123, Best Rank 1641",
    "Codeforces: Pupil (Div 3), Best Contest Rank 8031, Max Rating 1000",
    "SkillRack: 500+ problems solved, Ranked 74000 globally"
  ];

  const achievements = [
    "Solution Challenge (Participation in Campus Solution challenge), Google Developer Group",
    "Multiple hackathon participations and technical competitions",
    "Active contributor to open-source projects"
  ];

  return (
    <div className="resume-page" id="resume">
      <div className="resume-container">
        <div className="resume-header">
          <h1 className="resume-title">
            <span className="gradient-text">Resume</span>
          </h1>
          <p className="resume-subtitle">
            Complete overview of my professional experience, skills, and achievements
          </p>
        </div>

        <div className="resume-content">
          {/* Personal Information */}
          <section className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Personal Information</h2>
              <div className="section-icon"><i className="fas fa-user"></i></div>
            </div>
            <div className="personal-info">
              <h3 className="name">{personalInfo.name}</h3>
              <div className="contact-grid">
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">{personalInfo.email}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">{personalInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">LinkedIn:</span>
                  <span className="contact-value">{personalInfo.linkedin}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">GitHub:</span>
                  <span className="contact-value">{personalInfo.github}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Education</h2>
              <div className="section-icon"><i className="fas fa-graduation-cap"></i></div>
            </div>
            <div className="education-card">
              <h3>{education.degree}</h3>
              <p className="institution">{education.college}</p>
              <div className="education-details">
                <span className="year">{education.year}</span>
                <span className="cgpa">{education.cgpa}</span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Experience</h2>
              <div className="section-icon"><i className="fas fa-briefcase"></i></div>
            </div>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Projects</h2>
              <div className="section-icon"><i className="fas fa-rocket"></i></div>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p className="tech-stack">{project.tech}</p>
                  <p className="project-desc">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Technical Skills</h2>
              <div className="section-icon"><i className="fas fa-bolt"></i></div>
            </div>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4>{skillGroup.category}</h4>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Competitive Programming */}
          <section className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Competitive Programming</h2>
              <div className="section-icon"><i className="fas fa-trophy"></i></div>
            </div>
            <div className="cp-list">
              {competitiveProgramming.map((item, index) => (
                <div key={index} className="cp-item">
                  <span className="cp-platform">{item.split(':')[0]}:</span>
                  <span className="cp-details">{item.split(':')[1]}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Certifications</h2>
              <div className="section-icon"><i className="fas fa-certificate"></i></div>
            </div>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  {cert}
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="resume-section">
            <div className="section-header">
              <h2 className="section-title">Achievements</h2>
              <div className="section-icon"><i className="fas fa-star"></i></div>
            </div>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  {achievement}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Download Button */}
        <div className="resume-actions">
          <button className="download-btn">
            <i className="fas fa-file-pdf" style={{ marginRight: '8px' }}></i>
            Download PDF Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;