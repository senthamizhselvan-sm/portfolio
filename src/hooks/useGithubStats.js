import { useState, useEffect } from 'react';

/**
 * Custom React hook to fetch GitHub profile statistics and repository lists.
 */
export const useGithubStats = (username = 'senthamizhselvan-sm') => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`)
        ]);

        if (!profileRes.ok) {
          throw new Error(`GitHub profile fetch failed: HTTP ${profileRes.status}`);
        }
        if (!reposRes.ok) {
          throw new Error(`GitHub repos fetch failed: HTTP ${reposRes.status}`);
        }

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        if (isMounted) {
          setStats({
            avatarUrl: profileData.avatar_url,
            followers: profileData.followers,
            following: profileData.following,
            publicRepos: profileData.public_repos,
            name: profileData.name || username,
            bio: profileData.bio || '',
            htmlUrl: profileData.html_url
          });
          setRepos(reposData);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGithubData();
    return () => {
      isMounted = false;
    };
  }, [username]);

  return { stats, repos, loading, error };
};
export default useGithubStats;
