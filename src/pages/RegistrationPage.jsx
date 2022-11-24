import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContextProvider';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useAuth();

  return (
    <>
      <h2>Register User</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={() => register(username, password)}>Register</button>
    </>
  )
}

export default RegistrationPage