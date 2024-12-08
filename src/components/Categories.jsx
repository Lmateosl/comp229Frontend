import '../App.css';
import Button from '@mui/material/Button';

export default function Categories({ handleClickCategorie }) {
    return (
        <div
            style={{
                display: 'flex', gap: '10px', justifyContent: 'flex-start', marginTop: '20px', overflowX: 'auto', padding: '10px'
            }}
        >
            <Button variant="outlined" onClick={() => handleClickCategorie('World')}>World</Button>
            <Button variant="outlined" onClick={() => handleClickCategorie('Sports')}>Sports</Button>
            <Button variant="outlined" onClick={() => handleClickCategorie('Business')}>Business</Button>
            <Button variant="outlined" onClick={() => handleClickCategorie('Technology')}>Technology</Button>
            <Button variant="outlined" onClick={() => handleClickCategorie('Entertainment')}>Entertainment</Button>
            <Button variant="outlined" onClick={() => handleClickCategorie('Politics')}>Politics</Button>
            <Button variant="outlined" onClick={() => handleClickCategorie('Science')}>Science</Button>
        </div>
    );
}
