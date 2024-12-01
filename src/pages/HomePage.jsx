// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { fetchNews } from '../services/newsService';
import NewsSearchForm from '../components/NewsSearchForm';
import NewsArticleList from '../components/NewsArticleList';
import Loader from '../components/Loader';

function HomePage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const news = await fetchNews(query, category);
      setArticles(news);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <NewsSearchForm
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        onSearch={handleSearch}
      />
      {loading ? <Loader /> : <NewsArticleList articles={articles} />}
    </div>
  );
}

export default HomePage;
