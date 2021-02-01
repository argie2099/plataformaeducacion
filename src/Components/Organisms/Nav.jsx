import React, { createRef } from 'react';
import { NavLink } from "react-router-dom";
import logolargo from '../../logolargo-1.png'
// import '../../styles/Style.css'
import UserSession from '../Molecules/UserSession';

const menu = createRef()

const toggleMenu = (e) => {
  e.preventDefault()
  menu.current.classList.toggle('show')
}

const Nav = () => (
  <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <NavLink to="/">
              <img id="navLogo" src={logolargo} alt="Logo" className="main-logo" />
          </NavLink>
        </div>
        <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
          <nav className="main-menu" ref={menu}>
            <ul className="s-cross-center">
              <li><NavLink exact to="/" >Inicio</NavLink></li>
              <li><NavLink to="/cursos" >Cursos</NavLink></li>
              <li><NavLink to="/especialidades" >Especialidades</NavLink></li>
              <li><NavLink to="/profesores" >Nosotros</NavLink></li>
              <li><UserSession /> </li>
            </ul>
          </nav>
          <div className="main-menu-toggle to-l" onClick={e => {
            toggleMenu(e)
          }} ></div>
        </div>
      </div>
  </header>
)

export default Nav
