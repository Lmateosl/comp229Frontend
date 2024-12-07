import React, { useState } from 'react';
import '../App.css';
import CardNews from '../components/Card';

export default function CardsContainer({ articles }) {
    const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);

    const handleSelectArticle = (index) => {
        // Toggle selection (deselect if clicked again)
        setSelectedArticleIndex(index === selectedArticleIndex ? null : index);
    };

    return (
        <div className="articles_container">
            <button
                className="arrow left"
                onClick={() => setSelectedArticleIndex((prev) => Math.max(0, prev - 1))}
            >
                ←
            </button>

            <div className="articles_wrapper">
                {articles.map((article, i) => (
                    <div
                        key={i}
                        className={`article ${i === selectedArticleIndex ? 'focused' : i !== selectedArticleIndex && selectedArticleIndex !== null ? 'blurred' : ''}`}
                        onClick={() => handleSelectArticle(i)}
                    >
                        <CardNews article={article} />
                    </div>
                ))}
            </div>

            <button
                className="arrow right"
                onClick={() => setSelectedArticleIndex((prev) => Math.min(articles.length - 1, prev + 1))}
            >
                →
            </button>
        </div>
    );
}
