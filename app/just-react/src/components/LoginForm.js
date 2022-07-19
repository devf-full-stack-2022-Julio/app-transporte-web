import React, { useState } from 'react'

function LoginForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
      <button type="button" onClick={() => changeRoute('login')}>Registrate</button>
  </form>
  )
} 

export default LoginForm


import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [user, setUser] = useState(null)
 
  const [error, setError] = useState(null)




  function onLoginButtonClickHandler() {
    if (!email) {
      setError('Ingresa tu email')
      return
    }
    if (!password) {
      setError('Ingresa tu password')
      return 
    } 

    fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      .then((res) => {
        if (res.status >= 400) {
          console.error('Respuesta con código de error 🚫')
          res.json().then((error) => {
            setError(error.message)
            setUser(null)
          })
          return;
        }
        console.log('Respuesta recibida! ✅')
        res.json().then((user) => {
          setUser(user)
          setError(null)
        }) 
      })
  }



  function changeRoute(flag) {
    if (flag === 'login') {
      setOnLogin(false)
      window.history.pushState({}, "", "/register")
    }
    if (flag === 'register') {
      setOnLogin(true)
      window.history.pushState({}, "", "/login")
    }
  }
  );
}

