import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container" id="hero">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello everyone! I am<br />
              <span className="gradient-text">Senthamizh Selvan</span>
            </h1>
            <p className="hero-description">
              Humble, optimistic ambivert weaving code with care and collaboration.
            </p>
            <div className="hero-buttons">
              <button className="resume-btn">Resume</button>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/s-senthamizh-selvan-73709a32a/" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/senthamizhselvan-sm" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:senthamizhselvan.sm@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://instagram.com/senthamizhselvan" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <img src="/images/profile-image.png" alt="Senthamizh Selvan" />
            </div>
          </div>
        </div>
      </section>

      {/* Things I Do Section */}
      <section className="things-i-do">
        <h2 className="section-title">
          <span className="gradient-text">Things I Do</span>
        </h2>
        <p className="section-subtitle">
          Blending logic, creativity, and a growth mindset to build, solve, and inspire.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>Competitive Programming</h3>
            <p>Sharpening problem-solving skills and Data Structures & Algorithms through platforms like LeetCode, CodeChef, and Codeforces. I enjoy tackling algorithmic challenges and optimizing code for performance.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Full-Stack Development</h3>
            <p>Building dynamic apps with Next.js, React.js, Angular.js, Flask, Node.js, and more using both frontend and backend with databases like MySQL, PostgreSQL, MongoDB, and use App/wire for serverless infrastructure.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>AI, ML & Data Science</h3>
            <p>Working with Python, TensorFlow, Keras and PyTorch, I dive deep into ML/DL, large language models, data visualization, applied math, stats, and real-world problem solving through intelligent systems.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Cloud & DevOps</h3>
            <p>Deploying and maintaining apps using Azure, Docker, Linux, Git, and GitHub. Create workflows and manage scalable cloud infrastructure with modern DevOps practices.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Hackathons & Freelancing</h3>
            <p>Engaging in hackathons, networking, collaborating, coding contests, and freelance projects to apply knowledge, work under pressure, and build innovative solutions in diverse team environments.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Community & Open Source</h3>
            <p>Giving back by contributing to open source and volunteering with communities like Microsoft Learn Student Ambassador and Google Developer Groups. I love mentoring, collaborating, and sharing knowledge.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-edit"></i>
            </div>
            <h3>Content & Creativity</h3>
            <p>Expressing ideas through content on LinkedIn, YouTube, and Instagram. I also explore writing, singing and listening to music, philosophies, spirituality, and visual art as forms of creative expression.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3>Health & Lifestyle</h3>
            <p>Staying active with swimming, gym workouts, travel, meditation, yoga and mindful eating. I believe that wellness fuels both creativity and productivity in my everyday life. A lot of self love to take care of myself.</p>
          </div>
        </div>
      </section>

      {/* Footer with social links */}
      <div className="hero-footer">
        <p>With <span className="heart" style={{ color: '#ff4d4d' }}><i className="fas fa-heart"></i></span> by Senthamizh Selvan</p>
        <div className="footer-social">
          <a href="https://linkedin.com/in/s-senthamizh-selvan-73709a32a/" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/yourprofile" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:senthamizhselvan.sm@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/senthamizhselvan-sm" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
