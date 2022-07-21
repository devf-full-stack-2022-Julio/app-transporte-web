import { useState, useEffect } from 'react';

function useAuthenticate() {
  const [token, setTokenState] = useState(localStorage.getItem('api-token'))

  const setToken = (_token) => {
    localStorage.setItem('api-token', _token);
    setTokenState(_token)
  }

  return [token, setToken];
}

export default useAuthenticate;
