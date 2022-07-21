import { useState, useEffect } from 'react';

function useAuthenticate() {
  const [token, setTokenState] = useState(null)
  
  useEffect(() => {
    console.count('Esto solo se ejecuta una vez')
    const localToken = localStorage.getItem('api-token')
    if (localToken) {
      setTokenState(localToken)
    }
  }, [])

  const setToken = (_token) => {
    localStorage.setItem('api-token', _token);
    setTokenState(_token)
  }

  return [token, setToken];
}

export default useAuthenticate;
