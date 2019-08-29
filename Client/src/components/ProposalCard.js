import React from "react";
import { Link } from "react-router-dom";

// import '../styles/competition-card.css'

const ProposalCard = ({
  nameArchitect,
  imageUrl,
  title,
  category,
  _id,
  description
}) => {
  return (
    <div className="col-md-9">
      <article className="coaster-card">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h4>{nameArchitect}</h4>
        <h4>{title}</h4>
        <h4>{category}</h4>
        <p>{description}</p>
        {imageUrl[0] && (
          <img className="img-card" src={imageUrl[0].imgPath} alt={""} />
        )}
        <Link className="btn btn-sm btn-dark" to={`/proposals/${_id}`}>
          Ver detalles
        </Link>
        <hr></hr>
      </article>
    </div>
  );
};

export default ProposalCard;
