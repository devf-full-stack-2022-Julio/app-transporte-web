import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; 
import styled from 'styled-components';

import Input from './atoms/Input';
import Button from './atoms/Button';
import Alert from './atoms/Alert'
import api from '../services/api';

const LoginFormStyled = styled.div`
  &.login-form { 
    max-width: 300px;
    background-color: white;
    transform: translateY(calc(50vh - 50%));
  }
`

function LoginForm({ className, onLogin }) {
  const location = useLocation();
  const [email, setEmail] = useState(location?.state?.email || '')
  const [password, setPassword] = useState(location?.state?.password || '')
  const [error, setError] = useState(null)

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
    navigate('/perfil');
  }

  return (
    <LoginFormStyled 
      className={`${className} container-fluid shadow rounded py-4 px-3 login-form`}
    >
      <form className="d-grid gap-2">
        <h2 className="fw-bold fs-2 text-center">Inicia Sesión</h2>
        <Input
          className="mb-1"
          type="email" 
          placeholder="Ingresa tu email" 
          value={email} 
          onChange={onEmailChangeHandler}
          onKeyDown={onEnterHandler}
        />
        <Input
          className="mb-1"
          type="password" 
          placeholder="Ingresa tu password" 
          value={password}
          onChange={onPasswordChangeHandler}
          onKeyDown={onEnterHandler}
        />
        <Button className="mb-3" type="button" onClick={onLoginButtonClickHandler}>Ingresar</Button>
        {error && <Alert>{error}</Alert>}
        <Link className="text-center" to="/registro">No tines cuenta ? Registrate aquí</Link>
      </form>
    </LoginFormStyled>
  )
} 

export default LoginForm
