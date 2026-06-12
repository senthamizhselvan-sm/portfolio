/**
 * Service to fetch statistics for a LeetCode user profile.
 * Integrates primary and backup proxies to guarantee high uptime.
 */
export const fetchLeetcodeStats = async (username = 'senthamizhselvan-sm_cse-N') => {
  try {
    // Primary API: leetcode-stats-api
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (!response.ok) {
      throw new Error(`Primary LeetCode proxy returned HTTP ${response.status}`);
    }
    const data = await response.json();
    if (data.status === 'error' || data.status === 'failed') {
      throw new Error(data.message || 'API returned failure status');
    }
    return {
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
      ranking: data.ranking || 0
    };
  } catch (firstError) {
    console.warn('Primary LeetCode proxy failed, attempting backup...', firstError);
    try {
      // Backup API: alfa-leetcode-api (requires fetching both profile info and solved counts)
      const [profileRes, solvedRes] = await Promise.all([
        fetch(`https://alfa-leetcode-api.onrender.com/${username}`),
        fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`)
      ]);

      if (!profileRes.ok || !solvedRes.ok) {
        throw new Error(`Backup LeetCode proxy returned HTTP profile:${profileRes.status} solved:${solvedRes.status}`);
      }

      const profileData = await profileRes.json();
      const solvedData = await solvedRes.json();

      return {
        totalSolved: solvedData.solvedProblem || 0,
        easySolved: solvedData.easySolved || 0,
        mediumSolved: solvedData.mediumSolved || 0,
        hardSolved: solvedData.hardSolved || 0,
        ranking: profileData.ranking || 0
      };
    } catch (backupError) {
      console.error('All LeetCode API fetches failed.', backupError);
      throw new Error(`Failed to load LeetCode statistics: ${backupError.message}`);
    }
  }
};
