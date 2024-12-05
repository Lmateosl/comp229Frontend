import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../App.css'

export default function Navbar ({isLoged, handleOpen, email, logout}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };
      
    return (
        <div className='navbar_container'>
            <h1 className='title'>NEWSApp</h1>
            {
                !isLoged ? 
                    <Button variant="text" onClick={handleOpen} sx={{color: 'white'}}>Login</Button>
                :
                <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  variant="outlined"
                  sx={{backgroundColor: 'white'}}
                  onClick={handleClick}
                >
                  {email}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={() => {handleClose(); logout()}}>Logout</MenuItem>
                </Menu>
              </div>
            }
        </div>
    )
}