import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/inicio.css";

// import AuthServices from "../services/auth.services";

class Inicio extends Component {
  constructor(props) {
    super(props);
    // this.authServices = new AuthServices();
  }

  render() {
    //sesión iniciada
    return (
      <>
        <div className="">
          <div className="container-fluid">
            <div className="wrapper">
              <div className="pos text" />
              <div className="pos plano1" />
              <div className="pos plano2" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Inicio;
