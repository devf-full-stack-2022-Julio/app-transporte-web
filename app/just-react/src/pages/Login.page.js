import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

const LoginPageStyled = styled.section`
  &.login-page {
    background-color: #4a4e69;
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