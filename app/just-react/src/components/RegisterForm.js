import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate, Link } from 'react-router-dom'; 

import Input from './atoms/Input';
import Button from './atoms/Button';
import Alert from './atoms/Alert'

import styled from 'styled-components';
const RegisterFormStyled = styled.div`
  &.register-form { 
    max-width: 300px;
    transform: translateY(calc(50vh - 50%));
    background-color: white;
  }
`


function RegisterForm({ className, onRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  function onEmailChangeHandler(e) {
    setEmail(e.target.value)
  }

  function onPasswordChangeHandler(e) {
    setPassword(e.target.value)
  }

  function onPasswordConfirmChangeHandler(e) {
    setPasswordConfirm(e.target.value)
  }

  async function onRegisterButtonClickHandler() {
    if (!email) {
      setError('Ingresa tu email')
      return
    }
    if (!password) {
      setError('Ingresa tu contraseña')
      return 
    } 
    if (!passwordConfirm) {
      setError('Confirma tu contraseña')
      return 
    }
    if (password !== passwordConfirm) {
      setError('Las contraseñas no coinciden')
      return
    }

    let user = null;
    try {
      user = await api.users.register({ password, email })
    } catch(error) {
      if (error.message) {
        setError(error.message)
      } else {
        console.error(error)
        // mandamos a algún emisor de alertas
      }
      return;
    }
    onRegister(user)
    navigate('/inicio', { state: { email, password }})
  }
  
  function onEnterHandler(key) {
    if (key.code === "Enter") {
      onRegisterButtonClickHandler()
    }
  }

  return (
    <RegisterFormStyled
      className={`${className} container-fluid shadow rounded py-4 px-3 register-form`}
    >
      <form className="d-grid gap-2">
        <h2 className="fw-bold fs-2 text-center">Registrate</h2>
        <Input
          className="mb-2" 
          type="email" 
          placeholder="Registrate con tu email" 
          value={email} 
          onChange={onEmailChangeHandler}
          onKeyDown={onEnterHandler}
        />
        <Input
          className="mb-2" 
          type="password" 
          placeholder="Ingresa una contraseña" 
          value={password}
          onChange={onPasswordChangeHandler}
          onKeyDown={onEnterHandler}
        />
        <Input
          className="mb-2"
          type="password" 
          placeholder="Confirma tu contraseña" 
          value={passwordConfirm}
          onChange={onPasswordConfirmChangeHandler}
          onKeyDown={onEnterHandler}
        />
        <Button 
          className="mb-3" 
          type="button" 
          onClick={onRegisterButtonClickHandler}
        >Ingresar</Button>
        {error && <Alert>{error}</Alert>}
         <Link className="text-center" to="/inicio">Ya tienes cuenta? Inicia sesión</Link>
      </form>
    </RegisterFormStyled>
  )
}

export default RegisterForm
