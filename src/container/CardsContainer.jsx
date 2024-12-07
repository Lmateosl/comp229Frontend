import '../App.css';
import Grid from '@mui/material/Grid2';
import CardNews from '../components/Card';

export default function CardsContainer({ articles }) {
    return (
        <div className='articles_container'>
            <Grid container spacing={2}> {}
                {articles.map((article, i) => (
                    <Grid item xs={6} sm={6} md={4} lg={5} key={i}> {}
                        <CardNews article={article} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}