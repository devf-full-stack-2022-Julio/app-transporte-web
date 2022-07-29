import React from 'react';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  &.custom-navbar {
    background-color: #274c77;
    color: white;

    .custom-navbar-text { 
      color: white;
      font-weight: bold;
    }
  }
`

function Navbar({ className, userName, onClose, onLogin }) { 
  const handleClickButton = (e) => {
    if (userName) {
      onClose(e)
    } else {
      onLogin(e)
    }
  }
  return (
    <NavbarStyled className={`${className} navbar custom-navbar`}>
      <div className="container-fluid">
        <span className="navbar-text custom-navbar-text">
          {userName ? `Bienvenido ${userName}`: `Inicia sesión` }
        </span>
        <span>
          <button onClick={handleClickButton} type="button" className="btn btn-light">
            {userName ? 'Cerrar sesión' : 'Iniciar sesión'}
          </button>
        </span>
      </div>
    </NavbarStyled>
  )
}

export default Navbar;
