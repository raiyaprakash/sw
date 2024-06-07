import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [token, setToken] = useState('');
  const [jsSnippet, setJsSnippet] = useState('');

  const fetchSnippet = async () => {
    try {
      const response = await axios.get(`/api/token?token=${token}`);
      setJsSnippet(response.data.snippet);
    } catch (error) {
      console.error('Error fetching the JavaScript snippet:', error);
      setJsSnippet('Error fetching the JavaScript snippet.');
    }
  };

  return (
    <div>
      <h1>Generate JavaScript Snippet</h1>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter token"
      />
      <button onClick={fetchSnippet}>Generate Snippet</button>
      <pre>{jsSnippet}</pre>
    </div>
  );
}
