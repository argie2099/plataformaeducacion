import { Redirect, Route } from 'react-router-dom'

const Protected = ({component: Component, ...rest }) => {
  
  const isLogged = localStorage.getItem('token')

  return isLogged ? <Route {...rest} component={Component} /> : <Redirect to="/login" />
}

export default Protected
