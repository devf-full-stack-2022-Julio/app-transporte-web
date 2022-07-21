import React from 'react'
import RegisterForm from '../components/RegisterForm'

function RegisterPage({ onRegister }) {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onRegister={onRegister}/>
    </div>
  )
}

export default RegisterPage