import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
      setLoading(true)
      fetch(url).then(async (res) => {
        if(!res.ok) throw new Error('Error in fetch');
        const data = await res.json();
        setData(data);
        setLoading(false);
      }).catch((err) => {
          setError(true);
          setLoading(false);
      }).finally(() => {
          setLoading(false);
      })
  }, [url]);
  return { data, loading, error }
}