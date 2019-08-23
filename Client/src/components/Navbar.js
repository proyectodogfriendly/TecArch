import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css'

import AuthServices from "../services/auth.services";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.authServices = new AuthServices();
  }

  toggleMenu = () =>
    document.querySelector(".menu").classList.toggle("abierto");

  logout = () => {
    this.authServices
      .logout()
      .then(x => {
        this.props.setUser(null);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    const saludo = this.props.userInSession
      ? this.props.userInSession.data.username
      : "invitado";

    if (this.props.userInSession) {
      //sesión iniciada
      return (
        <>
          <div className="toggle-menu" onClick={this.toggleMenu}>
            &equiv;{" "}
          </div>
          <header className="menu">
            <h1>TecArch </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/competitions">Concursos actuales</Link>
                </li>
                <li>
                  <Link to="/portfolios">Portfolios</Link>
                </li>
                <li>
                  <Link to="/" onClick={this.logout}>
                    Cerrar sesión
                  </Link>
                </li>
                <li>
                  <small>Bienvenid@, {saludo}</small>
                </li>
              </ul>
            </nav>
          </header>
        </>
      );
    } else {
      //sesión no iniciada
      return (
        <>
          <div className="toggle-menu" onClick={this.toggleMenu}>
            &equiv;{" "}
          </div>
          <header className="menu">
            <h1>TecArch</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/competitions">Concursos actuales</Link>
                </li>
                <li>
                  <Link to="/portfolios">Portfolios</Link>
                </li>
                <li>
                  <Link to="/signup">Registro</Link>
                </li>
                <li>
                  <Link to="/login">Inicio de sesión</Link>
                </li>
                <li>
                  <Link to="/" onClick={this.logout}>
                    Cerrar
                  </Link>
                </li>
                <li>
                  <small>Bienvenid@, {saludo}</small>
                </li>
              </ul>
            </nav>
          </header>
        </>
      );
    }
  }
}
export default NavBar;
