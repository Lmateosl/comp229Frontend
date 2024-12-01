import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [news, setNews] = useState([]);
  const [quesry, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const[loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/news', {
        params: { query, category }, 
      });
      setNews(response.data);
    } catch (error) {
      console.error ('Error fetching news:', error);
      alert('Unable to fetch news. Please Try Again.');
    } finally {
      setLoading(false);
    }
  };

 return (
    <div className="App">
      <h1>News</h1>
      <div>
        <input
          type="text"
          placeholder="Search Query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={fetchNews} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch News'}
        </button>
      </div>

      <div>
        <h2>News Articles</h2>
        {news.length > 0 ? (
          <ul>
            {news.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No articles found</p>
        )}
      </div>
    </div>
  );
};
export default App
