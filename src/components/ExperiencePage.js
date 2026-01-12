import React from 'react';
import './ExperiencePage.css';

const ExperiencePage = () => {
  const experiences = [
    {
      role: "Application Development Intern",
      company: "BETSHOOW",
      location: "India",
      duration: "Nov 2025 - Dec 2025",
      description: [
        "Completed a Frontend Development Internship with hands-on experience in Django, Bootstrap, and UI/UX workflows",
        "Improved UI performance and strengthened API integration for the radiology management system",
        "Collaborated with the development team to implement responsive components and enhance overall user experience",
        "Worked on modern web development practices and user interface optimization",
        "Gained practical experience in full-stack development workflows and project management"
      ],
      icon: "💻"
    },
    {
      role: "Java Full Stack Intern",
      company: "AICTE",
      location: "India", 
      duration: "Jun 2025 - Jul 2025",
      description: [
        "Completed a Java Full Stack Internship, gaining hands-on experience in Java, Spring Boot, and related frameworks",
        "Enhanced backend-to-frontend integration efficiency through practical projects, strengthening full-stack development",
        "Built and tested scalable RESTful APIs while collaborating on end-to-end application workflows",
        "Developed enterprise-level applications using Spring Boot and modern Java technologies",
        "Participated in agile development processes and code review sessions"
      ],
      icon: "☕"
    }
  ];

  return (
    <div className="experience-page" id="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h1 className="experience-title">
            <span className="gradient-text">Professional Experience</span>
          </h1>
          <p className="experience-subtitle">
            I have had the opportunity to work with some amazing companies and teams, where I have 
            gained valuable experience and skills. Here are some of my key experiences:
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="experience-icon">
                <span>{experience.icon}</span>
              </div>
              
              <div className="experience-content">
                <div className="experience-header-info">
                  <div className="experience-title-section">
                    <h3 className="experience-role">{experience.role}</h3>
                    <h4 className="experience-company">{experience.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <p className="experience-duration">{experience.duration}</p>
                    <p className="experience-location">{experience.location}</p>
                  </div>
                </div>
                
                <div className="experience-description">
                  <ul>
                    {experience.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;