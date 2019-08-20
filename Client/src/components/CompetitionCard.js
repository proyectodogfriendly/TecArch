import React from 'react'
import { Link } from 'react-router-dom'

// import '../styles/competition-card.css'


const CompetitionCard = ({ title, address, adjudicator, category,  imageUrl, _id, state, amount, conditions,description }) => {

    return (
        <div className="col-md-9">
            <article className="coaster-card">
                <h4>{title}</h4>
                <h4>{address}</h4>
                <h4>{adjudicator}</h4>
                <h4>{category}</h4>
                <img src={imageUrl} alt={title} />
                <h4>{state}</h4>
                <h4>{amount}</h4>
                <p>{conditions}</p>
                <p>{description}</p>
                <hr></hr>
                <Link className="btn btn-sm btn-dark" to={`/competitions/${_id}`}>Añadir propuesta</Link>
                <Link className="btn btn-sm btn-dark" to={`/competitions/${_id}`}>Ver propuestas</Link>
            </article>
        </div>
    
        
    )
}

export default CompetitionCard

