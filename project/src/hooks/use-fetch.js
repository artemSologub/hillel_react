import { useState, useEffect, useCallback } from 'react';

const useFetch = (
  url,
  initialMethod = 'GET',
  initialBody = null,
  immediate = true
) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(
    async (method = initialMethod, body = initialBody) => {
      setIsLoading(true);
      try {
        const options = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        };

        if (body && method !== 'GET') {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [url, initialMethod, initialBody]
  );

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return { data, error, isLoading, fetchData };
};

export default useFetch;
