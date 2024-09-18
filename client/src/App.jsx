import React, { useState, useEffect } from 'react';

function App() {
  // State to store API data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API using useEffect
  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Check if the response is OK (status 200-299)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the JSON response
        const result = await response.json();
        
        // Set the data to state
        setData(result);
        console.log(result)
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this will only run once when the component mounts.

  // JSX to display the data
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.slice(0, 10).map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
