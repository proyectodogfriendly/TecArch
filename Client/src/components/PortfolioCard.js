import React from "react";
import { Link } from "react-router-dom";

import "../css/portfolio-card.css";

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
    <div className="col-md-4 flip-card">
      <div className="flip-card-inner">
        <Link className="enlace" to={`/portfolios/${_id}`}>
          <div className="flip-card-front">
            {imageUrl[0] && (
              <img className="img-card" src={imageUrl[0].imgPath} alt={""} />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
