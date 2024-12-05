import '../App.css';
import Grid from '@mui/material/Grid2';
import CardNews from '../components/Card';

export default function CardsContainer ({articles}) {
    return(
        <div className='articles_container'>
                {articles.map((article, i) => (
                        <CardNews key={i} article={article}/>
                ))}
        </div>
    )
} 