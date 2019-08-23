import { Link } from "react-router-dom";
import React, { Component } from "react";

import { Modal, Toast } from "react-bootstrap";

class ProfileArq extends Component {
  constructor() {
    super();
    this.state = { showModal: false, showToast: false };
    // this.services = new Services()
  }

  // componentDidMount = () => this.updateList()

  // updateList = () => {
  //     this.services.getCoasters()
  //         .then(response => this.setState({ competitions: response.data }))
  //         .catch(err => console.log(err))
  // }

  handleModalOpen = () => this.setState({ showModal: true });
  handleModalClose = () => this.setState({ showModal: false });
  handleToastOpen = () => this.setState({ showToast: true });
  handleToastClose = () => this.setState({ showToast: false });

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          {/* <Modal show={this.state.showModal} onHide={this.handleModalClose}>

            <Modal.Body>
                <Portfolio-form closeModal={this.handleModalClose}  showToast={this.handleToastOpen} />
            </Modal.Body>

            </Modal> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <article className="coaster-card">
                <h4>Bienvenido a TecArch</h4>

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
  }
}

export default ProfileArq;
