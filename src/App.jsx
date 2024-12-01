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
    <> 
      News app
    </>
  )
}

export default App
