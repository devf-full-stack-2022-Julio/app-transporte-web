
function loginUser({ email, password, }) {
  return new Promise((resolve, reject) => {
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
        res.json().then((error) => reject(error))
        return;
      }
      res.json().then((user) => resolve(user)) 
    })
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  users: {
    login: loginUser
  }
}
