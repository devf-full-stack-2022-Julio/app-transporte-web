import { Routes, Route } from 'react-router-dom';
import './App.css';

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

  return (
    <Routes>
      <Route path='/' element={<Landing token={token} />} />
      <Route path='/registro' element={<Register onRegister={() => console.log('nos registramos')} />} />
      <Route path='/inicio' element={<Login onLogin={setToken} />} />
      <Route path='/pefil' element={<Profile token={token} />} />
    </Routes>

  )
}

export default App;
