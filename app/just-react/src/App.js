import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const [onLogin, setOnLogin] = useState(true);

  useEffect(() => {
    if (window.location.pathname === '/login') {
      setOnLogin(true);
    }
    if (window.location.pathname === '/register') {
      setOnLogin(false);
    }
  }, [])
  console.log(user)


  function onEmailChangeHandler(e) {
    setEmail(e.target.value)
  }

  function onPasswordChangeHandler(e) {
    setPassword(e.target.value)
  }

  function onLoginButtonClickHandler() {
    if (!email) {
      setError('Ingresa tu email')
      return
    }
    if (!password) {
      setError('Ingresa tu password')
      return 
    } 


  }

  function onEnterHandler(key) {
    if (key.code === "Enter") {
      onLoginButtonClickHandler()
    }
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

  // console.count('Se renderiza componente App')
  return (
    <div>
      <h1 id="title" className="title">Bienvenidos a mi app 🚀</h1>

      {onLogin ? (
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
      ) : (
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
      )}

      <div>
        {user && <h3>Usuario: {user.token}</h3>}
      </div>
    </div>
  );
}

export default App;
