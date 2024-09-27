import { useState, useEffect} from 'react';

type UseFetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  headers?: Headers,
  body?: BodyInit,
}

const useFetch = (url: string, options?: UseFetchOptions) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(data === null) {
      fetchData();
    }
  }, [url, options]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading };
};

export default useFetch;
