import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const registration = e => {
  e.preventDefault()
  const form = e.target

  const name = form.name.value
  const email = form.email.value
  const password = form.password.value

  const data = {
    "name" : name,
    "email" : email,
    "password" : password
  }

  axios.post('https://api-edteam.alejogs4.now.sh/signup', data)
  .then(res => {
    console.log(res)
    window.location = '/login'
  })
}


const Register = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="l-block"></div>
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Registrarse</h1>
      <form onSubmit={registration.bind()}>
        <div className="form__item">
          <label htmlFor="name">
            Nombre completo
            <input type="text" name="name" id="name" placeholder="Ingrese su nombre completo" autoComplete="off"  />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="email">
            Correo electrónico
            <input type="email" name="email" id="email" placeholder="Ingrese su email" autoComplete="off"  />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Contraseña
            <input type="password" name="password" id="password" placeholder="Ingrese su contraseña"  />
          </label>
        </div>
        <div className="form__item">
            <input type="submit" className="button full" value="Iniciar sesión"  />
        </div>
      </form>
      <div className="center">
        <span>¿Yo tienes cuenta? <Link to="/login">Iniciar sesión</Link></span>
      </div>
    </div>
  </div>
)

export default Register;
