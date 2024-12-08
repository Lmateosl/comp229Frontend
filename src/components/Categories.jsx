import React, { useState, useEffect } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [newsContent, setNewsContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = '41a8c19ca98942c0bee6d12adc93abab'; 

    const handleClickCategorie = (category) => {
        setSelectedCategory(category);
        fetchNews(category);
    };

    const fetchNews = async (category) => {
        setLoading(true);
        setError(null); 
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
                params: {
                    category: category,
                    country: 'us', 
                    apiKey: API_KEY,
                },
            });

            setNewsContent(response.data.articles);
        } catch (err) {
            setError('Failed to fetch news. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Category Buttons */}
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'flex-start',
                    marginTop: '20px',
                    overflowX: 'auto',
                    padding: '10px',
                }}
            >
                <Button variant="outlined" onClick={() => handleClickCategorie('general')}>World</Button>
                <Button variant="outlined" onClick={() => handleClickCategorie('sports')}>Sports</Button>
                <Button variant="outlined" onClick={() => handleClickCategorie('business')}>Business</Button>
                <Button variant="outlined" onClick={() => handleClickCategorie('technology')}>Technology</Button>
                <Button variant="outlined" onClick={() => handleClickCategorie('entertainment')}>Entertainment</Button>
                <Button variant="outlined" onClick={() => handleClickCategorie('politics')}>Politics</Button>
                <Button variant="outlined" onClick={() => handleClickCategorie('science')}>Science</Button>
            </div>

            {/* News Content */}
            <div style={{ marginTop: '20px', padding: '10px' }}>
                <h3>{selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} News` : 'Select a category'}</h3>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <ul>
                        {newsContent.map((news, index) => (
                            <li key={index}>
                                <a href={news.url} target="_blank" rel="noopener noreferrer">
                                    <strong>{news.title}</strong>
                                </a>
                                <p>{news.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

