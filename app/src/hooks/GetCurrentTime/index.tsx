import { useEffect, useRef, useState } from 'react';

interface TimeApiResponse {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

export const useGetCurrentTime = (options?: { refreshIntervalMs?: number }) => {
  // Default: sync with API once, keep local updates every minute
  const { refreshIntervalMs = 60_000 } = options || {};

  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Keeps the delta between device time and API time so we don't hit the API every tick
  const abortControllerRef = useRef<AbortController | null>(null);
  // Monotonic tracking: serverTimeAtSync + (performance.now() - perfNowAtSync)
  const serverTimeAtSyncRef = useRef<number>(Date.now());
  const perfNowAtSyncRef = useRef<number>(
    typeof global.performance !== 'undefined' && typeof global.performance.now === 'function'
      ? global.performance.now()
      : Date.now()
  );

  const fetchCurrentTime = async () => {
    try {
      setError(null);

      // Cancel previous request if still running
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      const response = await fetch(
        'https://timeapi.io/api/time/current/zone?timeZone=Europe%2FIstanbul',
        { signal: abortControllerRef.current.signal }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch time from API');
      }

      const data: TimeApiResponse = await response.json();
      const apiTime = new Date(data.dateTime);

      // Save reference points for monotonic calculation
      serverTimeAtSyncRef.current = apiTime.getTime();
      perfNowAtSyncRef.current = typeof global.performance !== 'undefined' && typeof global.performance.now === 'function'
        ? global.performance.now()
        : Date.now();

      setCurrentTime(apiTime);
      setLoading(false);
    } catch (err) {
      if ((err as any)?.name === 'AbortError') return; // request was cancelled

      console.error('Error fetching current time:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');

      // Fallback: keep progressing using last known sync values
      const nowPerf = typeof global.performance !== 'undefined' && typeof global.performance.now === 'function'
        ? global.performance.now()
        : Date.now();
      setCurrentTime(new Date(serverTimeAtSyncRef.current + (nowPerf - perfNowAtSyncRef.current)));
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial sync
    fetchCurrentTime();

    // Local timer to keep time moving without network requests
    const localInterval = setInterval(() => {
      const nowPerf = typeof global.performance !== 'undefined' && typeof global.performance.now === 'function'
        ? global.performance.now()
        : Date.now();
      setCurrentTime(new Date(serverTimeAtSyncRef.current + (nowPerf - perfNowAtSyncRef.current)));
    }, refreshIntervalMs);

    return () => {
      clearInterval(localInterval);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [refreshIntervalMs]);

  const refreshTime = () => {
    fetchCurrentTime();
  };

  return {
    currentTime,
    loading,
    error,
    refreshTime,
  };
};

export default useGetCurrentTime; 