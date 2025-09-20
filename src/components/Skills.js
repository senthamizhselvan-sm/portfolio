import React, { useState } from 'react';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skillCategories = {
    'Programming Languages': [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'JavaScript', level: 85, icon: '⚡' },
      { name: 'Java', level: 80, icon: '☕' },
      { name: 'C/C++', level: 75, icon: '⚙️' },
      { name: 'HTML/CSS', level: 90, icon: '🎨' },
    ],
    'Frameworks & Libraries': [
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'Express.js', level: 75, icon: '🚀' },
      { name: 'Spring Boot', level: 70, icon: '🍃' },
      { name: 'Flutter', level: 65, icon: '💙' },
    ],
    'Databases & Tools': [
      { name: 'MySQL', level: 80, icon: '🗄️' },
      { name: 'MongoDB', level: 75, icon: '🍃' },
      { name: 'Git/GitHub', level: 85, icon: '📚' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'IntelliJ IDEA', level: 75, icon: '🧠' },
      { name: 'AWS', level: 70, icon: '☁️' },
      { name: 'Docker', level: 60, icon: '🐳' },
    ]
  };

  const categories = ['All', ...Object.keys(skillCategories)];

  const getFilteredSkills = () => {
    if (selectedCategory === 'All') {
      return Object.entries(skillCategories).flatMap(([category, skills]) =>
        skills.map(skill => ({ ...skill, category }))
      );
    }
    return skillCategories[selectedCategory]?.map(skill => ({ ...skill, category: selectedCategory })) || [];
  };

  const getSkillColor = (level) => {
    if (level >= 85) return 'linear-gradient(135deg, #667eea, #764ba2)';
    if (level >= 70) return 'linear-gradient(135deg, #4facfe, #00f2fe)';
    if (level >= 60) return 'linear-gradient(135deg, #43e97b, #38f9d7)';
    return 'linear-gradient(135deg, #fa709a, #fee140)';
  };

  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      
      {/* Category Filter */}
      <div className="skills-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {getFilteredSkills().map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="skill-card">
            <div className="skill-header">
              <span className="skill-icon">{skill.icon}</span>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar-container">
              <div 
                className="skill-bar"
                style={{
                  width: `${skill.level}%`,
                  background: getSkillColor(skill.level)
                }}
              ></div>
            </div>
            <div className="skill-category-tag">{skill.category}</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .skills-filter {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
        }

        .skill-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .skill-icon {
          font-size: 1.5em;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 10px;
        }

        .skill-name {
          flex: 1;
          margin: 0;
          font-size: 1.1em;
          font-weight: 600;
          color: #2c3e50;
        }

        .skill-percentage {
          font-weight: 700;
          color: #667eea;
          font-size: 1em;
        }

        .skill-bar-container {
          width: 100%;
          height: 8px;
          background: #ecf0f1;
          border-radius: 10px;
          overflow: hidden;
          margin: 10px 0 15px;
        }

        .skill-bar {
          height: 100%;
          border-radius: 10px;
          transition: width 1.5s ease-in-out;
          position: relative;
        }

        .skill-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .skill-category-tag {
          display: inline-block;
          padding: 4px 10px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border-radius: 12px;
          font-size: 0.75em;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .skill-card {
            padding: 20px;
          }

          .skills-filter {
            gap: 8px;
          }

          .filter-btn {
            padding: 8px 16px;
            font-size: 0.85em;
          }
        }

        @media (max-width: 480px) {
          .skill-header {
            gap: 8px;
          }

          .skill-icon {
            width: 35px;
            height: 35px;
            font-size: 1.3em;
          }

          .skill-name {
            font-size: 1em;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
