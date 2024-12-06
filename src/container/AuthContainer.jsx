import { useEffect, useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AuthContainer ({auth}) {
    useEffect(() => {
        //auth({email: 'test+7@test.com', password: '12345678'}, true);
    })
    const [isLogin, setIsLoging] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
        <h2 style={{textAlign: 'center'}}>{isLogin ? 'Login' : 'Create Account'}</h2>
        <form className='formAuth'>
        <TextField
                id="filled-password-input"
                label="Email"
                type="email"
                autoComplete="current-password"
                required
                variant="standard"
                onChange={({target}) => setEmail(target.value)}
                sx={{marginBottom: '20px', width: '70%'}}
            />
            <TextField
                id="filled-password-input"
                required
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                onChange={({target}) => setPassword(target.value)}
                sx={{marginBottom: '20px', width: '70%'}}
            />
            {
                isLogin ? 
                <div className='footerButtons'>
                    <Button variant="outlined" onClick={() => auth({email, password}, true)} sx={{marginBottom: '20px', width: '70%'}}>Login</Button>
                    <Button variant="text" onClick={() => setIsLoging(false)}>Change to create account</Button>
                </div>
                :
                <div className='footerButtons'>
                    <Button variant="outlined" onClick={() => auth({email, password}, false)} sx={{marginBottom: '20px', width: '70%'}}>Create Account</Button>
                    <Button variant="text" onClick={() => setIsLoging(true)}>Change to login</Button>
                </div>
            }
        </form>
        </>
    )
}