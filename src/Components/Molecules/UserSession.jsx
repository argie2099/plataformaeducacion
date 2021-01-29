import React from 'react';

const isLogged = localStorage.getItem('token')

const userSessionClose = () => {
  localStorage.removeItem('token')
  window.location.reload()
}

const userSessionLogin = () => {
  window.location = '/login'
}

const UserSession = () => {
  if (isLogged) {
    return <button className="button ghost small" onClick={userSessionClose.bind()} >Cerrar sesión</button>
  }
  else {
    return <button className="button small" onClick={userSessionLogin.bind()} >Iniciar sesión</button>
  }
}
 
export default UserSession;
