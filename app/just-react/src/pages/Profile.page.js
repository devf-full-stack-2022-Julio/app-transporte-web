import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

function ProfilePage({ token, onClose }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate('/inicio')
    } 
  }, [token])

  return (
    <div>
      <Navbar userName={token} onClose={onClose} />
    </div>
  )
}

export default ProfilePage;
