'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  // State for API response, error, and loading status
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch message from API endpoint
    const fetchMessage = async () => {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>API Response</h1>
      <p>{message}</p>
    </div>
  );
}