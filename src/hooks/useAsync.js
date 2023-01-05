import { useEffect, useState } from "react";

export function useAsync(callback, deps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setData(null);
    setLoading(true);
    try {
      const result = await callback();
      setData(result.data);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);
  return [{ loading, error, data }, fetchData];
}
