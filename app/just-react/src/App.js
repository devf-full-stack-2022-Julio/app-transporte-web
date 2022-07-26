import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './pages/Layout';
import Landing from './pages/Landing.page';
import Register from './pages/Register.page';
import Login from './pages/Login.page';
import Profile from './pages/Profile.page';
import useAuthenticate from './hooks/useAuthenticate';

function App() {
  const [token, setToken] = useAuthenticate();

  console.log('App.js')
  console.log('Estado del token');
  console.log(token);

  const closeSession = () => setToken(null)

  return (
    <Routes>
      <Route path='/' element={<Layout token={token} onClose={closeSession} />}>
        <Route index element={<Landing />} />
        <Route path='perfil' element={<Profile token={token} />} />
      </Route>
      <Route path='/registro' element={<Register onRegister={() => console.log('nos registramos')} />} />
      <Route path='/inicio' element={<Login onLogin={setToken} />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>No hay nada aquí 🫣</p>
        </main>
      }
    />
    </Routes>

  )
}

export default App;
