import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const authentication = e => {
  e.preventDefault()
  const form = e.target

  const email = form.email.value
  const password = form.password.value
  const infoUser = {
    "email": email,
    "password": password
  }
  axios.post("https://api-edteam.alejogs4.now.sh/login", infoUser)
  .then(res => {
    localStorage.setItem('token', res.data.token)
    window.location = '/'
  })
}

const Login = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="l-block"></div>
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Iniciar sesión</h1>
      <form onSubmit={authentication.bind()}>
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
        <span>¿No tienes cuenta? <Link to="/register">Regístrate</Link></span>
      </div>
    </div>
  </div>
)

export default Login;
