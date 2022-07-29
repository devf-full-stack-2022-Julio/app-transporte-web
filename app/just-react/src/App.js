import { Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './pages/Layout';
import Landing from './pages/Landing.page';
import Register from './pages/Register.page';
import Login from './pages/Login.page';
import Profile from './pages/Profile.page';
import useAuthenticate from './hooks/useAuthenticate';

import { AuthProvider } from './context/AuthContext';

function App() {
  const [token, ] = useAuthenticate();

  console.log('App.js')
  console.log('Estado del token');
  console.log(token);

 

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='perfil' element={<Profile />} />
        </Route>
        <Route path='/registro' element={<Register onRegister={() => console.log('nos registramos')} />} />
        <Route path='/inicio' element={<Login />} />
        <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>No hay nada aquí 🫣</p>
          </main>
        }
      />
      </Routes>
    </AuthProvider>

  )
}

export default App;
