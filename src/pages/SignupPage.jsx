// src/pages/SignupPage.jsx
import React, { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Simulate signup process
    console.log('Signing up with', email, password);
  };

  return (
    <div>
      <h2>Signup</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default SignupPage;
