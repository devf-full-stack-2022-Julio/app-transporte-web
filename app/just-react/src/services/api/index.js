
function loginUser({ email, password }) {
  


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