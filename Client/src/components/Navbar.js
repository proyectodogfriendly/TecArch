import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

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
    console.log(this.props.userInSession);
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
            <img src="../logo-tec.png"/>
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
                  <button onClick={this.logout}>Cerrar sesión</button>
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
          <Link to="/"><img src="../img/logo-tec.png"/></Link>
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
                {/* <li>
                  <Link to="/" onClick={this.logout}>
                    Cerrar
                  </Link>
                </li> */}
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
