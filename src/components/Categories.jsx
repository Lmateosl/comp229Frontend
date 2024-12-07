import '../App.css';
import Button from '@mui/material/Button';

export default function Categories({handleClickCategorie}) {
    return(
        <Button variant="outlined" onClick={() => handleClickCategorie('world')}>World</Button>
        <Button variant="outlined" onClick={() => handleClickCategorie('sports')}>Sports</Button>
        <Button variant="outlined" onClick={() => handleClickCategorie('business')}>Business</Button>
        <Button variant="outlined" onClick={() => handleClickCategorie('technology')}>Technology</Button>
        <Button variant="outlined" onClick={() => handleClickCategorie('entertainment')}>Entertainment</Button>
        <Button variant="outlined" onClick={() => handleClickCategorie('travel')}>Travel</Button>
        <Button variant="outlined" onClick={() => handleClickCategorie('politics')}>Politics</Button>
        <Button variant="outlined" onClick={() => handleClickCategorie('weather')}>Weather</Button>
        <Button variant="outlined" onClick={() => handleClickCategorie('science')}>Science</Button>
 </div>
    );
}
