import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import styled from 'styled-components';

import api from '../services/api'

const Button = styled.button`
  background-color: ${({ active }) => active ? 'green' : 'red'};
`;

function LoginForm({ onLogin }) {
  const location = useLocation();
  const [email, setEmail] = useState(location?.state?.email || '')
  const [password, setPassword] = useState(location?.state?.password || '')
  const [error, setError] = useState(null)

  const [test, setTest] = useState(false)

  const navigate = useNavigate();

  function onEmailChangeHandler(e) {
    setEmail(e.target.value)
  }

  function onPasswordChangeHandler(e) {
    setPassword(e.target.value)
  }

  function onEnterHandler(key) {
    if (key.code === "Enter") {
      onLoginButtonClickHandler()
    }
  }

  async function onLoginButtonClickHandler() {
    if (!email) {
      setError('Ingresa tu email')
      return
    }
    if (!password) {
      setError('Ingresa tu password')
      return 
    } 

    let user = null;
    try {
      user = await api.users.login({ password, email })
    } catch(error) {
      if (error.message) {
        setError(error.message)
      } else {
        console.error(error)
        // mandamos a algún emisor de alertas
      }
    }
    onLogin(user.token)
    navigate('/pefil');
  }

  return (
    <form>
      <Button
        className="button-purple"
        type="button" 
        onClick={() => setTest(!test)} 
        active={test}
      >Presioname</Button>  

      <h2 className="error-message">Formulario de Inicio de Sesión</h2>
      <input 
        type="email" 
        placeholder="Ingresa tu email" 
        value={email} 
        onChange={onEmailChangeHandler}
        onKeyDown={onEnterHandler}
      />
      <input 
        type="password" 
        placeholder="Ingresa tu password" 
        value={password}
        onChange={onPasswordChangeHandler}
        onKeyDown={onEnterHandler}
      />
      <button type="button" onClick={onLoginButtonClickHandler}>Ingresar</button>
      <p className="error-message">{error}</p>
      {/* <button type="button" onClick={() => changeRoute('login')}>Registrate</button> */}
  </form>
  )
} 

export default LoginForm
