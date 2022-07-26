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

function Navbar({ className, userName, onClose }) { 
  return (
    <NavbarStyled className={`${className} navbar custom-navbar`}>
      <div className="container-fluid">
        <span className="navbar-text custom-navbar-text">
          Bienvenido {userName}
        </span>
        <span>
          <button onClick={onClose} type="button" className="btn btn-light">Cerrar sesión</button>
        </span>
      </div>
    </NavbarStyled>
  )
}

export default Navbar;
