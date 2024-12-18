import React, { useRef, useState } from 'react';
import { addFovite } from '../features/httpRequest';
import '../App.css';
import CardNews from '../components/Card';

export default function CardsContainer({ articles }) {
    const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);
    const scrollContainerRef = useRef(null);

    const handleSelectArticle = (index) => {
        setSelectedArticleIndex(index === selectedArticleIndex ? null : index);
    };

    const scroll = (direction) => {
        const scrollContainer = scrollContainerRef.current;
        if (!scrollContainer) return;

        // Scroll left or right 
        const scrollAmount = direction === 'left' ? -200 : 200;
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const add = async(i) => {
        const favorite = articles[i];
        console.log(favorite);
        try {
            const data = await addFovite(favorite);
            alert('Article added');
          } catch (err) {
            console.log(err);
            const errorMsg = 'Error adding the article';
            alert(errorMsg);
          }
    } 

    return (
        <div className="articles_container">
            {/* Left arrow for scrolling */}
            <button className="scroll-arrow left" onClick={() => scroll('left')}>
                &lt;
            </button>

            <div className="articles_wrapper" ref={scrollContainerRef}>
                {articles.filter(item => item.title !== "[Removed]").map((article, i) => (
                    <div
                        key={i}
                        className={`article ${i === selectedArticleIndex ? 'focused' : i !== selectedArticleIndex && selectedArticleIndex !== null ? 'blurred' : ''}`}
                        onClick={() => handleSelectArticle(i)}
                    >
                        <CardNews article={article} add={add} id={i}/>
                    </div>
                ))}
            </div>

            {/* Right arrow for scrolling */}
            <button className="scroll-arrow right" onClick={() => scroll('right')}>
                &gt;
            </button>
        </div>
    );
}
