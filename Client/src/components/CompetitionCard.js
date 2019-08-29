import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProposalForm from "./Proposal-form";
import "../css/competition-card.css";

class CompetitionCard extends Component {
  constructor() {
    super();
    this.state = {
      visible1: false,
      visible2: false
    };
  }

  handleStateVis1 = () => {
    this.setState({ visible1: true, visible2: false });
  };

  handleStateVis2 = () => {
    this.setState({ visible1: false, visible2: true });
  };
  render() {
    if (this.props.userInSession) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <article className="compet-card">
                <div className="pr-title">
                  <h4 className="titulo-h4">{this.props.title}</h4>
                  <span>
                    <h3 className="titulo-h3">
                      Dirección: {this.props.address}
                    </h3>
                    <h3 className="titulo-h3">
                      Adjudicatario: {this.props.adjudicator}
                    </h3>
                    <h3 className="titulo-h3">
                      Categoría: {this.props.category}
                    </h3>
                    <h3 className="titulo-h3">Estado:{this.props.state}</h3>
                    <h3 className="titulo-h3">
                      Presupuesto:{this.props.amount}
                    </h3>
                    <h3 className="titulo-h3">
                      Condiciones: {this.props.conditions}
                    </h3>
                    <h3 className="titulo-h3">Descripción:</h3>
                  </span>
                </div>
                <p className="texto-p"> {this.props.description}</p>

                <Link
                  className="btn btn-sm btn-tecarch5"
                  onClick={this.handleStateVis2}
                >
                  Añadir propuesta
                </Link>

                {this.state.visible2 && !this.state.visible1 && (
                  <ProposalForm
                    userInSession={this.props.userInSession}
                    competitionId={this.props._id}
                  />
                )}

                <Link
                  className="btn btn-sm btn-tecarch5"
                  to={`/proposals/competitions/${this.props._id}`}
                >
                  Ver propuestas
                </Link>

                <hr />
              </article>
            </div>
            <div className="col-4">
              <article className="">
                {this.props.imageUrl[0] && (
                  <img
                    className="img-competition"
                    src={this.props.imageUrl[0].imgPath}
                    alt={""}
                  />
                )}
              </article>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <article className="compet-card">
                <div className="pr-title">
                  <h4 className="titulo-h4">{this.props.title}</h4>
                  <span>
                    <h3 className="titulo-h3">
                      Dirección: {this.props.address}
                    </h3>
                    <h3 className="titulo-h3">
                      Adjudicatario: {this.props.adjudicator}
                    </h3>
                    <h3 className="titulo-h3">
                      Categoría: {this.props.category}
                    </h3>
                    <h3 className="titulo-h3">Estado:{this.props.state}</h3>
                    <h3 className="titulo-h3">
                      Presupuesto:{this.props.amount}
                    </h3>
                    <h3 className="titulo-h3">
                      Condiciones: {this.props.conditions}
                    </h3>
                    <h3 className="titulo-h3">Descripción:</h3>
                  </span>
                </div>
                <p className="texto-p"> {this.props.description}</p>

                <Link
                  className="btn btn-sm btn-tecarch5"
                  to={`/proposals/competitions/${this.props._id}`}
                >
                  Ver propuestas
                </Link>

                <hr />
              </article>
            </div>
            <div className="col-4">
              <article className="">
                {this.props.imageUrl[0] && (
                  <img
                    className="img-competition"
                    src={this.props.imageUrl[0].imgPath}
                    alt={""}
                  />
                )}
              </article>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CompetitionCard;
