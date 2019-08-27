import React from "react";
import { Link } from "react-router-dom";

// import '../styles/competition-card.css'

const PortfolioCard = ({
  nameArchitect,
  nameStudio,
  imageUrl,
  address,
  mail,
  phone,
  description,
  _id
}) => {
  return (
    <div className="col-md-3">
      <article className="coaster-card">
        <h4 className="texto-h4">{nameArchitect}</h4>
        <h4>{nameStudio}</h4>
        <img className="img-portfolio" src={imageUrl} alt={""} />
        <h4>{address}</h4>
        <h4>{mail}</h4>
        <p>{phone}</p>
        <p>{description}</p>
        <Link className="btn btn-sm btn-te" to={`/portfolios/${_id}`}>
          Ver detalles
        </Link>
      </article>
    </div>
  );
};

export default PortfolioCard;
