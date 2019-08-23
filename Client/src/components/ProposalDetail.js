import React, { Component } from "react";
import { Link } from "react-router-dom";
import Services from "../services/proposal.services";


// import Demo from '../js-proposal/demo.js'
// import '../js-proposal/imagesloaded.pkgd.min.js'
// import '../js-proposal/anime.min.js'
// import '../js-proposal/menu2.js'

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
        <article className="coaster-detail">
          <div className="row justify-content-center">
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
              <Link className="btn btn-big btn-dark" to="/proposals">
                Volver a propuestas
              </Link>
            </div>
            <div className="col-md-4">
              {/* <img
                src={this.state.Proposal.imageUrl}
                alt={this.state.Proposal.title}
              /> */}
              <main>
			
                  <div className="content content--fixed">
                    <header className="codrops-header">
                      
                    </header>
                    
                    <button className="menu-trigger">+ ver bocetos de propuesta</button>
                  </div>
                  <div id="content-1" className="content content--switch content--switch-current">
                    <h2 className="content__title">Robert Wallas</h2>
                    <div className="content__subtitle">Trabajos</div>
                  </div>
                  <div id="content-2" className="content content--switch">
                    <h2 className="content__title">Casa Martí</h2>
                  </div>
                  <div id="content-3" className="content content--switch">
                    <h2 className="content__title">Casa Módena</h2>
                  </div>
                  <div id="content-4" className="content content--switch">
                    <h2 className="content__title">Casa Ralp</h2>
                  </div>
                  <div id="content-5" className="content content--switch">
                    <h2 class="content__title">Casa Miden</h2>
                  </div>
                  <div id="content-6" className="content content--switch">
                    <h2 className="content__title">Casa Russent</h2>
                  </div>
                  <nav className="grim">
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--1"></div>
                    </div>
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--2"></div>
                    </div>
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--3"></div>
                      <div className="grim__item-content">
                        <div className="grim__item-inner">
                          <button className="menu-trigger menu-trigger--close">- cerrar</button>
                        </div>
                      </div>
                    </div>
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--4"></div>
                    </div>
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--5"></div>
                      <a href="#content-1" className="grim__link grim__item-content">
                        <div className="grim__item-inner">
                          <h3 className="grim__item-title">Trabajos</h3>
                        </div>
                      </a>
                    </div>
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--6"></div>
                      <div className="grim__item-img grim__item-img--1" ></div>
                      <a href="#content-2" class="grim__link grim__item-content">
                        <div className="grim__item-inner">
                          <h3 className="grim__item-title">Casa Martí</h3>
                          
                        </div>
                      </a>
                      <div className="grim__item-bg grim__item-bg-cover grim__item-bg--6"></div>
                    </div>
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--7"></div>
                      <div className="grim__item-img grim__item-img--2"></div>
                      <a href="#content-3" className="grim__link grim__item-content">
                        <div class="grim__item-inner">
                          <h3 class="grim__item-title">Casa Módena</h3>
                          
                        </div>
                      </a>
                      <div className="grim__item-bg grim__item-bg-cover grim__item-bg--7"></div>
                    </div>
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--8"></div>
                      <div className="grim__item-img grim__item-img--3"></div>
                      <a href="#content-4" class="grim__link grim__item-content">
                        <div className="grim__item-inner">
                          <h3 className="grim__item-title">Casa Ralp</h3>
                          
                        </div>
                      </a>
                      <div className="grim__item-bg grim__item-bg-cover grim__item-bg--8"></div>
                    </div>
                    <div class="grim__item">
                      <div className="grim__item-bg grim__item-bg--9"></div>
                      <div className="grim__item-img grim__item-img--4"></div>
                      <a href="#content-5" className="grim__link grim__item-content">
                        <div className="grim__item-inner">
                          <h3 className="grim__item-title">Casa Miden</h3>
                        
                        </div>
                      </a>
                      <div className="grim__item-bg grim__item-bg-cover grim__item-bg--9"></div>
                    </div>
                    <div className="grim__item">
                      <div className="grim__item-bg grim__item-bg--10"></div>
                      <div className="grim__item-img grim__item-img--5" ></div>
                      <a href="#content-6" className="grim__link grim__item-content">
                        <div className="grim__item-inner">
                          <h3 className="grim__item-title">Casa Russent</h3>
                          
                        </div>
                      </a>
                      <div className="grim__item-bg grim__item-bg-cover grim__item-bg--10"></div>
                    </div>
                  </nav>
		          </main>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default ProposalDetail;

// medu grid
