import React, { Component } from "react";
import AuthServices from "../../services/auth.services";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      role: "Seleccionar"
    };
    this.authServices = new AuthServices();
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password, role } = this.state;
    console.log(username, password, role);
    this.authServices
      .signup(username, password, role)
      .then(theNewUser => {
        this.setState({
          username: "",
          password: "",
          role: "Seleccionar"
        });
        this.props.setUser(theNewUser);
        this.props.history.push("/login");
      })
      .catch(err => console.log(err.response.data.message));
  };

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Registro de usuario</h1>
        <form onSubmit={this.handleFormSubmit}>
          Usuario:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          <br />
          Contraseña:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />{" "}
          <br />
          <br />
          Tipo de usuario:
          <select
            name="role"
            onChange={this.handleInputChange}
            value={this.state.role}
          >
            <option value={""} />

            <option value={"INSTITUTION"}>Institución</option>
            <option value={"PROFESSIONAL"}>Profesional</option>
          </select>
          <input type="submit" value="Registrar" />
        </form>
      </div>
    );
  }
}

export default Signup;
