import { useEffect } from 'react';
import { useNavigate, Outlet} from 'react-router-dom';

import Navbar from '../components/Navbar';

function LandingPage({ token, onClose }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate('/perfil')
      return;
    } 
  }, [])

  const onLogin = () => navigate('/inicio')
  
  return (
    <div>
      <Navbar userName={token} onClose={onClose} onLogin={onLogin} />
      <Outlet />
    </div>
  )
}

export default LandingPage