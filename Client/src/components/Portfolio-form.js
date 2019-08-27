import React, { Component } from "react";
import Services from "../services/portfolio.services";
import "../css/portfolio-form.css";

class PortfolioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameArchitect: "",
      nameStudio: "",
      address: "",
      mail: "",
      phone: "",
      description: "",
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
      .postPortfolio(this.state)
      .then(x => {
        this.props.closeModal();
        this.props.updatePortfolioList();
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
        {/* <h4 className="texto">Crear un nuevo portfolio</h4> */}

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
            <label className="label-txt" htmlFor="input-nameStudio">
              Estudio de arquitectura
            </label>
            <input
              name="nameStudio"
              type="text"
              className="form-control"
              id="input-nameStudio"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="label-txt" htmlFor="input-address">
              Dirección
            </label>
            <input
              name="address"
              type="text"
              className="form-control"
              id="input-address"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="label-txt" htmlFor="input-mail">
              Email
            </label>
            <input
              name="mail"
              type="text"
              className="form-control"
              id="input-mail"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="label-txt" htmlFor="input-phone">
              Phone
            </label>
            <input
              name="phone"
              type="number"
              className="form-control"
              id="input-phone"
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label className="label-txt" htmlFor="input-description">
              Describe lo que diferencia tu actividad
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
              Añade tus principales proyectos
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

          <button type="submit" className="btn btn-tecarch2">
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

export default PortfolioForm;
