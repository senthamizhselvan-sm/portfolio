import React, { useState } from 'react';
import './EducationPage.css';

const EducationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const education = [
    {
      id: 1,
      degree: "Bachelor of Engineering (B.E)",
      specialization: "COMPUTER SCIENCE (CSE)",
      institution: "Chennai Institute of Technology",
      duration: "Sep 2021 - Present",
      location: "Chennai, India",
      cgpa: "8.5/10",
      status: "Currently Pursuing",
      description: "Pursuing undergraduate degree in Computer Science and Engineering with focus on software development, algorithms, data structures, and modern web technologies. Actively involved in practical projects and internships.",
      image: "/images/chennai-institute.jpg",
      category: "Degree",
      icon: "🎓",
      highlights: [
        "Strong foundation in Computer Science fundamentals",
        "Hands-on experience with multiple programming languages",
        "Active participation in coding competitions and hackathons",
        "Completed internships with leading tech companies",
        "Built multiple full-stack web applications and AI projects",
        "Leadership roles in technical events and student organizations"
      ],
      subjects: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Machine Learning",
        "Web Development",
        "Computer Architecture",
        "Artificial Intelligence"
      ],
      achievements: [
        "Maintained consistent CGPA of 8.5/10 throughout the program",
        "Won 3rd prize in Microsoft Innovation Challenge 2024",
        "Completed multiple industry internships",
        "Built 6+ major projects showcasing technical skills",
        "Active contributor to open-source projects",
        "Mentored junior students in programming and career guidance"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Java Full Stack Development",
      issuer: "AICTE",
      date: "Jul 2025",
      description: "Comprehensive training in Java, Spring Boot, and full-stack development methodologies",
      image: "/images/aicte-cert.jpg",
      category: "Professional",
      icon: "☕",
      skills: ["Java", "Spring Boot", "RESTful APIs", "Database Integration"]
    },
    {
      id: 2,
      title: "Frontend Development Specialization",
      issuer: "BETSHOOW",
      date: "Dec 2025",
      description: "Advanced frontend development with Django, Bootstrap, and modern UI/UX practices",
      image: "/images/betshoow-cert.jpg",
      category: "Professional",
      icon: "🎨",
      skills: ["Django", "Bootstrap", "UI/UX", "Responsive Design"]
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Data Structures and Algorithms Mastery",
      platform: "Self-Learning + Practice",
      description: "Comprehensive study of DSA concepts with 800+ LeetCode problems solved",
      category: "Technical",
      icon: "📊"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      platform: "Industry Projects",
      description: "Hands-on experience building complete web applications using MERN stack",
      category: "Development",
      icon: "🌐"
    },
    {
      id: 3,
      title: "Cloud Computing & DevOps",
      platform: "Azure + AWS",
      description: "Experience with cloud deployment, Docker, and modern DevOps practices",
      category: "Cloud",
      icon: "☁️"
    }
  ];

  const filterOptions = ['All', 'Degree', 'Professional', 'Technical', 'Development', 'Cloud'];

  const filteredEducation = education.filter(item => {
    const matchesSearch = item.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredCertifications = certifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || cert.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || course.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="education-page" id="education">
      <div className="education-container">
        <div className="education-header">
          <h1 className="education-title">
            <span className="gradient-text">Education & Learning</span>
          </h1>
          <p className="education-subtitle">
            My academic journey and continuous learning path in technology and innovation.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="education-controls">
          <div className="search-container">
            <div className="search-box">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search education & certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          
          <div className="filter-tabs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Formal Education Section */}
        {(activeFilter === 'All' || activeFilter === 'Degree') && (
          <div className="education-section">
            <h2 className="section-title">
              <span className="gradient-text">Formal Education</span>
            </h2>
            <div className="education-grid">
              {filteredEducation.map((edu) => (
                <div key={edu.id} className="education-card main-degree">
                  <div className="education-header-card">
                    <div className="education-icon">
                      <span className="education-emoji">{edu.icon}</span>
                    </div>
                    <div className="education-meta">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <h4 className="education-specialization">{edu.specialization}</h4>
                      <div className="education-institution">{edu.institution}</div>
                      <div className="education-duration">{edu.duration}</div>
                      <div className="education-location">{edu.location}</div>
                      <div className="education-cgpa">CGPA: {edu.cgpa}</div>
                    </div>
                  </div>
                  
                  <div className="education-content">
                    <p className="education-description">{edu.description}</p>
                    
                    <div className="education-details">
                      <div className="detail-section">
                        <h5>Key Highlights</h5>
                        <ul className="highlights-list">
                          {edu.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="detail-section">
                        <h5>Core Subjects</h5>
                        <div className="subjects-grid">
                          {edu.subjects.map((subject, index) => (
                            <span key={index} className="subject-tag">{subject}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="detail-section">
                        <h5>Academic Achievements</h5>
                        <ul className="achievements-list">
                          {edu.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {(activeFilter === 'All' || ['Professional', 'AI/ML', 'Leadership'].includes(activeFilter)) && (
          <div className="certifications-section">
            <h2 className="section-title">
              <span className="gradient-text">Professional Certifications</span>
            </h2>
            <div className="certifications-grid">
              {filteredCertifications.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <div className="cert-header">
                    <div className="cert-icon">
                      <span className="cert-emoji">{cert.icon}</span>
                    </div>
                    <div className="cert-info">
                      <h3 className="cert-title">{cert.title}</h3>
                      <div className="cert-issuer">{cert.issuer}</div>
                      <div className="cert-date">{cert.date}</div>
                    </div>
                  </div>
                  
                  <div className="cert-content">
                    <p className="cert-description">{cert.description}</p>
                    <div className="cert-skills">
                      {cert.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Learning Section */}
        {(activeFilter === 'All' || ['Technical', 'Development', 'Cloud'].includes(activeFilter)) && (
          <div className="courses-section">
            <h2 className="section-title">
              <span className="gradient-text">Continuous Learning</span>
            </h2>
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div className="course-icon">
                    <span className="course-emoji">{course.icon}</span>
                  </div>
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <div className="course-platform">{course.platform}</div>
                    <p className="course-description">{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredEducation.length === 0 && filteredCertifications.length === 0 && filteredCourses.length === 0 && (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>No results found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationPage;