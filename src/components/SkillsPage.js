import React from 'react';
import './SkillsPage.css';

const SkillsPage = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
      ]
    },
    {
      category: "Artificial Intelligence",
      skills: [
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/240px-Keras_logo.svg.png" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
      ]
    },
    {
      category: "Frontend and Design",
      skills: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
      ]
    },
    {
      category: "Backend and Databases",
      skills: [
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ]
    },
    {
      category: "CS Fundamentals",
      skills: [
        { name: "Data Structures", logo: "https://cdn-icons-png.flaticon.com/512/2620/2620500.png" },
        { name: "Algorithms", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
        { name: "Computer Architecture", logo: "https://cdn-icons-png.flaticon.com/512/2976/2976606.png" },
        { name: "Operating Systems", logo: "https://cdn-icons-png.flaticon.com/512/518/518713.png" },
        { name: "DBMS", logo: "https://cdn-icons-png.flaticon.com/512/1048/1048128.png" },
        { name: "OOPs", logo: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png" }
      ]
    },
    {
      category: "Soft Skills and Tools",
      skills: [
        { name: "Leadership", logo: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png" },
        { name: "Team Management", logo: "https://cdn-icons-png.flaticon.com/512/681/681443.png" },
        { name: "Communication", logo: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VSCode", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "IntelliJ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
        { name: "PostMan", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
        { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
      ]
    }
  ];

  return (
    <div className="skills-page" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">
            <span className="gradient-text">Technical Expertise</span>
          </h1>
          <p className="skills-subtitle">
            A comprehensive toolkit of programming languages, frameworks, and technologies that I 
            have mastered throughout my journey.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-icons-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <div className="skill-logo">
                      <img src={skill.logo} alt={skill.name} className="tech-logo" />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="skills-summary">
          <h3 className="summary-title">
            <span className="gradient-text">Core Competencies</span>
          </h3>
          <div className="competencies-grid">
            <div className="competency-item">
              <h4>Problem Solving & DSA</h4>
              <p>Strong algorithmic thinking with extensive practice in data structures and algorithms</p>
            </div>
            <div className="competency-item">
              <h4>Full-Stack Development</h4>
              <p>MERN stack expertise with experience in Angular, Flask, and modern web technologies</p>
            </div>
            <div className="competency-item">
              <h4>AI/ML Engineering</h4>
              <p>Building intelligent systems with TensorFlow, Keras achieving 85%+ accuracy in various domains</p>
            </div>
            <div className="competency-item">
              <h4>Team Collaboration</h4>
              <p>Agile development experience with Git, Jira, Confluence, and cross-functional team leadership</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;