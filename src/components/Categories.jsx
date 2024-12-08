import '../App.css';
import Button from '@mui/material/Button';

export default function Categories({ handleClickCategorie }) {
    return (
        <div
            style={{
                display: 'flex', 
                gap: '10px', 
                justifyContent: 'center',
                overflowX: 'auto', 
                padding: '10px',
                backgroundColor: '#f0f0f0',
                width: '90%',
                margin: '20px auto'
            }}
        >
            <Button className="buttonCat" variant="outlined" onClick={() => handleClickCategorie('General')}>General</Button>
            <Button className="buttonCat" variant="outlined" onClick={() => handleClickCategorie('Health')}>Health</Button>
            <Button className="buttonCat" variant="outlined" onClick={() => handleClickCategorie('Sports')}>Sports</Button>
            <Button className="buttonCat" variant="outlined" onClick={() => handleClickCategorie('Business')}>Business</Button>
            <Button className="buttonCat" variant="outlined" onClick={() => handleClickCategorie('Technology')}>Technology</Button>
            <Button className="buttonCat" variant="outlined" onClick={() => handleClickCategorie('Entertainment')}>Entertainment</Button>
            <Button className="buttonCat" variant="outlined" onClick={() => handleClickCategorie('Science')}>Science</Button>
        </div>
    );
}
