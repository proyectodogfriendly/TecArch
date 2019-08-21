import React from 'react'
import { Link } from 'react-router-dom'

// import '../styles/competition-card.css'


const PortfolioCard = ({ nameArchitect, nameStudio, imageUrl, address, mail, phone, description, _id }) => {

    return (
        <div className="col-md-9">
            <article className="coaster-card">
                <h4>{nameArchitect}</h4>
                <h4>{nameStudio}</h4>
                <img src={imageUrl} alt={""} />
                <h4>{address}</h4>
                <h4>{mail}</h4>
                <p>{phone}</p>
                <p>{description}</p>
                <Link className="btn btn-sm btn-dark" to={`/portfolios/${_id}`}>Ver detalles</Link>
                <hr></hr>
            </article>
        </div>
    
        
    )
}

export default PortfolioCard

