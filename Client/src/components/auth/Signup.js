import React, { Component } from "react";
import AuthServices from "../../services/auth.services";

import '../../css/signup.css'

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
     
    
    <div className="container" id="fondoSignup">
    <div className="row">
        <div className="col-md-5 card-arquitecto">
            <div className="pr-title2">
                <h4 className="titulo-h4">Bienvenido a TecArch</h4>
                <span> 
                  Introduce tu mail y tu contraseña para registrarte en TecArch.
                  Podrás crear tu portfolio de trabajos y acceder a los concursos de arquitectura.
            
                  </span>
            </div>
         
        
            <form onSubmit={this.handleFormSubmit} id="formu" className="fade-in">
            <div className="form-group2">
                <label className="label-txt">Usuario:</label>
              <input
                name="username"
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>  
                  <div className="form-group2">
                  <label className="label-txt">Contraseña:</label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />

                  </div>
                  <div className="form-group">
                    <label className="label-txt">Tipo de usuario:</label>
                    <select
                        name="role"
                        className="form-control"
                        onChange={this.handleInputChange}
                        value={this.state.role}
                      >
                        <option value={""} />

                        <option value={"INSTITUTION"}>Institución</option>
                        <option value={"PROFESSIONAL"}>Profesional</option>
                      </select>
                      <input type="submit"  className="btn btn-tecarch2" value="Registrar" />
                  
                  </div> 
            </form>
        </div>
    </div>
</div>

    );
  }
}

export default Signup;
