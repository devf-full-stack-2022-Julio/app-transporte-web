import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfilePage({ token }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/inicio')
    } 
  }, [token])

  if (!token) return null;

  return (
    <div>
      <h1>Hola: {token}</h1>
    </div>
  )
}

export default ProfilePage;
