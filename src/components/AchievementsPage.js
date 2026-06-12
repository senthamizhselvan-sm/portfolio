import React, { useState } from 'react';
import './AchievementsPage.css';

const AchievementsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const achievements = [
    {
      id: 2,
      title: "TECHSPRINT – GDG Finalist",
      date: "2024",
      organization: "Google Developer Group",
      description: "Finalist among 250 participants; built a price-fixing detection system using Google tools",
      image: "/images/techsprint-gdg.jpg",
      category: "Competitions",
      link: "#",
      icon: "fas fa-bullseye"
    },
    {
      id: 3,
      title: "All India Developers Challenge",
      date: "2024",
      organization: "National Competition",
      description: "Built Silent SOS, a security app designed to help individuals in emergencies",
      image: "/images/all-india-dev.jpg",
      category: "Hackathons",
      link: "#",
      icon: "fas fa-rocket"
    },
    {
      id: 4,
      title: "TechNove Participant",
      date: "2024",
      organization: "TechNova INDIA",
      description: "Built A built board Checker for violation detection system",
      image: "/images/technove.jpg",
      category: "Hackathons",
      link: "#",
      icon: "fas fa-laptop-code"
    },
    {
      id: 5,
      title: "Adobe Quiz 2025 Participant",
      date: "2025",
      organization: "Adobe INDIA",
      description: "Top 500 / 10000+ participants in Adobe technical quiz competition",
      image: "/images/adobe-quiz.jpg",
      category: "Competitions",
      link: "#",
      icon: "fas fa-palette"
    },
    {
      id: 6,
      title: "Google Solution Challenge",
      date: "2024",
      organization: "Google Developer Group",
      description: "Participation in Campus Solution challenge focusing on real-world problem solving",
      image: "/images/google-solution.jpg",
      category: "Competitions",
      link: "#",
      icon: "fas fa-star"
    }
  ];

  const codingProfiles = [
    {
      id: 1,
      platform: "LeetCode",
      username: "senthamizh",
      stats: {
        globalRank: "Top 17.51% Globally",
        solved: "800+ problems",
        maxRating: "1740",
        badges: "8 Badges",
        streak: "140+ days"
      },
      link: "https://leetcode.com/senthamizhselvan-sm_cse-N",
      icon: "fas fa-code",
      color: "#FFA116"
    },
    {
      id: 2,
      platform: "CodeChef",
      username: "selva_c_007",
      stats: {
        division: "Div 4",
        stars: "One Stars (Best)",
        maxRating: "1123",
        bestRank: "1641",
        solved: "400+ problems"
      },
      link: "https://codechef.com/users/selva_cr_007",
      icon: "fas fa-utensils",
      color: "#5B4638"
    },
    {
      id: 3,
      platform: "CodeForces",
      username: "senthamizhselvan.s",
      stats: {
        division: "Div 3",
        maxRating: "1000",
        bestRank: "8031",
        contests: "Multiple contests"
      },
      link: "https://codeforces.com/profile/senthamizhselvan.s",
      icon: "fas fa-terminal",
      color: "#1F8ACB"
    },
    {
      id: 4,
      platform: "SkillRack",
      username: "senthamizhselvan s",
      stats: {
        solved: "500+ problems",
        globalRank: "74000 globally",
        category: "Programming practice"
      },
      link: "#",
      icon: "fas fa-cubes",
      color: "#FF6B6B"
    }
  ];

  const filterOptions = ['All', 'Hackathons', 'Competitions', 'Coding Profiles'];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesSearch = achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || achievement.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const filteredCodingProfiles = codingProfiles.filter(profile => {
    const matchesSearch = profile.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || activeFilter === 'Coding Profiles';
    return matchesSearch && matchesFilter;
  });

  const showCodingProfiles = activeFilter === 'All' || activeFilter === 'Coding Profiles';
  const showAchievements = activeFilter === 'All' || activeFilter !== 'Coding Profiles';

  return (
    <div className="achievements-page" id="achievements">
      <div className="achievements-container">
        <div className="achievements-header">
          <h1 className="achievements-title">
            <span className="gradient-text">Achievements & Accolades</span>
          </h1>
          <p className="achievements-subtitle">
            Recognitions that mark milestones in my journey of innovation and problem-solving.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="achievements-controls">
          <div className="search-container">
            <div className="search-box">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search achievements..."
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

        {/* Achievements Grid */}
        {showAchievements && filteredAchievements.length > 0 && (
          <div className="achievements-grid">
            {filteredAchievements.map((achievement) => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-header">
                  <div className="achievement-icon">
                    <i className={`${achievement.icon} achievement-fa-icon`} style={{ fontSize: '1.5rem', color: '#8B5FBF' }}></i>
                  </div>
                  <div className="achievement-meta">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <div className="achievement-date">{achievement.date}</div>
                    <div className="achievement-org">{achievement.organization}</div>
                  </div>
                </div>
                
                <div className="achievement-image">
                  <img src={achievement.image} alt={achievement.title} />
                </div>
                
                <div className="achievement-content">
                  <p className="achievement-description">{achievement.description}</p>
                  {achievement.link !== "#" && (
                    <a 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      View LinkedIn Post
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Competitive Programming Section */}
        {showCodingProfiles && (
          <div className="coding-section">
            <h2 className="section-title">
              <span className="gradient-text">Competitive Programming</span>
            </h2>
            <div className="coding-profiles-grid">
              {filteredCodingProfiles.map((profile) => (
                <div key={profile.id} className="coding-card">
                  <div className="coding-header">
                    <div className="platform-icon" style={{ color: profile.color }}>
                      <i className={`${profile.icon} platform-fa-icon`} style={{ fontSize: '1.8rem' }}></i>
                    </div>
                    <div className="platform-info">
                      <h3 className="platform-name">{profile.platform}</h3>
                      <p className="username">@{profile.username}</p>
                    </div>
                  </div>
                  
                  <div className="coding-stats">
                    {Object.entries(profile.stats).map(([key, value]) => (
                      <div key={key} className="stat-item">
                        <span className="stat-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                        <span className="stat-value">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  {profile.link !== "#" && (
                    <a 
                      href={profile.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="profile-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Visit Profile
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {((showAchievements && filteredAchievements.length === 0) || 
          (showCodingProfiles && filteredCodingProfiles.length === 0)) && (
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

export default AchievementsPage;