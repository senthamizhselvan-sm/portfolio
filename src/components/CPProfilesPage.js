import React from 'react';
import './CPProfilesPage.css';

const CPProfilesPage = () => {
  const profiles = [
    {
      id: 1,
      platform: "LeetCode",
      username: "@senthamizh",
      rank: "Expert",
      globalRank: "Top 17.51% Globally",
      rating: 4,
      maxStars: 5,
      problemsSolved: "800+",
      maxRating: "1740",
      badges: "8",
      dailyStreak: "140+ days",
      contestRank: null,
      profileLink: "https://leetcode.com/senthamizhselvan-sm_cse-N",
      bgColor: "linear-gradient(135deg, #FFA116, #FF8C00)",
      icon: "</>"
    },
    {
      id: 2,
      platform: "CodeChef",
      username: "@selva_cr_007",
      rank: "One Stars (Div 4)",
      globalRank: "Best Rank 1641",
      rating: 1,
      maxStars: 5,
      problemsSolved: "400+",
      maxRating: "1123",
      badges: null,
      dailyStreak: null,
      contestRank: "1641",
      profileLink: "https://codechef.com/users/selva_cr_007",
      bgColor: "linear-gradient(135deg, #D32F2F, #B71C1C)",
      icon: "</>"
    },
    {
      id: 3,
      platform: "Codeforces",
      username: "@senthamizhselvan.s",
      rank: "Pupil (Div 3)",
      globalRank: "Best Contest Rank 8031",
      rating: 1,
      maxStars: 5,
      problemsSolved: "Multiple Problems",
      maxRating: "1000",
      badges: null,
      dailyStreak: null,
      contestRank: "8031",
      profileLink: "https://codeforces.com/profile/senthamizhselvan.s",
      bgColor: "linear-gradient(135deg, #4F46E5, #3B82F6)",
      icon: "</>"
    },
    {
      id: 4,
      platform: "SkillRack",
      username: "@senthamizhselvan s",
      rank: "Active Coder",
      globalRank: "Ranked 74000 globally",
      rating: 2,
      maxStars: 5,
      problemsSolved: "500+",
      maxRating: "N/A",
      badges: null,
      dailyStreak: null,
      contestRank: "74000",
      profileLink: "#",
      bgColor: "linear-gradient(135deg, #FF6B6B, #EE5A52)",
      icon: "</>"
    }
  ];


  const journeyStats = [
    {
      icon: "</> ",
      number: "1700+",
      label: "Total Number of Problems Solved",
      color: "#8B5FBF"
    },
    {
      icon: "⚙️",
      number: "300+",
      label: "Active Number of Days (LeetCode)",
      color: "#4A90E2"
    },
    {
      icon: "🏆",
      number: "1740",
      label: "Highest Rating (LeetCode)",
      color: "#7B68EE"
    }
  ];

  const renderStars = (rating, maxStars) => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : 'empty'}`}
        >
          ⭐
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="cp-profiles-page" id="cp-profiles">
      <div className="cp-container">
        <div className="cp-header">
          <h1 className="cp-title">
            <span className="gradient-text">Competitive Programming Profiles</span>
          </h1>
          <p className="cp-subtitle">
            My journey through algorithms, data structures, and problem-solving across various coding platforms.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="platforms-grid">
          {profiles.map((profile) => (
            <div key={profile.id} className="platform-card">
              <div className="platform-header" style={{ background: profile.bgColor }}>
                <div className="platform-logo">
                  <span className="platform-icon">{profile.icon}</span>
                </div>
                <h2 className="platform-name">{profile.platform}</h2>
                <p className="platform-username">@{profile.username}</p>
              </div>
              
              <div className="platform-content">
                <div className="rank-section">
                  <h3 className="user-rank">{profile.rank}</h3>
                  <p className="global-rank">{profile.globalRank}</p>
                  <div className="star-rating">
                    {renderStars(profile.rating, profile.maxStars)}
                  </div>
                </div>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Problems Solved</span>
                    <span className="stat-value">{profile.problemsSolved}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Max Rating</span>
                    <span className="stat-value">{profile.maxRating}</span>
                  </div>
                  {profile.badges && (
                    <div className="stat-item">
                      <span className="stat-label">Badges</span>
                      <span className="stat-value">🏅 {profile.badges}</span>
                    </div>
                  )}
                  {profile.dailyStreak && (
                    <div className="stat-item">
                      <span className="stat-label">Daily Streak</span>
                      <span className="stat-value">🔥 {profile.dailyStreak}</span>
                    </div>
                  )}
                  {profile.contestRank && (
                    <div className="stat-item">
                      <span className="stat-label">Best Contest Rank</span>
                      <span className="stat-value">🏆 {profile.contestRank}</span>
                    </div>
                  )}
                </div>
                
                <a 
                  href={profile.profileLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-profile-btn"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CP Journey Section */}
        <div className="cp-journey-section">
          <h2 className="journey-title">
            <span className="gradient-text">My CP Journey</span>
          </h2>
          
          <div className="journey-stats">
            {journeyStats.map((stat, index) => (
              <div key={index} className="journey-card">
                <div className="journey-icon" style={{ color: stat.color }}>
                  <span>{stat.icon}</span>
                </div>
                <div className="journey-number" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="journey-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="additional-stats">
          <div className="stats-container">
            <div className="overall-stats">
              <h3 className="stats-title">
                <span className="gradient-text">Overall Statistics</span>
              </h3>
              <div className="stats-row">
                <div className="stat-box">
                  <div className="stat-icon">📈</div>
                  <div className="stat-info">
                    <div className="stat-number">60+</div>
                    <div className="stat-text">Contests Participated</div>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">⏱️</div>
                  <div className="stat-info">
                    <div className="stat-number">800+</div>
                    <div className="stat-text">Hours of Practice</div>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">🧠</div>
                  <div className="stat-info">
                    <div className="stat-number">50+</div>
                    <div className="stat-text">Algorithm Patterns Mastered</div>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-info">
                    <div className="stat-number">90%</div>
                    <div className="stat-text">Problem Solving Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPProfilesPage;