import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const LoginPageStyled = styled.section`
  &.login-page {
    background-color: #C2C1C2;
    height: 100vh;
  }
`
function LoginPage({ className, onLogin }) {
  return (
    <LoginPageStyled className={`${className} login-page`}>
      <LoginForm onLogin={onLogin} />
    </LoginPageStyled>
  )
}

export default LoginPage