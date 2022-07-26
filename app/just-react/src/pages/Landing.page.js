import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function LandingPage({ token }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      console.log('Hubo token en landing')
      navigate('/perfil')
      return;
    } 
    console.log('No hubo token en landing');
  }, [])

  return (
    <div>
      <h1>Bienvenidos a mi app 🚀</h1>
      <code>Hola mundo</code>
    </div>
  )
}

export default LandingPage