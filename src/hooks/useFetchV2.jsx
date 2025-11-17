import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    let ignore = false; // to prevent stale updates if the URL changes fast

    const fetchData = async () => {
      setLoading(true);

      // ✅ Reset old data and errors every time we fetch
      setError(null);
      setData(null);

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const result = await res.json();
        if (result.error) throw new Error(result.error.message);

        if (!ignore) setData(result);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchData();

    // cleanup to avoid setting state after unmount
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}
