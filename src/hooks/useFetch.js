import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResource = () => {
      try {
        fetch(url)
          .then(res => res.json())
          .then(response => {
            setData(response);
            setLoading(false);
          })
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    fetchResource();
  }, [url])

  return { data, loading, error };
}
