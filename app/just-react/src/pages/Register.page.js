import React from 'react'
import RegisterForm from '../components/RegisterForm'
import styled from 'styled-components';

const RegisterPageStyled = styled.section`
  &.register-page {
    background-color: #C2C1C2;
    height: 100vh;
  }
`

function RegisterPage({ className, onRegister }) {
  return (
    <RegisterPageStyled className={`${className} register-page`}>
      <RegisterForm onRegister={onRegister}/>
    </RegisterPageStyled>
  )
}

export default RegisterPage