import React from 'react'
import { Link } from 'react-router-dom'

import '../css/competition-card.css'


const CompetitionCard = ({ title, address, adjudicator, category,  imageUrl, _id, state, amount, conditions,description }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <article className="compet-card">
                        <h4 className="titulo-h4">{title}</h4>
                        <h3 className="titulo-h3">Dirección: {address}</h3>
                        <h3 className="titulo-h3">Adjudicación: {adjudicator}</h3>
                        <h3 className="titulo-h3">Categoría: {category}</h3>
                        <h3 className="titulo-h3">Estado:{state}</h3>
                        <h3 className="titulo-h3">Presupuesto:{amount}</h3>
                        <p className="texto-p">Condiciones: {conditions}</p>
                        <p className="texto-p">Descripción: {description}</p>
                        <hr></hr>
                        <Link className="btn btn-sm btn-tecarch" to={`/competitions/${_id}`}>Añadir propuesta</Link>
                        <Link className="btn btn-sm btn-tecarch" to={`/competitions/${_id}`}>Ver propuestas</Link>
                    </article>
                </div>
                <div className="col-4">
                    <article className="">
                        
                        <img src={imageUrl} alt={title} className="img-competition"/>
                    
                    </article>
                </div>
            </div> 
            {/* <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-7">
                    <div className="parallax-item fl-wrap" data-scrollax-parent="true">
                        <div className="parallax-header fl-wrap">
                            <span>01.</span>
                            <ul>
                                <li><a href="#">Concurso</a></li>
                                <li><a href="#">Septiembre 2019 </a></li>
                            </ul>
                        </div>
                        <img src={imageUrl} alt={title} className="img-competition"/>
                        <div className="parallax-text left-pos" data-scrollax="properties: { translateY: '-250px' }" style="transform: translateZ(0px) translateY(190px);">
                            <h3>
                                <a href="#">Teatro de Alcántara</a>
                            </h3>
                            <h4>There are many variations of passages of Lorem Ipsum</h4>
                            <a href="#" className="btn float-btn flat-btn">Añadir Propuesta</a>
                            <a href="#" className="btn float-btn flat-btn">Ver Propuestas</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      
    
        
    )
}

export default CompetitionCard

