import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardNews({ article, add, id, isNotFavorite=true }) {
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '450px'}}> 
      <CardMedia
        sx={{ height: 150, width: '100%', objectFit: 'cover'}}
        image={article.urlToImage}
        title={article.title}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', 
      }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ height: '60px', overflow: 'hidden' }}>
          {article.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1, overflow: 'hidden' }}>
          {article.content ? article.content : article.description}
        </Typography>
      </CardContent>
      {isNotFavorite &&
      <CardActions sx={{ paddingBottom: 1 }}>
         <Button size="small" onClick={() => add(id)} rel="noopener noreferrer">Add</Button>
        <Button size="small" component="a" href={article.url} target="_blank" rel="noopener noreferrer">Learn More</Button>
      </CardActions>
      }
    </Card>
  );
}
