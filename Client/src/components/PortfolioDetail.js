import React, { Component } from "react";
import { Link } from "react-router-dom";
import Services from "../services/portfolio.services";

// import '../styles/coaster-detail.css'

class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { Portfolio: {} };
    this.service = new Services();
  }

  componentDidMount() {
    this.service
      .getOnePortfolio(this.props.match.params.id)
      .then(response => this.setState({ Portfolio: response.data }))
      .catch(err => console.log("err", err));
  }

  render() {
    return (
      <div className="container">
        <article className="coaster-detail">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>Detalles de {this.state.Portfolio.title}</h1>
              <p>
                <strong>Nombre Arquitecto/a:</strong>{" "}
                {this.state.Portfolio.nameArchitect}
              </p>

              <p>
                <strong>Nombre del estudio:</strong>{" "}
                {this.state.Portfolio.nameStudio}
              </p>
              <p>
                <strong>Imágenes:</strong>{" "}
                {this.state.Portfolio.imageUrl}
              </p>
              <p>
                <strong>Dirección:</strong>{" "}
                {this.state.Portfolio.address}
              </p>

              <p>
                <strong>Mail:</strong>{" "}
                {this.state.Portfolio.mail}
              </p>
              <p>
                <strong>Teléfono:</strong>{" "}
                {this.state.Portfolio.phone}
              </p>
              <p>
                <strong>Descripción del arquitecto:</strong>{" "}
                {this.state.Portfolio.description}
              </p>

              <hr />
              <Link className="btn btn-big btn-dark" to="/portfolios">
                Volver a portfolios
              </Link>
            </div>
            
          </div>
        </article>
      </div>
    );
  }
}

export default PortfolioDetail;

// nameArchitect: { type: String, require: true },
//     nameStudio: { type: String, require: true },
//     imageUrl: { type: String, require: true },//array
//     address: { type: String, require: true },
//     mail: { type: String, require: true },
//     phone: { type: Number, require: true },
//     description: { type: String, require: true },

