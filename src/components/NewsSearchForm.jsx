// src/components/NewsSearchForm.jsx
import React from 'react';

function NewsSearchForm({ query, setQuery, category, setCategory, onSearch }) {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for news..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="politics">Politics</option>
      </select>
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default NewsSearchForm;
