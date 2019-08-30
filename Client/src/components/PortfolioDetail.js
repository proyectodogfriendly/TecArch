import React, { Component } from "react";
import { Link } from "react-router-dom";
import Services from "../services/portfolio.services";

import "../css/portfolio-detail.css";
import Myparallax from "../components/Myparallax";

class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { Portfolio: null };
    this.service = new Services();
  }
  componentDidMount() {
    this.service
      .getOnePortfolio(this.props.match.params.id)
      .then(response => this.setState({ Portfolio: response.data }))
      .catch(err => console.log("err", err));
  }

  render() {
    if (this.state.Portfolio) {
      console.log(this.state.Portfolio.imageUrl);
      return (
        <div className="container-fuid">
          <div className="container">
            <h1 className="titulo-detalle">
              Detalles de {this.state.Portfolio.title}
            </h1>

            <div className="row justify-content-center">
              <div className="col-md-12 datos-arqu">
                <div className="pr-title6">
                  <span>Nombre Arquitecto/a:</span>{" "}
                  {this.state.Portfolio.nameArchitect}
                  <br></br>
                  <span>Nombre del estudio:</span>{" "}
                  {this.state.Portfolio.nameStudio}
                  <br></br>
                  <span>Dirección:</span> {this.state.Portfolio.address}
                  <br></br>
                  <span>Mail:</span> {this.state.Portfolio.mail}
                  <br></br>
                  <span>Teléfono:</span> {this.state.Portfolio.phone}
                  <br></br>
                  <span>Descripción del arquitecto:</span>{" "}
                  {this.state.Portfolio.description}
                  {/* Imágenes:
                {this.state.Portfolio.imageUrl.map((img, idx) => {
                  return <img src={img.imgPath} alt="whatevere" key={idx} />;
                })} */}
                </div>

                {/* <p>
                      <strong>Imágenes:</strong> {this.state.Portfolio.imageUrl}
                    </p> */}
              </div>
              <div className="">
                <Link className="btn btn-big btn-dark" to="/portfolios">
                  Volver a portfolios
                </Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                <Myparallax />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Waiting.....</h1>;
    }
  }
}
export default PortfolioDetail;
