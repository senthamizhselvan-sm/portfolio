import React, { useState, useEffect } from 'react';
import useGithubStats from '../hooks/useGithubStats';
import useCodeforcesStats from '../hooks/useCodeforcesStats';
import useLeetcodeStats from '../hooks/useLeetcodeStats';
import './DeveloperDashboard.css';

// Animated Count-Up component for premium stats count
const AnimatedCounter = ({ value, duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = parseInt(value, 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{typeof count === 'number' ? count.toLocaleString() : count}</span>;
};

// Shimmer loading skeleton component
const StatSkeleton = ({ platformName }) => (
  <div className="analytics-card skeleton">
    <div className="card-header-skeleton">
      <div className="avatar-skeleton shimmer"></div>
      <div className="header-text-skeleton">
        <div className="line-short shimmer"></div>
        <div className="line-long shimmer"></div>
      </div>
    </div>
    <div className="card-stats-skeleton">
      <div className="stat-row-skeleton shimmer"></div>
      <div className="stat-row-skeleton shimmer"></div>
      <div className="stat-row-skeleton shimmer"></div>
      <div className="stat-row-skeleton shimmer"></div>
    </div>
  </div>
);

const DeveloperDashboard = () => {
  // Live stats from hooks
  const { stats: github, repos: githubRepos, loading: githubLoading, error: githubError } = useGithubStats();
  const { stats: codeforces, loading: codeforcesLoading, error: codeforcesError } = useCodeforcesStats();
  const { stats: leetcode, loading: leetcodeLoading, error: leetcodeError } = useLeetcodeStats();

  // CodeChef data from verified profile screenshot
  const codechef = {
    username: 'selva_cr_007',
    rating: 1419,
    highestRating: 1422,
    stars: '2 Star (Div 3)',
    globalRank: 40298,
    countryRank: 37708,
    link: 'https://codechef.com/users/selva_cr_007'
  };

  const timelineEvents = [
    {
      year: '2026',
      title: 'Built Silent SOS security app',
      desc: 'Top national hackathon project featuring background SOS alerts disguised as news.'
    },
    {
      year: '2025',
      title: 'Full Stack Developer Intern @ BETSHOOW',
      desc: 'Engineered interfaces using Django, Bootstrap, and worked with SQL databases.'
    },
    {
      year: '2025',
      title: 'Earned AWS Cloud Practitioner Certification',
      desc: 'Validated cloud skills covering architecture, services, security, and pricing models.'
    },
    {
      year: '2024',
      title: 'Google Developer Groups Finalist',
      desc: 'Recognized in Campus Solution Challenge for pricing violation check software.'
    }
  ];

  return (
    <div className="developer-dashboard fade-in" id="dashboard">
      <div className="dashboard-container">
        
        {/* Top Section */}
        <div className="dashboard-header-section">
          <h1 className="dashboard-title">
            <span className="gradient-text">Developer Analytics Dashboard</span>
          </h1>
          <p className="dashboard-subtitle">
            Real-time coding activity and engineering performance metrics
          </p>
        </div>

        {/* Middle Section: Responsive 4-card analytics grid */}
        <div className="analytics-grid">
          
          {/* GitHub Card */}
          {githubLoading ? (
            <StatSkeleton platformName="GitHub" />
          ) : githubError ? (
            <div className="analytics-card error">
              <div className="error-wrap">
                <i className="fab fa-github error-icon"></i>
                <h3>GitHub Connection Error</h3>
                <p>{githubError}</p>
              </div>
            </div>
          ) : (
            <div className="analytics-card github-card">
              <div className="card-header">
                <img src={github?.avatarUrl} alt="GitHub Avatar" className="platform-avatar" />
                <div className="platform-title">
                  <h3>GitHub</h3>
                  <p className="platform-username">@{github?.name}</p>
                </div>
                <i className="fab fa-github platform-brand"></i>
              </div>
              <div className="card-content">
                <div className="metric-row">
                  <span className="metric-label">Followers</span>
                  <span className="metric-value"><AnimatedCounter value={github?.followers} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Following</span>
                  <span className="metric-value"><AnimatedCounter value={github?.following} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Public Repositories</span>
                  <span className="metric-value"><AnimatedCounter value={github?.publicRepos} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Profile Status</span>
                  <span className="metric-value status-badge">Active</span>
                </div>
              </div>
              <a href={github?.htmlUrl} target="_blank" rel="noopener noreferrer" className="card-link-footer">
                View GitHub <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          )}

          {/* LeetCode Card */}
          {leetcodeLoading ? (
            <StatSkeleton platformName="LeetCode" />
          ) : leetcodeError ? (
            <div className="analytics-card error">
              <div className="error-wrap">
                <i className="fas fa-code error-icon"></i>
                <h3>LeetCode Connection Error</h3>
                <p>{leetcodeError}</p>
              </div>
            </div>
          ) : (
            <div className="analytics-card leetcode-card">
              <div className="card-header">
                <div className="platform-avatar leetcode-logo-wrapper">
                  <i className="fas fa-code"></i>
                </div>
                <div className="platform-title">
                  <h3>LeetCode</h3>
                  <p className="platform-username">@senthamizhselvan-sm_cse-N</p>
                </div>
                <i className="fas fa-terminal platform-brand"></i>
              </div>
              <div className="card-content">
                <div className="metric-row">
                  <span className="metric-label">Total Solved</span>
                  <span className="metric-value"><AnimatedCounter value={leetcode?.totalSolved} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Easy Solved</span>
                  <span className="metric-value easy-text"><AnimatedCounter value={leetcode?.easySolved} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Medium Solved</span>
                  <span className="metric-value medium-text"><AnimatedCounter value={leetcode?.mediumSolved} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Hard Solved</span>
                  <span className="metric-value hard-text"><AnimatedCounter value={leetcode?.hardSolved} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Global Rank</span>
                  <span className="metric-value rank-text">#<AnimatedCounter value={leetcode?.ranking} /></span>
                </div>
              </div>
              <a href="https://leetcode.com/senthamizhselvan-sm_cse-N" target="_blank" rel="noopener noreferrer" className="card-link-footer">
                View LeetCode <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          )}

          {/* Codeforces Card */}
          {codeforcesLoading ? (
            <StatSkeleton platformName="Codeforces" />
          ) : codeforcesError ? (
            <div className="analytics-card error">
              <div className="error-wrap">
                <i className="fas fa-trophy error-icon"></i>
                <h3>Codeforces Connection Error</h3>
                <p>{codeforcesError}</p>
              </div>
            </div>
          ) : (
            <div className="analytics-card codeforces-card">
              <div className="card-header">
                <div className="platform-avatar codeforces-logo-wrapper">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="platform-title">
                  <h3>Codeforces</h3>
                  <p className="platform-username">@{codeforces?.handle}</p>
                </div>
                <i className="fas fa-trophy platform-brand"></i>
              </div>
              <div className="card-content">
                <div className="metric-row">
                  <span className="metric-label">Rating</span>
                  <span className="metric-value"><AnimatedCounter value={codeforces?.rating} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Max Rating</span>
                  <span className="metric-value"><AnimatedCounter value={codeforces?.maxRating} /></span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Rank</span>
                  <span className="metric-value rank-badge">{codeforces?.rank}</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Max Rank</span>
                  <span className="metric-value rank-badge max">{codeforces?.maxRank}</span>
                </div>
              </div>
              <a href={`https://codeforces.com/profile/senthamizhselvan.s`} target="_blank" rel="noopener noreferrer" className="card-link-footer">
                View Codeforces <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          )}

          {/* CodeChef Card */}
          <div className="analytics-card codechef-card">
            <div className="card-header">
              <div className="platform-avatar codechef-logo-wrapper">
                <i className="fas fa-utensils"></i>
              </div>
              <div className="platform-title">
                <h3>CodeChef</h3>
                <p className="platform-username">@{codechef.username}</p>
              </div>
              <i className="fas fa-star platform-brand"></i>
            </div>
            <div className="card-content">
              <div className="metric-row">
                <span className="metric-label">Rating</span>
                <span className="metric-value"><AnimatedCounter value={codechef.rating} /></span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Highest Rating</span>
                <span className="metric-value"><AnimatedCounter value={codechef.highestRating} /></span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Stars</span>
                <span className="metric-value star-badge">
                  <i className="fas fa-star filled"></i> {codechef.stars}
                </span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Global Rank</span>
                <span className="metric-value rank-text">#<AnimatedCounter value={codechef.globalRank} /></span>
              </div>
              <div className="metric-row">
                <span className="metric-label">Country Rank</span>
                <span className="metric-value rank-text">#<AnimatedCounter value={codechef.countryRank} /></span>
              </div>
            </div>
            <a href={codechef.link} target="_blank" rel="noopener noreferrer" className="card-link-footer">
              View CodeChef <i className="fas fa-arrow-right"></i>
            </a>
          </div>

        </div>

        {/* Bottom Section: Timeline & Repos */}
        <div className="dashboard-bottom-section">
          
          {/* GitHub Live Repositories */}
          <div className="repos-container">
            <h2 className="section-heading">
              <i className="fab fa-github"></i> Featured Repositories
            </h2>
            {githubLoading ? (
              <div className="repos-loading">
                <div className="repo-card skeleton shimmer"></div>
                <div className="repo-card skeleton shimmer"></div>
                <div className="repo-card skeleton shimmer"></div>
              </div>
            ) : (
              <div className="repos-list-grid">
                {githubRepos.slice(0, 6).map((repo) => (
                  <div key={repo.id} className="repo-card-modern">
                    <div className="repo-card-header">
                      <h4 className="repo-name">{repo.name}</h4>
                      <span className="repo-lang-badge">{repo.language || 'HTML'}</span>
                    </div>
                    <p className="repo-desc">
                      {repo.description || 'No description provided. Click below to inspect code in GitHub.'}
                    </p>
                    <div className="repo-stats-footer">
                      <div className="repo-stats-left">
                        <span><i className="fas fa-star text-gold"></i> {repo.stargazers_count}</span>
                        <span><i className="fas fa-code-branch text-blue"></i> {repo.forks_count}</span>
                      </div>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-visit-btn">
                        Code <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Timeline & Quick Links */}
          <div className="timeline-container">
            <h2 className="section-heading">
              <i className="fas fa-history"></i> Recent Activity Timeline
            </h2>
            <div className="activity-timeline">
              {timelineEvents.map((evt, idx) => (
                <div key={idx} className="timeline-card-item">
                  <div className="timeline-node-accent"></div>
                  <div className="timeline-card-content">
                    <span className="timeline-year-text">{evt.year}</span>
                    <h4 className="timeline-title-text">{evt.title}</h4>
                    <p className="timeline-desc-text">{evt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="quick-links-section">
              <h3 className="section-heading-small">Coding Profile Hub</h3>
              <div className="dashboard-profile-links">
                <a href="https://leetcode.com/senthamizhselvan-sm_cse-N" target="_blank" rel="noopener noreferrer" className="profile-hub-link leetcode">
                  <i className="fas fa-code"></i> LeetCode
                </a>
                <a href="https://codeforces.com/profile/senthamizhselvan.s" target="_blank" rel="noopener noreferrer" className="profile-hub-link codeforces">
                  <i className="fas fa-chart-line"></i> Codeforces
                </a>
                <a href="https://codechef.com/users/selva_cr_007" target="_blank" rel="noopener noreferrer" className="profile-hub-link codechef">
                  <i className="fas fa-utensils"></i> CodeChef
                </a>
                <a href="https://github.com/senthamizhselvan-sm" target="_blank" rel="noopener noreferrer" className="profile-hub-link github">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DeveloperDashboard;
