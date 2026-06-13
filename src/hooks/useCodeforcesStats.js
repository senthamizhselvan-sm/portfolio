import { useState, useEffect } from 'react';

/**
 * Custom React hook to fetch statistics from Codeforces user info API.
 */
export const useCodeforcesStats = (handle = 'senthamizhselvan.s') => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchCFData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
        if (!response.ok) {
          throw new Error(`Codeforces API returned HTTP ${response.status}`);
        }
        const data = await response.json();

        if (data.status !== 'OK') {
          throw new Error(data.comment || 'Failed to retrieve user data from Codeforces');
        }

        const userInfo = data.result[0];

        if (isMounted) {
          setStats({
            rating: userInfo.rating || 0,
            maxRating: userInfo.maxRating || 0,
            rank: userInfo.rank || 'Unrated',
            maxRank: userInfo.maxRank || 'Unrated',
            handle: userInfo.handle
          });
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

    fetchCFData();
    return () => {
      isMounted = false;
    };
  }, [handle]);

  return { stats, loading, error };
};
export default useCodeforcesStats;
