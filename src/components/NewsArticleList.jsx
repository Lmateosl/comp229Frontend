// src/components/NewsArticleList.jsx
import React from 'react';
import NewsArticle from './NewsArticle';

function NewsArticleList({ articles }) {
  return (
    <div>
      {articles.map((article, index) => (
        <NewsArticle key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsArticleList;
