import React, { Component } from "react";
import Services from "../services/competition.services";

import "../css/competition-form.css";

class CompetitionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      description: "",
      address: "",
      amount: "",
      adjudicator: "",
      state: "",
      conditions: "",
      imageUrl: []
    };
    this.service = new Services();
  }

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.service
      .postCompetition(this.state, this.props.userInSession)
      .then(x => {
        this.props.updateCompetitionList();
        // this.props.showToast();
      })
      .catch(err => console.log("error", err));
  };

  handleFileUpload = e => {
    console.dir(e.target);
    // const uploadData = new FormData();

    const uploadData = new FormData();
    const { files } = e.target;
    console.log(e.target.files);
    for (let i = 0; i < files.length; i++) {
      uploadData.append(`imageUrl`, files[i]);
    }
    console.log(uploadData.getAll("imageUrl"));
    this.service.handleUpload(uploadData).then(response => {
      this.setState({
        imageUrl: response.data.pictures
      });
    });
  };

  render() {
    return (
      <>
        <br />
        <br />

        <form
          onSubmit={this.handleFormSubmit}
          className="fade-in"
          id="formuComp"
        >
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="label-txt" htmlFor="input-title">
                  Título
                </label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  id="input-title"
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label className="label-txt" htmlFor="input-category">
                  Categoria
                </label>
                <input
                  name="category"
                  type="text"
                  className="form-control"
                  id="input-category"
                  onChange={this.handleChangeInput}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="label-txt" htmlFor="input-phone">
                  Presupuesto
                </label>
                <input
                  name="amount"
                  type="number"
                  className="form-control"
                  id="input-amount"
                  onChange={this.handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label className="label-txt" htmlFor="input-adjudicator">
                  Adjudicador
                </label>
                <input
                  name="adjudicator"
                  type="text"
                  className="form-control"
                  id="input-description"
                  onChange={this.handleChangeInput}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label className="label-txt" htmlFor="input-state">
                  Estado
                </label>
                <input
                  name="state"
                  type="text"
                  className="form-control"
                  id="input-state"
                  onChange={this.handleChangeInput}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label className="label-txt" htmlFor="input-address">
                  Provincia
                </label>
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  id="input-mail"
                  onChange={this.handleChangeInput}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="label-txt" htmlFor="input-description">
              Descripción
            </label>
            <input
              name="description"
              type="textarea"
              className="form-control"
              id="input-description"
              onChange={this.handleChangeInput}
            />
          </div>

          <div className="form-group">
            <label className="label-txt" htmlFor="input-img">
              Añade ideas inspiradoras
            </label>
            <input
              name="imageUrl"
              type="file"
              multiple="multiple"
              className="form-control"
              id="input-img"
              onChange={this.handleFileUpload}
            />
          </div>

          <div className="form-group">
            <label className="label-txt" htmlFor="input-conditions">
              Condiciones
            </label>
            <input
              name="conditions"
              type="text"
              className="form-control"
              id="input-conditions"
              onChange={this.handleChangeInput}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-sm">
            Crear
          </button>
          {/* <button
            className="btn btn-dark btn-sm"
            onClick={this.props.closeModal}
          >
            Cerrar
          </button>  */}
        </form>
      </>
    );
  }
}

export default CompetitionForm;
