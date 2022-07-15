import { useState } from 'react';
import './App.css';


function App() {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

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

  function onEnterHandler(key) {
    if (key.code === "Enter") {
      onLoginButtonClickHandler()
    }
  }

  // console.count('Se renderiza componente App')
  return (
    <div>
      <h1 id="title" className="title">Bienvenidos a mi app 🚀</h1>

      <form>
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
      </form>

      <div>
        {user && <h3>Usuario: {user.token}</h3>}
      </div>
    </div>
  );
}

export default App;
