import React, { Component } from "react";
import AuthServices from "../../services/auth.services";

import "../../css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.authServices = new AuthServices();
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.authServices
      .login(username, password)
      .then(theLoggedUser => {
        this.setState({
          username: "",
          password: ""
        });
        this.props.setUser(theLoggedUser);
        this.props.history.push("/profile");
      })
      .catch(err => console.log(err.response.data.message));
  };

  render() {
    return (
      <div className="container" id="fondoLogin">
        <div className="row">
          <div className="col-md-5 card-arquitecto">
            <div className="pr-title2">
              <h4 className="titulo-h4">Bienvenido a TecArch</h4>

              <span>
                Introduce tu mail y tu contraseña para entrar en tu perfil.
              </span>
            </div>

            <form
              onSubmit={this.handleFormSubmit}
              id="formu"
              className="fade-in"
            >
              <div className="form-group2">
                <label className="label-txt"> Usuario: </label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group2">
                <label className="label-txt">Contraseña: </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />

                <input
                  type="submit"
                  className="btn btn-tecarch2"
                  value="Iniciar sesión"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
