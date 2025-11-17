import React from "react";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData(url) {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData(url);
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
