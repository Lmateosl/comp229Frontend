import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import CardNews from './Card';
import { useEffect } from 'react';

export default function Favorites ({getFav, favorites}) {
    useEffect(() => {
        getFav();
        console.log(favorites)
    }, []);

    return (
        <Box sx={{ flexGrow: 1, overflowY: 'auto', height: '95%' }}>
            <Grid container spacing={2}>
                {favorites.filter(item => item.title !== "[Removed]").map((article, i) =>(
                    <Grid size={{ xs: 12, md: 4 }}>
                        <CardNews article={article} id={i} isNotFavorite={false}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}