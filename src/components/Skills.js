import React from 'react';

const Skills = () => {
  const skillCategories = {
    Languages: ['C/C++', 'Python', 'Java', 'HTML/CSS', 'React', 'Node.js', 'MySQL'],
    Tools: ['Git/GitHub', 'VS Code', 'IntelliJ IDEA'],
  };

  return (
    <section id="skills">
      <h2>Skills</h2>

      {Object.entries(skillCategories).map(([category, skills], index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.2em', marginBottom: '10px' }}>{category}</h3>
          <div className="skill-list">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">{skill}</div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
