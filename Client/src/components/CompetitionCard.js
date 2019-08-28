import React from "react";
import { Link } from "react-router-dom";

import "../css/competition-card.css";

const CompetitionCard = ({
  title,
  address,
  adjudicator,
  category,
  imageUrl,
  _id,
  state,
  amount,
  conditions,
  description
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="compet-card">
            <div className="row">
                <div className="col-12">
                  <div className="pr-title">
                    <h4 className="titulo-h4">{title}</h4>
                    <span>
                      <h3 className="titulo-h3">Dirección: {address}</h3>
                      <h3 className="titulo-h3">Adjudicatario: {adjudicator}</h3>
                      <h3 className="titulo-h3">Categoría: {category}</h3>
                      <h3 className="titulo-h3">Estado:{state}</h3>
                      <h3 className="titulo-h3">Presupuesto:{amount}</h3>
                      <h3 className="titulo-h3">Condiciones: {conditions}</h3>
                      <h3 className="titulo-h3">Descripción:</h3>
                      <p className="texto-p"> {description}</p>
                    </span>
                  </div>
                </div>
               
            </div>
            

            <Link className="btn btn-sm btn-tecarch5" to={`/login`}>
              Añadir propuesta
            </Link>
            <Link className="btn btn-sm btn-tecarch5" to={`/proposals`}>
              Ver propuestas
            </Link>

            <hr />
          </div>
        </div>
        <div className="col-4">
          <article className="">
            <img src={imageUrl} alt={title} className="img-competition" />
          </article>
        </div>
      </div>
    </div>
  );
};


export default CompetitionCard;
