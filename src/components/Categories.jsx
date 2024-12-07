import '../App.css';
import Button from '@mui/material/Button';

export default function Categories({handleClickCategorie}) {
    return(
        <Button variant="outlined" onClick={() => handleClickCategorie('sports')}>Sports</Button>
    )
}