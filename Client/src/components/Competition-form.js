import React, { Component } from "react";
import Services from "../services/competition.services";

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
      conditions: ""
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
      .postCompetition(this.state)
      .then(x => {
        this.props.closeModal();
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
      console.log(response);
    });
  };

  render() {
    return (
      <>
        <h4>Crear un nuevo concurso publico</h4>

        <hr />

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="input-title">Título</label>
            <input
              name="title"
              type="text"
              className="form-control"
              id="input-title"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-category">Categoria</label>
            <input
              name="category"
              type="text"
              className="form-control"
              id="input-category"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-description">Descripción</label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="input-description"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-address">Address</label>
            <input
              name="address"
              type="text"
              className="form-control"
              id="input-mail"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-phone">Amount</label>
            <input
              name="amount"
              type="number"
              className="form-control"
              id="input-amount"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-adjudicator">Adjudicador</label>
            <input
              name="adjudicator"
              type="text"
              className="form-control"
              id="input-description"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-state">Estado</label>
            <input
              name="state"
              type="text"
              className="form-control"
              id="input-state"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="input-conditions">Condiciones</label>
            <input
              name="conditions"
              type="text"
              className="form-control"
              id="input-conditions"
              onChange={this.handleChangeInput}
            />
          </div>

          <div className="form-group">
            <label htmlFor="input-img">Añade ideas inspiradoras</label>
            <input
              name="imageUrl"
              type="file"
              multiple="multiple"
              className="form-control"
              id="input-img"
              onChange={this.handleFileUpload}
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
