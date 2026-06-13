import React from 'react';
import useLeetcodeStats from '../hooks/useLeetcodeStats';
import useCodeforcesStats from '../hooks/useCodeforcesStats';
import './CPProfilesPage.css';

const CPProfilesPage = () => {
  const { stats: leetcode } = useLeetcodeStats();
  const { stats: codeforces } = useCodeforcesStats();

  const profiles = [
    {
      id: 1,
      platform: "LeetCode",
      username: "senthamizhselvan-sm_cse-N",
      rank: "Expert",
      globalRank: leetcode ? `Ranked #${leetcode.ranking.toLocaleString()} Globally` : "Top 17.51% Globally",
      rating: 4,
      maxStars: 5,
      problemsSolved: leetcode ? `${leetcode.totalSolved}+` : "800+",
      maxRating: "1740",
      badges: leetcode ? `${leetcode.totalSolved > 0 ? "8 Badges" : ""}` : "8 Badges",
      dailyStreak: "300+ days",
      contestRank: null,
      profileLink: "https://leetcode.com/senthamizhselvan-sm_cse-N",
      color: "#FFA116",
      icon: "fas fa-code"
    },
    {
      id: 2,
      platform: "CodeChef",
      username: "selva_cr_007",
      rank: "Two Stars (Div 3)",
      globalRank: "Rating: 1419 | Ranked #40,298 Globally",
      rating: 2,
      maxStars: 5,
      problemsSolved: "400+",
      maxRating: "1422",
      badges: "1 Skill Test",
      dailyStreak: null,
      contestRank: "1641",
      countryRank: "37,708",
      profileLink: "https://codechef.com/users/selva_cr_007",
      color: "#D32F2F",
      icon: "fas fa-utensils"
    },
    {
      id: 3,
      platform: "Codeforces",
      username: "senthamizhselvan.s",
      rank: codeforces ? codeforces.rank : "Pupil (Div 3)",
      globalRank: codeforces ? `Current Rating ${codeforces.rating} / Max Rating ${codeforces.maxRating}` : "Best Contest Rank 8031",
      rating: 1,
      maxStars: 5,
      problemsSolved: "Multiple Problems",
      maxRating: codeforces ? codeforces.maxRating.toString() : "1000",
      badges: null,
      dailyStreak: null,
      contestRank: codeforces ? codeforces.rating.toString() : "8031",
      profileLink: "https://codeforces.com/profile/senthamizhselvan.s",
      color: "#3B82F6",
      icon: "fas fa-chart-line"
    },
    {
      id: 4,
      platform: "SkillRack",
      username: "senthamizhselvan s",
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
      color: "#FF6B6B",
      icon: "fas fa-medal"
    }
  ];

  const totalSolvedCount = (leetcode ? leetcode.totalSolved : 800) + 400 + 500;

  const journeyStats = [
    {
      icon: "fas fa-code",
      number: `${totalSolvedCount}+`,
      label: "Total Number of Problems Solved",
      color: "#8B5FBF"
    },
    {
      icon: "fas fa-cog",
      number: "300+",
      label: "Active Number of Days (LeetCode)",
      color: "#4A90E2"
    },
    {
      icon: "fas fa-trophy",
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
          <i className={i <= rating ? "fas fa-star" : "far fa-star"}></i>
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
            <div key={profile.id} className="platform-card" style={{ '--platform-color': profile.color }}>
              <div className="platform-header">
                <div className="platform-logo-glow"></div>
                <div className="platform-logo">
                  <span className="platform-icon">
                    <i className={profile.icon}></i>
                  </span>
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
                      <span className="stat-value">
                        <i className="fas fa-medal" style={{ color: profile.color, marginRight: '5px' }}></i>
                        {profile.badges}
                      </span>
                    </div>
                  )}
                  {profile.dailyStreak && (
                    <div className="stat-item">
                      <span className="stat-label">Daily Streak</span>
                      <span className="stat-value">
                        <i className="fas fa-fire" style={{ color: '#FF4D4D', marginRight: '5px' }}></i>
                        {profile.dailyStreak}
                      </span>
                    </div>
                  )}
                  {profile.contestRank && (
                    <div className="stat-item">
                      <span className="stat-label">Best Contest Rank</span>
                      <span className="stat-value">
                        <i className="fas fa-trophy" style={{ color: '#FFD700', marginRight: '5px' }}></i>
                        {profile.contestRank}
                      </span>
                    </div>
                  )}
                  {profile.countryRank && (
                    <div className="stat-item">
                      <span className="stat-label">Country Rank</span>
                      <span className="stat-value">
                        <i className="fas fa-flag" style={{ color: profile.color, marginRight: '5px' }}></i>
                        #{profile.countryRank}
                      </span>
                    </div>
                  )}
                </div>

                <a
                  href={profile.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-profile-btn"
                >
                  View Profile <i className="fas fa-arrow-right" style={{ marginLeft: '5px' }}></i>
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
                  <i className={stat.icon}></i>
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
                  <div className="stat-icon"><i className="fas fa-chart-line"></i></div>
                  <div className="stat-info">
                    <div className="stat-number">60+</div>
                    <div className="stat-text">Contests Participated</div>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon"><i className="fas fa-hourglass-half"></i></div>
                  <div className="stat-info">
                    <div className="stat-number">800+</div>
                    <div className="stat-text">Hours of Practice</div>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon"><i className="fas fa-brain"></i></div>
                  <div className="stat-info">
                    <div className="stat-number">50+</div>
                    <div className="stat-text">Algorithm Patterns Mastered</div>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon"><i className="fas fa-bullseye"></i></div>
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