
import React, { Component } from 'react'
import Services from '../services/portfolio.services'

import PortfolioCard from './PortfolioCard'
// import Gallery from "react-photo-gallery";
import '../css/portfolio-list.css'

// import { photos } from "../img/photos";
class PortfolioList extends Component {

    constructor() {
        super()
        this.state = { portfolios: [] }
        this.services = new Services()
    }

    componentDidMount() {
        this.services.getAllPortfolios()
            .then(response => {
                console.log(response)
                this.setState({ portfolios: response.data })
            })
            .catch(err => console.log(err))
    }


    render() {
        // const BasicRows = () => <Gallery photos={photos} />
        console.log(this.state.portfolios)
        return (
            <>
           
        {/* <BasicRows/> */}
        <div className="container titulo">
            <h1 className="titulo-competition">Listado de portfolios de arquitetura </h1>
        </div>
       
            <div className="container fondo-portfolio"> 
                <div className="row portfolio-list">

                    {this.state.portfolios.map(portfolio => <PortfolioCard key={portfolio._id} {...portfolio} />)}

                </div>
            </div>  
            </>
        )
    }
}


export default PortfolioList