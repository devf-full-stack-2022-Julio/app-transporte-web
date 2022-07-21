import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'; 

function RegisterForm({ onRegister }) {
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

  async function onLoginButtonClickHandler() {
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
      onLoginButtonClickHandler()
    }
  }

  return (
    <form>
      <h2>Formulario de Registro</h2>
      <input 
        type="email" 
        placeholder="Registrate con tu email" 
        value={email} 
        onChange={onEmailChangeHandler}
        onKeyDown={onEnterHandler}
      />
      <input 
        type="password" 
        placeholder="Ingresa una contraseña" 
        value={password}
        onChange={onPasswordChangeHandler}
        onKeyDown={onEnterHandler}
      />
      <input 
        type="password" 
        placeholder="Confirma tu contraseña" 
        value={passwordConfirm}
        onChange={onPasswordConfirmChangeHandler}
        onKeyDown={onEnterHandler}
      />
      <button type="button" onClick={onLoginButtonClickHandler}>Ingresar</button>
      <p className="error-message">{error}</p>
      {/* <button type="button" onClick={() => changeRoute('register')}>Inicia Sesión</button> */}
    </form>
  )
}

export default RegisterForm
