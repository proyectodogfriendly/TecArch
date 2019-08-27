import React, { Component } from "react";
import { Link } from "react-router-dom";
import Services from "../services/proposal.services";



import '../css/proposal-detail.css'

class ProposalDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { Proposal: {} };
    this.service = new Services();
  }

  componentDidMount() {
    this.service
      .getOneProposal(this.props.match.params.id)
      .then(response => this.setState({ Proposal: response.data }))
      .catch(err => console.log("err", err));
  }

  render() {
    return (
      <div className="container">
       
          <div className="row">
            <div className="col-md-6">
              <h1>Detalles de {this.state.Proposal.title}</h1>
              <p>
                <strong>Nombre Arquitecto/a:</strong>{" "}
                {this.state.Proposal.nameArchitect}
              </p>

              <p>
                <strong>Nombre del proyecto:</strong>{" "}
                {this.state.Proposal.title}
              </p>
              <p>
                <small>Categoría:</small> {this.state.Proposal.category}{" "}
              </p>
              <p>
                <strong>Descripción del proyecto:</strong>{" "}
                {this.state.Proposal.description}
              </p>

              <hr />
              <Link className="btn btn-big btn-tecarch2" to="/proposals">
                Volver a propuestas
              </Link>
            </div>
            <div className="col-md-4">
              {/* <img
                src={this.state.Proposal.imageUrl}
                alt={this.state.Proposal.title}
              /> */}
 
            </div>
          </div>

      </div>
    );
  }
}

export default ProposalDetail;

// medu grid
