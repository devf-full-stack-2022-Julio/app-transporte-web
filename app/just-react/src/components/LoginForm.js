import React, { useState } from 'react'
import api from '../services/api'

function LoginForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

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
    setUser(user)
  }

  console.log({ user })

  return (
    <form>
      <h2>Formulario de Inicio de Sesión</h2>
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
