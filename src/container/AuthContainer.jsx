import { useEffect } from 'react';
import '../App.css';

export default function AuthContainer ({auth}) {
    useEffect(() => {
        auth({email: 'test+7@test.com', password: '12345678'}, true);
    })
    return <h2>Auth Container works</h2>
}