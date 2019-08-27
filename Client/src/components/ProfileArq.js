import { Link } from "react-router-dom";
import React, { Component } from "react";

import "../css/profile-arq.css";

import PortfolioForm from "../components/Portfolio-form";
import ProposalForm from "../components/Proposal-form";

import { Redirect } from "react-router-dom";

class ProfileArq extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showToast: false,
      visible1: false,
      visible2: false
    };
    // this.services = new Services()
  }

  handleStateVis1 = () => {
    this.setState({ visible1: true, visible2: false });
  };

  handleStateVis2 = () => {
    this.setState({ visible1: false, visible2: true });
  };

  render() {
    if (this.props.userInSession) {
      if (this.props.userInSession.data.role.includes("PROFESSIONAL")) {
        console.log("ni entra!");
        return (
          <>
            <div className="container" id="fondoPerfil">
              <div className="row">
                <div className="col-md-6 card-arquitecto">
                  <div className="pr-title">
                    <h4 className="titulo-h4">Bienvenido a TecArch</h4>
                    <span>
                      Es un hecho establecido hace demasiado tiempo que un
                      lector se distraerá con el contenido del texto de un sitio
                      mientras que mira su diseño. Es un hecho establecido hace
                      demasiado tiempo que un lector se distraerá con el
                      contenido del texto de un sitio mientras que mira su
                      diseño.
                    </span>
                  </div>

                  <Link
                    className="btn btn-sm btn-tecarch"
                    to={`/profile`}
                    onClick={this.handleStateVis1}
                  >
                    Crear Portfolio
                  </Link>
                  <Link
                    className="btn btn-sm btn-tecarch"
                    to={`/profile`}
                    onClick={this.handleStateVis2}
                  >
                    Crear Propuesta
                  </Link>
                </div>
                <div className="col-md-6">
                  {this.state.visible1 && !this.state.visible2 && (
                    <PortfolioForm />
                  )}

                  {this.state.visible2 && !this.state.visible1 && (
                    <ProposalForm />
                  )}
                </div>
              </div>
            </div>
          </>
        );
      } else if (this.props.userInSession.data.role == "INSTITUTION") {
        return (
          <>
            <div className="container" id="fondoInstitucion">
              <div className="row">
                <div className="col-md-6 card-arquitecto">
                  <div className="pr-title">
                    <h4 className="titulo-h4">
                      Bienvenido a TecArch Institución (vaya tela el git)
                    </h4>
                    <span>
                      Es un hecho establecido hace demasiado tiempo que un
                      lector se distraerá con el contenido del texto de un sitio
                      mientras que mira su diseño. Es un hecho establecido hace
                      demasiado tiempo que un lector se distraerá con el
                      contenido del texto de un sitio mientras que mira su
                      diseño.
                    </span>
                  </div>

                  <Link
                    className="btn btn-sm btn-tecarch"
                    to={`/profile`}
                    onClick={this.handleStateVis1}
                  >
                    Crear Portfolio
                  </Link>
                  <Link
                    className="btn btn-sm btn-tecarch"
                    to={`/profile`}
                    onClick={this.handleStateVis2}
                  >
                    Crear Propuesta
                  </Link>
                </div>
                <div className="col-md-6">
                  {this.state.visible1 && !this.state.visible2 && (
                    <PortfolioForm />
                  )}

                  {this.state.visible2 && !this.state.visible1 && (
                    <ProposalForm />
                  )}
                </div>
              </div>
            </div>
          </>
        );
      }
    } else {
      console.log("este es el usuario inexistente");
      return (
        <>
          <Redirect from="/profile" to="/signup" />
        </>
      );
    }
  }
}

export default ProfileArq;
