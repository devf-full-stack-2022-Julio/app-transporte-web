import React from 'react';

function ProfilePage({ token }) {

  if (!token) {
    return (
      <h1>Ups, no encontramos lo que buscabas...</h1>
    )
  };

  return (
    <div>
      <h1>Mi pefil</h1>
    </div>
  )
}

export default ProfilePage;
