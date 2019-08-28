import React, { Component } from "react";
import Services from "../services/proposal.services";
import "../css/proposal-form.css";

class ProposalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArchitect: "",
      imageUrl: "",
      title: "",
      category: "",
      description: ""
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
      .postProposal(this.state)
      .then(x => {
        this.props.updateProposalList();
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
        <form
          onSubmit={this.handleFormSubmit}
          id="portfolio"
          className="fade-in"
        >
          <div className="form-group">
            <label className="label-txt" htmlFor="input-nameArchitect">
              Nombre
            </label>
            <input
              name="nameArchitect"
              type="text"
              className="form-control"
              id="input-nameArchitect"
              onChange={this.handleChangeInput}
            />
          </div>
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
          <div className="form-group">
            <label className="label-txt" htmlFor="input-mail">
              Description
            </label>
            <input
              name="description"
              type="text"
              className="form-control"
              id="input-description"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="label-txt" htmlFor="input-img">
              Añade las imágenes de tu propuesta
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

          <button type="submit" className="btn btn-dark btn-sm">
            Crear
          </button>
        </form>
      </>
    );
  }
}

export default ProposalForm;
