import { useContext } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';

function LandingPage({ token, onClose }) {
  const { authState } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => navigate('/inicio')

  return (
    <div>
      <Navbar 
        userName={authState && authState.userInfo && authState.userInfo.email} 
        onClose={onClose} 
        onLogin={onLogin} />
      <Outlet />
    </div>
  )
}

export default LandingPage