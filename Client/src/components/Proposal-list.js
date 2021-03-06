import React, { Component } from "react";
import Services from "../services/proposal.services";

import ProposalCard from "./ProposalCard";
import "../css/proposal-card.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";

class ProposalList extends Component {
  constructor() {
    super();
    this.state = { proposals: [] };
    this.services = new Services();
  }

  componentDidMount() {
    this.services
      .getAllProposals(this.props.match.params.id)
      .then(response => {
        this.setState({ proposals: response.data.proposals });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="titulo-proposal">
            Listado de propuestas para el concurso{" "}
          </h1>

          <div className="row proposal-list">
            {this.state.proposals.map(proposal => (
              <ProposalCard key={proposal._id} {...proposal} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ProposalList;
