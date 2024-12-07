import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardNews({article}) {
  return (
    <Card sx={{ maxWidth: 345 }}> 
      <CardMedia
        sx={{ height: 140 }}
        image={article.urlToImage}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {article.content}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" component="a" href={article.url} target="_blank" rel="noopener noreferrer">Learn More</Button>
      </CardActions>
    </Card>
  );
}