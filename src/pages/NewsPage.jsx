import React from 'react';
import { useParams } from 'react-router-dom';

function NewsPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>News Article {id}</h1>
      {/* Fetch and display individual news article by its ID */}
    </div>
  );
}

export default NewsPage;
