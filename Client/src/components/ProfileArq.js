
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import '../css/profile-arq.css'


import Gallery from "react-photo-gallery";


import { photos } from "../img/photos";

class ProfileArq extends Component {

    constructor() {
        super()
        this.state = { showModal: false, showToast: false }
        // this.services = new Services()
    }

   
    

    render(){
        const BasicRows = () => <Gallery photos={photos} />
    return (
        <>
        <div className="container" id="fondoPerfil">
            <BasicRows/>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <article className="card-arquitecto">
                    <h4>Bienvenido a TecArch</h4>
                    <p>
                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. 
                    </p>
                    
                    <Link className="btn btn-sm btn-dark" to={`/profile`}>Crear Portfolio</Link>
                    <Link className="btn btn-sm btn-dark" to={`/profile`}>Crear Propuesta</Link>
                    <hr></hr>
                </article>
                </div>
                <div className="col-md-4">
                <img className="imagen" src="../img/2.jpg" alt="img"/>
            
                </div>    

            </div>
        </div>
    
    </>
        
    )
}
}

export default ProfileArq

