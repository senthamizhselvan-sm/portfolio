import { useState, useEffect } from 'react';
import { fetchLeetcodeStats } from '../services/leetcodeService';

/**
 * Custom React hook to retrieve LeetCode user profile activity and metrics.
 */
export const useLeetcodeStats = (username = 'senthamizhselvan-sm_cse-N') => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchLCData = async () => {
      try {
        setLoading(true);
        const data = await fetchLeetcodeStats(username);
        if (isMounted) {
          setStats(data);
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

    fetchLCData();
    return () => {
      isMounted = false;
    };
  }, [username]);

  return { stats, loading, error };
};
export default useLeetcodeStats;
