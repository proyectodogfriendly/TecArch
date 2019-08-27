import { Link } from "react-router-dom";
import React, { Component } from "react";

import "../css/profile-arq.css";

import Gallery from "react-photo-gallery";

import { photos } from "../img/photos";

import { Redirect } from "react-router-dom";

class ProfileArq extends Component {
  constructor() {
    super();
    this.state = { showModal: false, showToast: false };
    // this.services = new Services()
  }

  render() {
    console.log(this.props);
    const BasicRows = () => <Gallery photos={photos} />;

    if (this.props.userInSession) {
      if (this.props.userInSession.data.role.includes("PROFESSIONAL")) {
        console.log("ni entra!");
        return (
          <>
            <div className="container" id="fondoPerfil">
              <BasicRows />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <article className="card-arquitecto">
                    <h4>Bienvenido a TecArch</h4>
                    <p>
                      Es un hecho establecido hace demasiado tiempo que un
                      lector se distraerá con el contenido del texto de un sitio
                      mientras que mira su diseño.
                    </p>

                    <Link className="btn btn-sm btn-dark" to={`/profile`}>
                      Crear Portfolio
                    </Link>
                    <Link className="btn btn-sm btn-dark" to={`/profile`}>
                      Crear Propuesta
                    </Link>
                    <hr />
                  </article>
                </div>
                <div className="col-md-4">
                  <img className="imagen" src="../img/2.jpg" alt="img" />
                </div>
              </div>
            </div>
          </>
        );
      } else if (this.props.userInSession.data.role == "INSTITUTION") {
        return (
          <>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
            <p>Holaaaaaa</p>
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
