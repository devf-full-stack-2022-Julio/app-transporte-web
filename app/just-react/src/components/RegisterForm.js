import React, { useState } from 'react'

function RegisterForm(props) {
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
      <button type="button" onClick={onLoginButtonClickHandler}>Ingresar</button>
      <p className="error-message">{error}</p>
      <button type="button" onClick={() => changeRoute('register')}>Inicia Sesión</button>
    </form>
  )
}

export default RegisterForm
