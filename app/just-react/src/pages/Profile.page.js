import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function ProfilePage() {
  const { authState } = useContext(AuthContext)
  console.log({ authState })
  return (
    <div>
      <h1>Hola: {authState.userInfo.email}</h1>
    </div>
  )
}

export default ProfilePage;
